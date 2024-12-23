import "./App.css";

function App() {
  let message = "Bye There";
  // const date = new Date();
  // const time = date.toLocaleTimeString();
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }
  return (
    <>
      {/* <div>{message}</div> */}
      {/* <div>{time}</div> */}
      <div>{new Date().toLocaleTimeString()}</div>
    </>
  );
}

export default App;
