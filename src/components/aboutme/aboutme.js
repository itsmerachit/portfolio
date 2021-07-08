import './aboutme.css';

export default function AboutMe({darkMode}) {
    return (
        <div className={"flex flex-col items-center mt-20 w-screen h-96 " + (darkMode?"dark-about":"light-about")}>
            <div className={"flex items-center justify-center pill " + (darkMode?" pill-bg-dark text-white ":" pill-bg-white text-black ")}>
                <div className="pill-options pr-1"> About Me</div>|
                <div className="pill-options px-1">Projects</div>|
                <div className="pill-options pl-1">Contact</div>
            </div>
        </div>
    )
}