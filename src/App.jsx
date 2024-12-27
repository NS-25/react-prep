import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  // let message = "Bye There";
  // // const date = new Date();
  // // const time = date.toLocaleTimeString();
  // if (Math.random() > 0.5) {
  //   message = "Hello there!";
  // }
  return (
    <>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
      {/* <div>{message}</div> */}
      {/* <div>{time}</div> */}
      {/* <div>{new Date().toLocaleTimeString()}</div> */}
    </>
  );
}

export default App;
