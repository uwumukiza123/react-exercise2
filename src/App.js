import "./App.css";

function App() {
  const clickButton = () => {
    alert("Clicked!");
  };

  return (
    <div className="btn">
      <button onClick={clickButton}>Click Me</button>
    </div>
  );
}

export default App;
