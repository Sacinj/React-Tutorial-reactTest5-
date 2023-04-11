/* 
This file is about Short Circuit and Ternary operator to demo conditional rendering
ShortCircuit demos short circuit operators
Ternary demos ternary operator with button to toggle states
ToggleComponent and TheComponent are demos about toggling a component using short
circuit operator && and also revisiting the Eventlistener with cleanup
 */
import { useEffect, useState } from "react";

export const ShortCircuit = () => {
    const [text, setText] = useState('');
    return(
        <>
            <h1>{text || 'Im an OR operator. Im the 2nd value because my first value is falsey'}</h1>
            {text && <h2>Im an AND operator (so an empty string is printed) I am not printed</h2>}
            {!text && <div><h3>I'm an notAND operator</h3><p>So the second value is printed(which is me)</p></div> }
        </>
    );
};



export const Ternary = () => {
    const [isError, setIsError] = useState(false);
    return(
        <>
            <button type="button" onClick={()=>{setIsError(!isError)}} >To error or not to error</button>
            <h4>{isError && 'Error...' }</h4>
            {
                isError ? (<p>there is an error :(</p>):(<p>free of errors :)</p>)
            }
        </>
    );
};

export const ToggleComponent = () => {
    const [show, setShow] = useState(false);
    return(
        <>
            <button type="button" onClick={()=>{setShow(!show)}} >Show/Hide</button>
            {show && <TheComponent />}
        </>
    );
};

const TheComponent = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    }; 
    useEffect(()=>{
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, []);
    return(
        <>
            <h5>Window Size: {size}px</h5>
        </>
    );
};
