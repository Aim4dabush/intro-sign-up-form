//components
import Form from "./Form/Form";
import Intro from "./Intro/Intro";

//styles
import "./App.scss";

function App() {
  return (
    <div className="main-container">
      <img
        alt="mobile"
        className="mobile-bg"
        src={process.env.PUBLIC_URL + "/images/bg-intro-mobile.png"}
      />
      {/* <img className="desktop-bg" src={process.env.PUBLIC_URL + '/images/bg-intro-desktop.png'} alt="desktop" /> */}
      <Intro />
      <Form />
    </div>
  );
}

export default App;
