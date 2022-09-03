import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Form from "./components/Form";
import SliderRevo from "./components/SliderRevo";
import Steps from "./components/Steps";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <SliderRevo />
      <About />
      <Steps />
      <Categories />
      <CallToAction />
      <Featured />
      <Banner />
      <Form />
    </>
  );
}

export default App;
