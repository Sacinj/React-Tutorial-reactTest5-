/* This is a chat app where one account can message another account when they input that they are in the same room
then they will both be able to see their input/messages in the chatbox immediately
Also we can see that users are checked to see if they are logged in even when they refresh or leave the tab using cookies
This component uses firestore(in test mode, might want to change rule settings later) and cookies so firebase and universal-cookie were installed in the terminal
 */
import { auth, db, googleProvider} from "./config/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import Cookies from "universal-cookie";
import { useState, useRef, useEffect } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from "firebase/firestore"; //adds a document to a collection


const cookies = new Cookies();


const ChatApp = () => {
    const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
    // if there is an auth-token anywhere in this component or the whole app if you place it in
    // the app component then the isAuth will be true or represented as true or false
    const [room, setRoom] = useState(null);
    const roomInputRef = useRef(null);

    const signUserOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
        setRoom(null);
    };

    // 1stly isAuth is evaluated if isAuth is false then <Auth /> component is run
    if (!isAuth) {
        return(
            <div>
                <Auth setIsAuth={setIsAuth}/>
            </div>
        );
    };

    // 2nd if isAuth is true then this will be returned, to enter a room
    return(
        <>
            {room ? <ChatBox room={room}/> : 
            <div>
                <label>Enter Room Name:</label>
                <input ref={roomInputRef} ></input>
                {/* using useRef instead of onChange so that the room variable would not be true and run the first operand after
                inputting only one letter so it will only update the room state only after clicking the button*/}
                <button onClick={()=> setRoom(roomInputRef.current.value)} >Enter Chat</button>
            </div> }
            <div>
                <button onClick={signUserOut}>Sign Out</button>
            </div>
        </>
    );
};

export default ChatApp;




export const Auth = (props) => {
    const { setIsAuth } = props; //destructure it but you can also not do it like this

    const signInWithGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result); //information about the account, you can also not store it just remove "const result = "
            cookies.set("auth-token", result.user.refreshToken)    //store token in a cookie to associate the user that is logged in
            // you can call it anything other than auth-token. You can check by inspecting the webpage, go to application
            // Click Cookies in the Storage tab. auth token would appear when a user is logged in even when they refresh or leave the page
            setIsAuth(true); // setting it to be true to automatically get in the Enter room from the ChatApp component after signing in
        } catch(err) {
            console.error(err);
        }
    };

    return(
        <div>
            <p>Sign in With Google</p>
            <button type="button" onClick={signInWithGoogle}>Click to Sign in with Google</button>
        </div>
    );
};





export const ChatBox = (props) => {
    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const messagesRef = collection(db, "messages"); // create the messages collection first in the firestore
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt")); // orderBy is to order the messages to when it was created
        // if we use orderBy("createdAt")- problem with that is firestore does not allow by default for you to have an order by function in a field 
        // to where the other specifications you have, so you can only order by the room because we are specifiying that we want to grab the messages
        // where the room is equal to room. But there is a work around it by creating an index
        // 1. Go to firestore and click query builder
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => { // store it to unsuscribe for clean up but you can also not store it
            let messagesArray = [];
            snapshot.forEach((doc) => {
                messagesArray.push({...doc.data(), id: doc.id});
            });
            setMessages(messagesArray)
        });

        return () => unsuscribe(); // this is to clean the useEffect
    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(newMessage==="") return;
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room, // since the fieldname and the value which is the variable room has the same name; so instead of room: room
        });
        setNewMessage(""); //empty input after sending message
    }

    return(
        <div>
            <div>
                <h2>Welcome To: {room.toUpperCase()}</h2>
            </div>
            <div>{messages.map((message) => (
                <div key={message.id}>
                    <span>{message.user}:  </span>
                    {message.text}
                </div>
            
            ))}</div>

            <form onSubmit={handleSubmit}>
                <input placeholder="Type your message here..." onChange={(e) => {setNewMessage(e.target.value)}} value={newMessage}></input>
                <button type="submit" >Send</button>
            </form>
        </div>
    );
};