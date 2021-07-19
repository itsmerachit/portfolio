import './techs.css';
export default function Technologies({darkMode}) {
    let languageList = ["JavaScript", "TypeScript", "Python", "CSS", "YAML", "C"];
    let frameworksList = ["React", "Angular", "Django", "ExpressJs", "SocketIO"];
    let toolsList = ["OpenAPI", "Docker", "Firebase", "Git", "AWS", "Netlify", "Heroku"];
    let dbList = ["MongoDb", "Firestore", "Postgres"];
    return (<>
        <div className={"text-3xl pt-8 "+ (darkMode?"text-light-techs":"text-black")}>Technologies I know:</div>
        <div className={"card-container"}>
            <div className={"card"}>
                <span className={"card-header " + (darkMode?"text-h-light-techs":"text-h-dark-techs")}>Languages</span>
                <ul className={"list-disc ml-4 "+ (darkMode?" text-white":" text-black") }>
                    {languageList.map((lang, index)=> (<li key={index}>{lang}</li>))}
                </ul>

            </div>
            <div className="card">
                <span className={"card-header " + (darkMode?"text-h-light-techs":"text-h-dark-techs")}>Frameworks</span>
                <ul className={"list-disc ml-4" + (darkMode?" text-white":" text-black")}>
                    {frameworksList.map((lang, index)=> (<li key={index}>{lang}</li>))}
                </ul>
            </div>
            <div className="card">
                <span className={"card-header " + (darkMode?"text-h-light-techs":"text-h-dark-techs")}>Database</span>
                <ul className={"list-disc ml-4" + (darkMode?" text-white":" text-black")}>
                    {dbList.map((lang, index)=> (<li key={index}>{lang}</li>))}
                </ul>
            </div>
            <div className="card">
                <span className={"card-header " + (darkMode?"text-h-light-techs":"text-h-dark-techs")}>Tools</span>
                <ul className={"list-disc ml-4" + (darkMode?" text-white":" text-black")}>
                    {toolsList.map((lang, index)=> (<li key={index}>{lang}</li>))}
                </ul>
            </div>
        </div>
    </>)
}