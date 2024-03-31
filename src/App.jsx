import "./App.css";

function H1() {
  return <h1>Vite + React 2</h1>;
}

function App() {
  const text = 1 + 100;
  const googleAddress = "https://google.com";

  return (
    <>
      {[1, 2, 3]
        .map((num) => `スパイダーマン${num}`)
        .map((num) => (
          <div>
            <a href={`https://www.google.com/search?q=${num}`}>{num}</a>
          </div>
        ))}
      <p>{text}</p>
      <a href={googleAddress}>{text}</a>
    </>
  );
}

export default App;
