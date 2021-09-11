import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Testmonials from "./components/Testmonials/Testmonials";
import Contact from "./components/Contact/Contact";
import "./App.scss";


function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testmonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
