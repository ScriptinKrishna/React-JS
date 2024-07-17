import { useState } from "react";
import "./App.css";

function App() {
  let [c, setCounter] = useState(0);
  const addValue = () => {
    setCounter(c => c + 1);
    // setCounter(c => c + 1)
  };
  const remValue = () => {
    setCounter(c - 1);
  };
  if (c < 0) {
    setCounter(0)
    console.log('the value cannot be negative');
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter is {c}</h2>

      <button onClick={addValue}>add value</button>
      <button onClick={remValue}> delete value</button>
    </>
  );
}

export default App;
