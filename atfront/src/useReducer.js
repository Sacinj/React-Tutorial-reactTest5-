/* 
This file is about using useReducer to add or remove a person from an array of people,
to display and hide a modal after every click of the button,
to change the content of the modal if none is inputed in the form
Note: you can place reducer and Modal in separate files.
*/
import { useReducer, useState, useEffect } from "react";

const reducer = (state, action) => {
    if(action.type === 'ADD_PERSON'){
        const newPeople = [...state.people, action.payload];
        return(
            {
                ...state,
                people:newPeople,
                showModal: true,
                modalContent: 'Person Added',
            }
        );
    };
    if(action.type === 'CLOSE_MODAL'){
        return{...state, showModal: false};
    };
    if(action.type === 'REMOVE_PERSON'){
        const newPeople = state.people.filter((person)=>person.id !== action.payload);
        return {...state, people:newPeople};
    }
    if(action.type === 'NO_INPUT'){
        return{...state, showModal:true, modalContent:'Enter a Name'};
    }
    throw new Error('no matching action type');
};

const defaultState = {
    people: [],
    showModal: false,
    modalContent:'',
};

const UseReducerBasic = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            const newPerson = {id: new Date().getTime().toString(), name};
        dispatch({type: "ADD_PERSON", payload: newPerson});
        setName('');
        } else {
            dispatch({type:"NO_INPUT"});
        }
    };
    const closeModal = () => {
        dispatch({type:"CLOSE_MODAL"});
    };

    return(
        <>
        {state.showModal && (<Modal content={state.modalContent} close={closeModal} />)}
        <form onSubmit={handleSubmit}>
            <label>Name:<input type='text' value={name} onChange={(e)=>setName(e.target.value)} /></label>
            <button type="submit" >Add Person</button>
        </form>
        {state.people.map((person)=>{
            return(
                <div key={person.id}>
                    <p>{person.name}</p>
                    <button type="button" onClick={()=>{dispatch({type:'REMOVE_PERSON', payload:person.id})}} >remove</button>
                </div>
            );
        })}
        </>
    );
};
export default UseReducerBasic;

const Modal = ({content, close}) => {
    useEffect(()=>{
        setTimeout(()=>{close();},3000);
    });
    return(
        <div style={{border:'4px solid black'}}>
            <p>{content}</p>
        </div>
    );
};