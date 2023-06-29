// import {useState} from 'react';
import './App.css';
// import ParentComponent from './Test1';
// import BookList from './Test2';
// import {Ustate} from './State1';
// import {Ustate2} from './State1';
//import {UStateObject} from './State2';
//import {UStateCounter} from './State2'
//import {UStateCounterComplex} from './State2';
// import Page from './Prac1';
// import {UEffectBasics} from './Effect1';
// import {UEffectCleanUp} from './Effect1';
// import DisplayQA from './Pract1';
/* import {ShortCircuit} from './ShortCircuit';
import {Ternary} from './ShortCircuit';
import {ToggleComponent} from './ShortCircuit'; */
// import Options from './Paymentprac1';
// import ControlledInput from './ControlledInput1';
// import ContMultipleInputs from './ControlledInput2';
// import UseRefBasic from './UseRef1';
// import UseReducerBasic from './useReducer';
// import ContextAPI from './ContextAPI';
// import ProductPT from './PropTypes';
import ChatApp from './ChatApp';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <BookList></BookList> */}
      {/* <Ustate></Ustate> */}
      {/* <Ustate2></Ustate2> */}
      {/* <UStateObject></UStateObject> */}
      {/* <UStateCounter></UStateCounter> */}
      {/* <UStateCounterComplex></UStateCounterComplex> */}
      {/* <Page></Page> */}
      {/* <UEffectBasics></UEffectBasics> */}
      {/* <UEffectCleanUp></UEffectCleanUp> */}
      {/* <DisplayQA></DisplayQA> */}
      {/* <ShortCircuit></ShortCircuit>
      <Ternary></Ternary>
      <ToggleComponent /> */}
      {/* <Options></Options> */}
      {/* <ControlledInput></ControlledInput> */}
      {/* <ContMultipleInputs></ContMultipleInputs> */}
      {/* <UseRefBasic></UseRefBasic> */}
      {/* <UseReducerBasic></UseReducerBasic> */}
      {/* <ContextAPI /> */}
      {/* <ProductPT /> */}
      <ChatApp></ChatApp>
    </div>
  );
}
export default App;

/* const Modal =() => {
   const [btnPopup, setbtnPopup] = useState(0); 

  return(
    <div>
      <p>Hellooooo mY luves</p>
      <button onClick={() => setbtnPopup(1)}>Modal 1</button>
      <button onClick={() => setbtnPopup(2)}>Modal 2</button>
      <PopUp trigger={btnPopup}> The Pop-up</PopUp>
    </div>

  );
}

const PopUp = (props) =>{
  let Name = "Baby";
  if(props.trigger == 1){
    Name="Dave";
    console.log("It is true");
  } else if(props.trigger == 2){
    Name="John";
  } 
  return(
    <div>
      <p>{Name}</p>
    </div>
  );
} */
