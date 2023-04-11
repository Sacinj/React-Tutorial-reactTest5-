// This file covers the useEffect Basics
// UEffectBasic demostrates changing the tab title based on number of value or clicks
import { useState, useEffect } from "react";

export const UEffectBasics = () => {
    const [value, setValue] = useState(0);
    const [dependency, setDependency] = useState(0);

    useEffect( () => {
        if(value===1){
            document.title = `New Message`;
        } else if (value>1){
            document.title = `New Message(${value})`;
        }
    });
    useEffect ( () => {
        console.log('This useEffect will only run on the initial render');
    },[]); //Since there is an empty array in the second parameter

    useEffect ( () => {
        console.log('Will run on initial render and if dependecy has changed');
    },[dependency]);

    return (
        <>
        <h1>{value}</h1>
        <button type='button' onClick={()=>{setValue(value+1); }} >Add Message</button>
        <button type="button" onClick={()=>{setDependency(dependency-1)}} >Update dependency</button>
        </>
    );
};

export const UEffectCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth);
    const changeSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('resize', changeSize);
        return () => {
            console.log('cleaup');
            window.removeEventListener('resize', changeSize);
        }
    });
    console.log('render');

    return (
        <>
        <p>Window resizing</p>
        <p>{size} pixels</p>
        </>
    );
};