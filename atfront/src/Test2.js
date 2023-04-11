/*
This file shows using an array of objects to create a booklist
event handlers : onClick and onMouseOver
Destructuring properties
event object and event.target
Map function
Alert
*/

// Array of objects
const books = [
    {
        id: 1,
        img: 'https://cdn.quotesgram.com/small/55/56/463110908-BlakeBelladonnaProfilePicture1.png',
        title: 'Book 1',
        year : 2001
    },
    {
        id: 2,
        img: 'https://cdn.quotesgram.com/small/55/56/463110908-BlakeBelladonnaProfilePicture1.png',
        title: 'Book 2',
        year: 2002
    }
]

const BookList = () => {
    return(
        <section className = "Book_List">
            {
                books.map((book) => {
                    //const {img, title, year} = book;
                    return (
                        /* <div>
                            <h1>{title}</h1>
                            <h2>{year}</h2>
                        </div> */
                        <Book key = {book.id} book = {book} ></Book> 
                    );
                })
            }
        </section>
    );
}
export default BookList;

const Book = (props) => {
    const {img, title, year} = props.book

    const clickHandler = (e) => {
        alert('you clikced the button');
        console.log(e);
        console.log(e.target);
    };
    const param_ch = (year) => {
        console.log(year);
    };

    return(
        <article className = "Book">
            <img src={img} alt='pic of blake' onMouseOver={()=>{
                console.log(title+'hoverred'); //hover over the tile and see it console logged (doesnt seem to work need to click pa)
            }}  />
            <h1>{title}</h1>
            <h2>{year}</h2>
            <button type="button" onClick={clickHandler} >Click meee</button>
            <button type="button" onClick={() => param_ch(year)} >Pass parameter</button>
        </article>
    );
}