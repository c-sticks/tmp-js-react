/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./App.css";

function App() {
  let [count, setState] = useState(0);
  const googleAddress = "https://google.com";

  function onClick() {
    setState(count + 1);
  }

  return (
    <>
      <div>
        <a href={`${googleAddress}/search?q=スタイダーマン${count}`}>{count}</a>
      </div>

      <p>{count}</p>
      <a href={googleAddress}>{count}</a>
      <button onClick={onClick}>ADD</button>
    </>
  );
}

export default App;
