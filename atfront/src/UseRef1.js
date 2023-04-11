/* 
This file is about the basic use of useRef
The input textbox is focused directy right after the initial render.
Then instead of having a useState to where you set the value of the input in an onChange event,
you use the useRef.
Take a look at the console to understand this concept
 */
import { useEffect, useRef } from "react";

const UseRefBasic = () => {
    const inputContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputContainer.current.value);
        console.log(divContainer.current);
    };
    useEffect(()=>{
        console.log(inputContainer.current);
        inputContainer.current.focus();
    }, []);
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' ref={inputContainer}/>
            <button type="submit" >Submit</button>
        </form>
        <div ref={divContainer}>I am a div!</div>
        </>
    );
};
export default UseRefBasic;