//5:38:11
/* 
This file is a practice on how to get input (q and a) from user and display them in a ordered list or table
all of this is done under only 1 component
--input of both text box is handled by one onchange function
 */
import React, { useState } from "react";

const test = [
    {
        ques: "What is your name?",
        ans: "Paula"
    },
    {
        ques: "What is your last name?",
        ans: "Sambueno"
    }
]

const DisplayQA = () => {
    const[array, setArray] = useState([]);
    const[indata, setIndata] = useState({inQ:'',inA:''});

    const in_ch = (e) => {
        setIndata({...indata,[e.target.name]:e.target.value});
    };
    let {inQ,inA} = indata; //need same name with the indata props ang new placeholders
    const add_btn = () => {
        setArray([...array,{inQ,inA}]);
        setIndata({inQ:'',inA:''});
    };

    return(
        // <AddQA test={test} ></AddQA>
        <React.Fragment>
            <form>
                <input type='text' name='inQ' value={indata.inQ} onChange={in_ch} placeholder='Question here' ></input>
                <input type='text' name='inA' value={indata.inA} onChange={in_ch} placeholder='Answer here' ></input>
                <button type="button" onClick={add_btn}>ADD</button>
            </form>
           {/*  <ol> 
                {array.map((qa, index)=>{
                    return(
                        <li key={index}>Question:{qa.inQ} Answer:{qa.inA}</li>
                    );
                })}
            </ol> */}

            <table border={1} width='30%' cellPadding={10}> 
                <tbody>
                    <tr>
                        <td>Question</td>
                        <td>Answer</td>
                        {
                            array.map((qa,index)=>{
                                return(
                                    <tr key={index}>
                                        <th>{qa.inQ}</th>
                                        <th>{qa.inA}</th>
                                    </tr>
                                );
                            })
                        }
                    </tr>
                </tbody>
            </table>

        </React.Fragment>
    );
};
export default DisplayQA;

/* const AddQA = (props) => {
    const trig = false;
    const [inQ, setinQ] = useState('');
    const [inA, setinA] = useState('');
    const inQ_ch = (e) => {
        setinQ(e.target.value);
    };
    const inA_ch = (e) => {
        setinA(e.target.value);
    };
    const add_btn = () => {
        props.test.push({ques:{inQ}, ans:{inA}});
        trig = true;
    };


    return(
        <>
            <form>
                <label>Add Quastion: <input type="text" value={inQ} onChange={inQ_ch} ></input></label>
                <label>Add Answer: <input type="text" value={inA} onChange={inA_ch} ></input></label>
                <button type="button" onClick={add_btn}>ADD</button>
            </form>
            <ol>
            {
                props.test.map((qanda)=>{
                    return(
                        <li key={qanda.ans} > question: {qanda.ques} answer: {qanda.ans} </li>
                    );
                })
            } 
            </ol>
            
        </>
    );
}; */