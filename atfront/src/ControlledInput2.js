/* 
This file is about controlled inputs but with multiple inputs
Instead of onSubmit, onClick is used and instead of a callback function in setting array,
where in this case is setItemList while in the ControlledInput1 file it is setAccounts
just to show that both ways can be done to achieve the same goal.
 */
import { useState } from "react";

const ContMultipleInputs = () => {
    const [item, setItem] = useState({labelName:'', price: '', category:''});
    const [itemList, setItemList] = useState([]);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItem({...item, [name]: value}); // The inside container is curly braces because item is an object and
        // it the spread operator will indicate that the properties is being copied.
    };
    const handleClick = (e) => {
        e.preventDefault();
        if(item.labelName && item.price && item.category){ // checks if all textboxes are inputed something
            const newItem = { ...item, id: new Date().getTime().toString() };
            setItemList([...itemList, newItem]); //The inside container is a bracket because it indicates an array and
            // the spread operator is copying rest of the items in the array.
            setItem({labelName:'', price:'', category:''});
        };
    };

    return(
        <>
            <article>
                <form>
                    <label htmlFor="labelName">Label Name: </label>
                    <input type='text' name="labelName" value={item.labelName} id='labelName' onChange={handleChange} />

                    <label htmlFor="price">Price: </label>
                    <input type='text' name="price" value={item.price} id='price' onChange={handleChange}/>

                    <label htmlFor="category">Category: </label>
                    <input type='text' name="category" value={item.category} id='category' onChange={handleChange}/>
                    <button type="button" onClick={handleClick} >Submit</button>
                </form>
            </article>
            {itemList.map((item)=>{
                return(
                    <div>
                        <span>{item.labelName} </span><span>{item.price} </span><span>{item.category}</span>
                    </div>
                );
            })}
        </>
    );
};
export default ContMultipleInputs;