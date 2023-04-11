/* 
This file is another way to show payment options one by one using short circuit operations.
status: success (but the instructions component is inside the Options component meanign it
will show the instructions directly below)
Try to imagine instead of short circuit we use ternary operator. what to put at the false condition?
 */
import { useState } from "react";

const Options = () => {
    const pmDetails = [
        {
            title: 'GCash',
            text: 'Send payment to 11111'
        },
        {
            title: 'PayMaya',
            text: 'Send payment to 22222'
        },
        {
            title: 'PayPal',
            text: 'Send payment to 33333'
        }
    ]
    const [gcshow, setGcShow] = useState(false);
    const [pmshow, setPmShow] = useState(false);
    const [ppshow, setPpShow] = useState(false);
    return(
        <section style={{border:'3px solid black'}}>
            <p style={{color:'red', fontSize:'2rem'}}>Payment Options:</p>
            <button type="button" onClick={()=>{setGcShow(!gcshow);setPmShow(false);setPpShow(false)}}>GCash</button>
            <button type="button" onClick={()=>{setPmShow(!pmshow);setPpShow(false);setGcShow(false)}}>PayMaya</button>
            <button type="button" onClick={()=>{setPpShow(!ppshow);setPmShow(false);setGcShow(false)}}>Paypal</button>
            {gcshow && <Instructions title={pmDetails[0].title} text ={pmDetails[0].text} />}
            {pmshow && <Instructions title={pmDetails[1].title} text ={pmDetails[1].text} />}
            {ppshow && <Instructions title={pmDetails[2].title} text ={pmDetails[2].text} />}
        </section>
    );
}; export default Options;

const Instructions = (props) => {

    return(
        <div style={{border: '7px solid green'}}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    );
};