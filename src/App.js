import Header from "./components/Home/Header/Header.jsx";
import Body from "./components/Home/Container/Body.jsx";
import About from "./components/About/About.jsx";
import Education from "./components/Education/Education.js";
import Skills from "./components/Skills/Skills.js";

import './App.css';
function App() {
  return (
    <div className="App">
        <Header/>
        <Body/>
        <About/>
        <Education/>
        <Skills/>
    </div>
  );
}

export default App;
