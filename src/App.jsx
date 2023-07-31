import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const counterRef = useRef(0);

  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  console.log("component rerendered");

  const handleOnClick = () => {
    counterRef.current++;
    console.log(counterRef.current);
    if (counterRef.current === 5) {
      console.log("you clicked five times");
      counterRef.current = 0;
    }
  };

  const incrementHandler = () => {
    setCounter((previousValue) => previousValue + 1);
  };

  return (
    <>
      <button onClick={handleOnClick}>Click me</button>
      <button onClick={incrementHandler}>
        Increment value. Current is: {counter}
      </button>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click button five times"
      ></input>
    </>
  );
};

export default App;

//!
/* 
Panaudojant useRef sukurti į inpu'tą ivestų simbolių loginimą: 
onChange į ref turi saugoti kiek yra simbolių, o 
onBlur, consolej turi išloginti kiek simbolių buvo įvesta; 
Tip. Panaudoti input onBlur ir onChange eventus.
*/
