import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import { useState } from 'react';
import Menu from "./components/Menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
