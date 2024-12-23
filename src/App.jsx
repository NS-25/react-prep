import "./App.css";

function App() {
  let message = "Bye There";
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }
  return (
    <>
      <div>{message}</div>
    </>
  );
}

export default App;
