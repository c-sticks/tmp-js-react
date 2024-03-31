/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./App.css";

function App() {
  let [names, setNames] = useState([]);
  const googleAddress = "https://google.com";

  function onClick() {
    setNames([...names, "john" + new Date().toISOString()]);
  }

  return (
    <>
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
    </>
  );
}

export default App;
