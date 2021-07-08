import { useEffect, useState, useRef } from "react";
import "./terminal.css";
export default function Terminal({ darkMode, setDarkMode }) {
  
  //List of terminal commands
  let availableCommands = [
    "about",
    "clear",
    "commands",
    "contact",
    "darkmode",
    "echo",
    "git",
    "hello"
  ];
  //About content
  let content = [(
    <div>
      <span className="text-2xl">Hello, I'm Rachit</span>
      <br />
      <br />
      <p>My skillset includes :</p>
      <ul>
        <li className="text-red">→ NodeJs</li>
        <li className="text-orange">→ Angular</li>
        <li className="text-yellow">→ React</li>
        <li className="text-green">→ Django</li>
        <li className="text-blue">→ Docker</li>
        <li className="text-indigo">→ Chess ♔ </li>
        <li className="text-voilet">→ ...more </li>
      </ul>
      <br />
      <p>Type commands to know more</p>
    </div>
  )];
  
  //Input box in terminal
  let inputRef = useRef(null);
  let terminalRef = useRef(null);
  let upClicks = 0;
  
  //State variables
    //Terminal History
    let [history, setHistory] = useState([]);
    //Terminal Logs
    let [logs, setLogs] = useState([]);
   
  //To focus on the input whenever the terminal logs change.
  useEffect(() => {
    inputRef.current.focus();
  }, [logs]);
   
  //To initialise terminal with about me command.
  useEffect(() => {
    setLogs(content);
    return ()=>{setLogs("")}
  },[]);

  //Focuses on input box when clicked on terminal
  function handleTerminalClick () {
    console.log('clicked');
    inputRef.current.focus();
  };

  //Handles command execution
  function handleTerminalInput (e) {
    if (e.key === "Enter") {
      upClicks = 0;
      let input = inputRef.current.value;
      handleCommandInput(input.split(" ")[0], input.split(" ").splice(1));
      inputRef.current.value = "";
      inputRef.current.focus();
      return;
    } else if (e.key === 'ArrowUp') {
      if(!history.length || history.length < upClicks) {
        return;
      }
      upClicks += 1;
      inputRef.current.value = history[history.length -upClicks];
    }
  };

  /**
   * Handles command output on the terminal
   * @param {String} command Command Name
   * @param {String | Array} output Output rendered to the terminal
   */
  function handleCommandOutput (command, output) {
    if(command === 'clear') {
      setLogs(output);
      return;
    }
    if (output instanceof Array) {
      setLogs((logs)=>[...logs, `guest@macbook > ${command}`, ...output]);
      return;
    }
    setLogs((logs)=>[...logs, `guest@macbook > ${command}`, output]);
    return;
  }

  function handleCommandInput (command, ...args) {
    setHistory((history)=>{
      if ( history.length <10)
        return [...history, command]
      return [...history.splice(1), command]
    });
    switch(command) {
      case "about":
        handleCommandOutput(command, content);
        break;
      case "clear":
        handleCommandOutput(command, "");
        break;
      case "commands":
        handleCommandOutput(command, availableCommands);
        break;
      case "contact":
        handleCommandOutput(command, "email: sharma.rachit2107@gmail.com");
        break;
      case "darkmode":
        if(!args[0].length) {
          handleCommandOutput(command, `${command} requires 1 argument but 0 were provided`);
        }
        if(args[0][0] == 'true'){
          setDarkMode(true);
          handleCommandOutput(command, "dark mode enabled.");
        } else if (args[0][0] == 'false') {
          setDarkMode(false);
          handleCommandOutput(command, "dark mode disabled.");
        } else {
          handleCommandOutput(command, "invalid options.");
        }
        break;
      case "echo":
          handleCommandOutput(command, args[0].join(" "));
          break;
      case "git": 
        handleCommandOutput(command, "git: https://github.com/itsmerachit/");
        break;
      case "hello": 
        handleCommandOutput(command, "hello there! nice to meet you!");
        break;
      default:
        setLogs((logs)=>[...logs, `guest@macbook > ${command}`, `zsh: command not found: ${command}`])
    }
  }

  return (
    <div className="terminal" onClick={handleTerminalClick} ref={terminalRef}>
      <div className="terminal-header">
        <div className="terminal-buttons inline-flex">
          <div className="circle bg-red-500 top-1 left-1">
            <div className="circle-sm bg-red-800"></div>
          </div>
          <div className="circle bg-yellow-400"></div>
          <div className="circle bg-green"></div>
        </div>
      </div>
      <div className={"terminal-body rounded-b-lg h-96 overflow-y-scroll " +(darkMode ? " text-white terminal-body-dark " : " terminal-body ")}>
        <div className={"p-2 commands"}>
          {logs.length ?
          (logs.map((log, index) => {
              return <span key={index}>{log}<br /></span>;
          }))
          :''
          }
          <span>
            guest@macbook{">"}
            <input
              ref={inputRef}
              // value={inputValue}
              // onChange={}
              className={
                "command-input appearance-none bg-transparent border-none w-8/12 focus:outline-none pl-1 " +
                (darkMode ? "caret-indigo-100" : "caret-indigo-800")
              }
              onKeyUp={(event) => {
                handleTerminalInput(event);
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export function RecruitmentStatus({darkMode}) {
  return (
    <div className={"mt-10"}>
      <span className={"text-lg " + (darkMode? "text-white":"text-blue-900")}>
        Recruitment Status
      </span>
      <span className={"flex " + (darkMode? "text-white":"text-blue-900")}>
        <div className="bulb bg-green mt-1 pt-2"></div>
        <span className="text-3xl ml-2">
          Open to offers
        </span>
      </span>

    </div>
  )
}