/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./App.css";

function App() {
  let [names, setNames] = useState([]);
  const googleAddress = "https://google.com";

  let [text, setText] = useState("");

  function onClick() {
    setNames([...names, "john" + new Date().toISOString()]);
  }

  return (
    <>
      {text}
      {names.map((name, index) =>
        index % 2 === 0 ? (
          <div>
            <a href={`${googleAddress}/search?q=スタイダーマン${name}`}>
              {name}
            </a>
          </div>
        ) : (
          <div>
            <a
              style={{ color: "red" }}
              href={`${googleAddress}/search?q=スタイダーマン${name}`}
            >
              {name}
            </a>
          </div>
        )
      )}
      <button onClick={onClick}>ADD</button>
      <input
        onChange={(e) => {
          console.log("change " + e.target.value);
          setText(e.target.value);
        }}
      ></input>
    </>
  );
}

export default App;
