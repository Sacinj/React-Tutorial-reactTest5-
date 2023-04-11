// 4:48:22
/* 
This file is about my own attempt at taking input (q and a) and storing in an array
and displaying the array. 
This is done with multiple components
Status: fail
 */
import React, { useState } from "react";

const styles = {
    border: "1px, solid, black",
    color: "grey"
}

const Page = () => {
    return (
        <React.Fragment>
            <AddQandA></AddQandA>
            
        </React.Fragment>
    );
};
export default Page;

const quiz = [
    {
        qstn: 'what is your name',
        ans: 'murlo'
    }
];

const AddQandA = () => {
    const [qa, setQA] = useState(quiz)
    const newqa = [];
    const [q_input, setQInput] = useState(''); // what is the diff if I use null as default value?
    const [a_input, setAInput] = useState('');
    const qinput_chh = (e) => {
        setQInput(e.target.value);
    };
    const ainput_chh = (e) => {
        setAInput(e.target.value);
    };

    const add_ch = () => {

        /* qa.push({qstn:{q_input}, ans:{a_input}});
        setAInput('');
        setQInput(''); */

        /* async function test() {
            await (() => {qa.push({qstn:{q_input}, ans:{a_input}})});
            setAInput('');
            setQInput('');
        } */
        newqa = [...qa, {qstn:{q_input}, ans:{a_input}}]
        setAInput('');
        setQInput('');
    };

    return(
        <div className="AddQandA">
            <form>
            <label>Add Question <input type='text' value={q_input} onChange={qinput_chh} /></label>
            <label>Add Answer <input type='text' value={a_input} onChange={ainput_chh} /></label>
            <button type="button" onClick={add_ch}>ADD</button>
            </form>
            <Quizer arrayOfQA={qa} ></Quizer>
        </div>
    );
};

const Quizer = (props) => {
    /* const [trigger, setTrigger] = useState(0);
    const reveal_ch = () => {
        setTrigger(trigger+1);
    }; */
    return(
        <div className="Quizer">
            <h1>Quiz yourself</h1>
            {props.arrayOfQA.map((qna) => {
                return(
                    <div key={qna.ans}>
                        <h2>{qna.qstn}</h2>
                        <h2>{qna.ans}</h2>
                    </div>
                );
            })}
            {/* <button type="button" onClick={reveal_ch} >Reveal Answer</button> */}
        </div>
    );
};




