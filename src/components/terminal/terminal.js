import { useEffect, useState, useRef } from "react";
import "./terminal.css";
export default function Terminal({ darkMode }) {
  let availableCommands = [
    "about",
    "clear",
    "commands",
    "contact",
    "echo",
    "git",
    "hello",
    "info",
  ];
  
  let inputRef = useRef(null);

  let [logs, setLogs] = useState(['hello']);
  useEffect(()=>{
    // let content = [(
    //   <>
    //     <h2>Hello, I'm Rachit</h2>
  
    //     <br />
    //     <p>You may also know me for :</p>
    //     <ul>
    //       <li className="text-red">✅ NodeJs Nerd</li>
    //       <li className="text-orange">✅ Angular Artist</li>
    //       <li className="text-yellow">✅ React Rodeo</li>
    //       <li className="text-green">✅ Django Dawg</li>
    //       <li className="text-blue">✅ Docker Demon</li>
    //       <li className="text-indigo">✅ Chess Player ♔ </li>
    //     </ul>
    //     <br />
    //     <br />
    //   </>
    // )];
    let content = ['world']
    setLogs((logs)=>{return [...logs, ...content]})
  }, []);
  useEffect(() => {
    inputRef.current.focus();
  }, [logs]);

  let handleTerminalClick = () => {
    inputRef.current.focus();
  };

  let handleTerminalInput = (e) => {
    if (e.key === "Enter") {
      let input = inputRef.current.value;
      handleCommandInput(input.split(" ")[0], input.split(" ").splice(1));
      inputRef.current.value = "";
      inputRef.current.focus();
      return;
    } else if (e.key === 'ArrowUp') {

    }
  };

  let handleCommandOutput = (command, output) => {
    if(command !== 'clear') {
      setLogs((logs)=>[...logs, `guest@macbook > ${command}`, output]);
      return;
    }
    setLogs(output);
  }

  let handleCommandInput = (command, ...args) => {
    console.log(args);
    switch(command) {
      case "hello": 
        handleCommandOutput(command, "hello there! nice to meet you!");
        break;
      case "clear":
        handleCommandOutput(command, "");
        break;
      case "echo":
        handleCommandOutput(command, args);
        break;
      default:
        setLogs((logs)=>[...logs, `guest@macbook > ${command}`, `zsh: command not found: ${command}`])
    }
  }

  return (
    <div className="terminal" onClick={handleTerminalClick}>
      <div className="terminal-header">
        <div className="terminal-buttons inline-flex">
          <div className="circle bg-red-500 top-1 left-1">
            <div className="circle-sm bg-red-800"></div>
          </div>
          <div className="circle bg-yellow-400"></div>
          <div className="circle bg-green"></div>
        </div>
      </div>
      <div className={"terminal-body h-96 overflow-hidden " +(darkMode ? " text-white terminal-body-dark " : " terminal-body ")}>
        <div className={"p-2"}>
          {logs.length?
          (logs.map((log, index) => {
            return <span key={index}>{log}<br /></span>;
            })
          )
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
      <div className={"terminal-footer w-full h-6 rounded-b-lg " +(darkMode ? " text-white terminal-body-dark " : " terminal-body ")}></div>
    </div>
  );
}
