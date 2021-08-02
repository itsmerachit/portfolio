import { useState, useRef } from 'react';
import './App.css';
import Terminal from './components/terminal/terminal';
import Darky from './components/darky/darky';
import { RecruitmentStatus } from './components/terminal/terminal';
import AboutMe from './components/aboutme/aboutme';
import Technologies from './components/techs/techs';
import ContactMe from './components/contact/contact';

function App () {
  let [darkMode, setDarkMode] = useState(false);
  let contactRef = useRef(null);
  let aboutRef = useRef(null);
  const handleScrollView = (e, inputType) => {
    console.log("click", e, inputType);
    switch (inputType) {
      case "about":
        aboutRef.current.scrollIntoView();
        break;
      case "contact":
        contactRef.current.scrollIntoView();
        break;
      default:
        break;
    }
  }
  return (
    <div className={"flex flex-col justify-center items-center pt-24 " +(darkMode? "dark-main": "light-main")}>
      <Darky setDarkMode={setDarkMode} darkMode={darkMode}></Darky>
      <Terminal darkMode={darkMode} setDarkMode={setDarkMode}></Terminal>
      <RecruitmentStatus darkMode={darkMode}></RecruitmentStatus>
      <AboutMe darkMode={darkMode} handleScrollView={handleScrollView} ref={aboutRef} ></AboutMe>
      <Technologies darkMode={darkMode}></Technologies>
      <ContactMe darkMode={darkMode} handleScrollView={handleScrollView} ref={contactRef}></ContactMe>
    </div>
  )
}

export default App;