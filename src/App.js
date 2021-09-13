import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Testmonials from "./components/Testmonials/Testmonials";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import { useState } from 'react';
import Menu from "./components/Menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
