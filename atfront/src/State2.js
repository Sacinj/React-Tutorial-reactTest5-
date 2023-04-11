// This file shows usestate change only one property of an object by using spread operator
// Also a simple integer counter to increase, decrease, and clear back to 0 
// Lastly a complex counter with a timer that demonstrates the need to use
//functional approach to set a new value

import React, { useState } from "react";

export const UStateObject = () => {

    const [person, setPerson] = useState({
        name: "Harold",
        age: 34,
        occupation: "king of far far away"
    });
    const occupation_ch =() => {
        setPerson({...person, occupation:'frog'});
    }
    return(
        <>
        <section>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.occupation}</p>
            <button type='button' onClick={occupation_ch}>Change occupation</button>
        </section>
            
        </>
    );
};

export const UStateCounter =()=> {
    const [value, setValue] = useState(0);

    return(
        <React.Fragment>
            <h1>Regular Counter</h1>
            <h2>{value}</h2>
            <button type='button' onClick={()=>setValue(value+1)} >Increase</button>
            <button type='button' onClick={()=>setValue(value-1)} >Decrease</button>
            <button type='button' onClick={()=>setValue(0)} >Reset</button>
        </React.Fragment>
    );
};

export const UStateCounterComplex = () => {
    const [value, setValue] = useState(0);
    const increase_ch = () => {
        setTimeout( () => {
            setValue((prevState)=>{return prevState+1;});
        }, 2000);
    };
    return (
        <>
        <section>
            <h3>Complext counter with timer</h3>
            <h4>{value}</h4>
            <button type="button" onClick={increase_ch} >Increase after 2 secs</button>
        </section>
        </>
    );
};