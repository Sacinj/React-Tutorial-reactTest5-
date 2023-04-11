/* 
Creating a simple form using controlled inputs. 
Adding the inputted details to the array
The key used or the unique id is based on the time the inputed details are submitted. So upon submission
 */
import { useState } from "react";

const ControlledInput = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [accounts, setAccounts] = useState([]);

    const submit_handle = (e) => {
        e.preventDefault();
        const acc = {id: new Date().getTime().toString(), email, pass};
        if(email && pass){
            setAccounts((accounts)=>{ 
                return([...accounts, acc]);
            }); //can you also do setAccounts(...accounts, acc)?
            setEmail('');
            setPass('');
        } else {
            console.log('lacking inputs');
        }
    };

    return(
        <>
        <form onSubmit={submit_handle} >
            <label htmlFor="email" >Email : </label>
            <input type='text' id='email' name='email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="pass" >Password : </label>
            <input type='text' id='pass' name='pass' value={pass} onChange={(e)=>setPass(e.target.value)} />
            <button type="submit" >Submit</button>
        </form>
        {
            accounts.map(account=>{
                return(
                    <>
                    <h1>{account.email}</h1>
                    <p>{account.pass}</p>
                    </>
                );
            })
        }
        </>
    );
};
export default ControlledInput;