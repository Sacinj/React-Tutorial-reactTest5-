/* This file shows the types of components
+ properties
+children
+inline styling
+global variables
+displaying image from a link online
*/
import './Test1.css';

const ex1 = 'variable outside of the components';
const Obj1 = {
    img:'https://cdn.quotesgram.com/small/55/56/463110908-BlakeBelladonnaProfilePicture1.png',
    title: 'Object 1 is the title',
    number: 1
}

const ParentComponent = () => {
    return(
        <div>
            <Func1 prop1 = 'a string' prop2 = {12} />
            <Func1 prop1 = 'a second string' />
            <Func2 img1={Obj1.img}  />
            <Func2>
                <p>this is a children property</p>
            </Func2>
        </div>
    );
} 
export default ParentComponent;
// stateless functional component
function Func1(props) {
    console.log(props);
    return(
        <div className="Func1">
            <p style= {{color: '#617d98', fontSize: 'o.75rem', marginTop: '0.25rem'}}>stateless functional component</p>
            {console.log(props)}
            <p>Property 1 = {props.prop1} </p>
            <p>Property 2 = {props.prop2} </p>
        </div>
    );
}
//stateless arrow function component
const Func2 = (prop) => {
    return(
        <div className='Func2' >
            <p>stateless arrow functional component</p>
            <p>{ex1.toUpperCase()}</p>
            <img src={prop.img1} alt="blake beladonna" />
            {prop.children}
            <p>Can add children property anywhere.</p>
        </div>
    );
}

/* 
just testing the shortcuts of vscode
const avar = 'sdkhfasdf'
const lastvar = 3; 
const avar2 = 'dkfjaldfj'
*/


// notes
//<a href="reactTesting1.html"><img src="reactTesting1images/logo.jpg"></a>