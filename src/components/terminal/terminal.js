import { useEffect, useState, useRef } from "react";
import "./terminal.css";
export default function Terminal({ darkMode, setDarkMode }) {
  
  //List of terminal commands
  let availableCommands = [
    {name: "about", description: "Tells about Rachit!"},
    {name: "clear", description: "Clears the terminal"},
    {name: "commands", description: "Lists all the available commands"},
    {name: "contact", description: "Displays contact details"},
    {name: "darkmode", description: "Toggles dark mode. Available options: true | false"},
    {name: "echo", description: "Outputs the strings passed as arguments"},
    {name: "git", description: "Displays Rachit's github url"},
    {name: "hello", description: "Greet the creator"},
    {name: "help", description: "Helps with usage of command provided as argument"}
  ];

  //About content
  const content = [(
    <div>
      <span className="text-2xl">Hello, I'm Rachit</span>
      <br />
      <br />
      <p>My skillset includes :</p>
      <ul>
        <li className="text-red">→ NodeJs</li>
        <li className="text-orange">→ React</li>
        <li className="text-yellow">→ Angular</li>
        <li className="text-green">→ Django</li>
        <li className="text-blue">→ Docker</li>
        <li className="text-indigo">→ Chess ♔ </li>
        <li className="text-voilet">→ ...more </li>
      </ul>
      <br />
      <p>Type commands to know more</p>
      <p>Type help {'<command-name>'} to know more about command's usage.</p>
    </div>
  )];
  
  //Input box in terminal
  let inputRef = useRef(null);
  let upClicks = 0;
  
  //State variables
    //Terminal History
    let [history, setHistory] = useState([]);
    //Terminal Logs
    let [logs, setLogs] = useState([]);
    //Input value
    let [inputCommand, setInputCommand] = useState('');
   
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
    inputRef.current.focus();
  };

  /**
   * Handles Terminal Input
   * @param {Object} e Event
   */
  //Handles command execution
  function handleTerminalInput (e) {
    if (e.key === "Enter") {
      upClicks = 0;
      let input = inputCommand;
      handleCommandExecution(input.split(" ")[0], input.split(" ").splice(1));
      addToHistory(input);
      setInputCommand('');
      inputRef.current.focus();
      return;
    }
    if (e.key === 'ArrowUp') {
      upClicks += 1;
      console.log("history: ", history);
      let pos = history.length -upClicks;
      console.log(pos, upClicks, history[pos]);
      if(pos > 0 && pos < 10)
        inputRef.current.value = history[pos];
      return
    }
  };

  function addToHistory(command) {
    if(history.length >= 10) {
      let historyList = history.slice(1);
      console.log("Length: ", historyList);
      historyList.push(command);
      return setHistory(historyList);
    }
    return setHistory((history)=>[...history, command]);
  }
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

  /**
   * Handles command execution
   * @param {String} command command provided to the terminal
   * @param  {...any} args command options / arguments
   */
  function handleCommandExecution (command, ...args) {
    switch(command) {
      case "about":
        handleCommandOutput(command, content);
        break;
      case "clear":
        handleCommandOutput(command, "");
        break;
      case "commands":
        handleCommandOutput(command, availableCommands.map(command=>command.name));
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
        handleCommandOutput(command, "git: https://github.com/itsmerachit");
        break;
      case "hello": 
        handleCommandOutput(command, "hello there! nice to meet you!");
        break;
      case "help":
        if(!args[0].length) {
          handleCommandOutput(command, `${command} requires 1 argument but 0 were provided`);
          return;
        }
        let requiredCommand = args[0][0];
        let requiredHelp = availableCommands.filter(command=>{return command.name === requiredCommand});
        handleCommandOutput(command, requiredHelp[0].description);
        break;
      default:
        setLogs((logs)=>[...logs, `guest@macbook > ${command}`, `zsh: command not found: ${command}`])
    }
  }

  return (
    <div className="terminal rounded-lg" onClick={handleTerminalClick}>
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-buttons inline-flex">
          <div className="circle bg-red-500 top-1 left-1">
            <div className="circle-sm bg-red-800"></div>
          </div>
          <div className="circle bg-yellow-400"></div>
          <div className="circle btn-green"></div>
        </div>
      </div>
      {/* Terminal Body */}
      <div className={"terminal-body " +(darkMode ? " text-white terminal-body-dark " : " terminal-body-light ")}>
        <div className={"p-2 commands"}>
          {logs.length ?
            (logs.map((log, index) => (<span key={index}>{log}<br /></span>) ) )
          :
            ''
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
              value={inputCommand}
              onChange={(e)=>setInputCommand(e.target.value)}
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