import ProfileCard from "./ProfileCard";
import "./App.css";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

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
      <ProfileCard title="Alexa" handle="@alexa99"  image={AlexaImage}/>
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}/>
      <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
      {/* <div>{message}</div> */}
      {/* <div>{time}</div> */}
      {/* <div>{new Date().toLocaleTimeString()}</div> */}
    </>
  );
}

export default App;
