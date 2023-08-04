import React, { useState, useEffect} from "react";
import Input from "./component/Input";
import "./style/index.scss";

function App() {
  const [text, setText] = useState("");
  const handleClick=(e)=>{
    setText(text.concat(e.target.name))
  }
 
  const Clear=()=>{
    setText("")
  }
  const handleDelete=()=>{
    setText(text.slice(0,-1))
  }
  const handleResult=()=>{
    setText(eval(text).toString())
  }
  
  
  return (
    <>
      <div className="calculator">
        <Input text={text} />
        <div className="operators">
          <button onClick={handleClick} name="1">1</button>
          <button  onClick={handleClick} name="2">2</button>
          <button  onClick={handleClick} name="3">3</button>
          <button  onClick={handleClick} name="/">/</button>
        </div>
        <div className="operators">
          <button  onClick={handleClick} name="4">4</button>
          <button  onClick={handleClick} name="5">5</button>
          <button  onClick={handleClick} name="6">6</button>
          <button  onClick={handleClick} name="*">*</button>
        </div>
        <div className="operators">
          <button  onClick={handleClick} name="7">7</button>
          <button  onClick={handleClick} name="8">8</button>
          <button  onClick={handleClick} name="9">9</button>
          <button  onClick={handleClick} name="+">+</button>
        </div>
        <div className="operators">
          <button  onClick={handleDelete} name="">x</button>
          <button  onClick={handleClick} name="0">0</button>
          <button  onClick={handleResult} name="=">=</button>
          <button  onClick={handleClick} name="-">-</button>
        </div>
        <button className="clear"  onClick={Clear} name="">CLEAR</button>
      </div>
    </>
  );
}
export default App;
