import { useRef, useState } from "react";
import Header from "./components/Header";

function App() {
  const [header, setHeader] = useState(1);
  const name = useRef();

  const buttonHandaler = () => {
    setHeader(header + 1);
  };

  const submitHandaler = () => {
    console.log(name.current.value);
  };

  const changeHandaler = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <h1>{header}</h1>
      <button onClick={buttonHandaler}>Press</button>
      <input ref={name}></input>
      <input onChange={changeHandaler}></input>
      <button onClick={submitHandaler}>Submit</button>
      <Header number={header} />
    </>
  );
}

export default App;
