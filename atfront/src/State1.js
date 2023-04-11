/* this file is about useState.
Ustate is a button that changes what is shown in the screen to 2 values
Ustate2 is a list of objects with their own button to delete them from the Array
and also an overall button to clear all items using inline function*/

import React, { useState } from "react";

export const Ustate = () => {
    const [value, setValue] = useState('1st value');

    const value_ch =() =>{
        if(value==='1st value'){
            setValue('2nd value');
        } else if (value==='2nd value'){
            setValue('1st value');
        }
    }
    return (
        <React.Fragment>
            <h1>{value}</h1>
            <button type='button' onClick={value_ch} >Change the value</button>
        </React.Fragment>
    );
}

const peeps = [
    {id:1, name:'paula'},
    {id:2, name:'enjae'},
    {id:3, name:'sambueno'}
];

export const Ustate2 = () => {
    const [people, setPerson] = useState(peeps);
    const remove_ch =(id) =>{
        let newpeeps = people.filter((person)=>person.id!==id);
        setPerson(newpeeps);
    };

    return(
        <>
            {
                people.map((person)=>{
                    return(
                        <div key={person.id}>
                            <p>{person.name}</p>
                            <button type="button" onClick={()=>remove_ch(person.id)} >remove person</button>
                        </div>
                    );
                })
            }
            <button type='button' onClick={()=>setPerson([])} >Clear All</button>
        </>
    );
}