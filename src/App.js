import { useState } from 'react';
import './App.css';
import Terminal from './components/terminal/terminal';
import Darky from './components/darky/darky';
import { RecruitmentStatus } from './components/terminal/terminal';
import AboutMe from './components/aboutme/aboutme';
import Technologies from './components/techs/techs';

function App () {
  let [darkMode, setDarkMode] = useState(false);
  return (
    <div className={"flex flex-col justify-center items-center pt-24 pb-12 " +(darkMode? "dark-main": "light-main")}>
      <Darky setDarkMode={setDarkMode} darkMode={darkMode}></Darky>
      <Terminal darkMode={darkMode} setDarkMode={setDarkMode}></Terminal>
      <RecruitmentStatus darkMode={darkMode}></RecruitmentStatus>
      <AboutMe darkMode={darkMode}></AboutMe>
      <Technologies darkMode={darkMode}></Technologies>
    </div>
  )
}

export default App;