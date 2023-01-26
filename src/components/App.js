import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
const[on,setOn]=useState("ON");
const[off,setOff]=useState("OFF");
const handleClick = ()=>{
  if(on === "ON"){
    setOn("OFF");
    setOff("ON");
  }else{
    setOn("ON");
    setOff("OFF");
  }
}
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {off}
      </button>
      <br />
      <br />
      <button id="btn2"  onClick={handleClick}>
        {on}
      </button>
    </div>
  );
}


export default App;