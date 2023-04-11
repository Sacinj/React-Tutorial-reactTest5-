/* 
This file demonstrates using useContext for Context API to avoid prop drilling.
ContextAPI is the root component with the state of people and removePerson function.
List needs to use the people state so we use useContext to access the value from the root component
SinglePerson needs to use removePerson also
 */
import React, { useContext, useState } from "react";

const PersonContext = React.createContext();

const ContextAPI = () =>{
    const [people, setPeople] = useState([
        {id: 1, name: "Abby"}, {id:2, name: "Bobby"}, {id:3, name: "Cara"}
    ]);
    const removePerson = (id) => {
        setPeople((people)=>{
           return people.filter((person)=>person.id !== id);
        });
    };
    return(
        <PersonContext.Provider value={{removePerson, people}}>
            <h1>Context API to avoid Prop Drilling</h1>
            <List />
        </PersonContext.Provider>
    );
};
export default ContextAPI;

const List = () => {
    const peeps = useContext(PersonContext);
    return(
        <section>
            {
                peeps.people.map((person)=>{
                    return(
                        <>
                        <p>----------------</p>
                        <SinglePerson key={person.id} {...person} />
                        <p>----------------</p>
                        </>
                    );
                })
            }
        </section>
    );
};

const SinglePerson = ({id, name}) => {
    const {removePerson} = useContext(PersonContext);
    return(
        <article>
            <p>{name}</p>
            <button type="button" onClick={()=>removePerson(id)}>remove</button>
        </article>
    );
};