import './aboutme.css';
import myimage from '../../asset/myimage.jpeg'
import { forwardRef } from 'react';

function AboutMeFunc({darkMode, handleScrollView}, ref) {
    return (
        <div className={"about-us " + (darkMode?"dark-about":"light-about")}>
            <div className={"flex items-center justify-center pill cursor-pointer " + (darkMode?" pill-bg-dark text-white ":" pill-bg-white text-black ")}>
                <div className="pill-options pr-1" onClick={(e)=>{handleScrollView(e, "about")}}> About Me</div>|
                {/* <div className="pill-options px-1">Projects</div>| */}
                <div className="pill-options pl-1" onClick={(e)=>{handleScrollView(e, "contact")}}>Contact</div>
            </div>
            <div className={"about-content mb-10"} ref={ref}>
                <div className="image-ctr">
                    <img className="my-img" src={myimage} alt="Yep.. that'd be me if it loaded!" title="Rachit Sharma" loading="lazy" />
                </div>
                <div className="content-ctr max-w-lg">
                    <span className={"text-3xl " + (darkMode?"text-light":"text-black")}>About Me</span>
                    <br />
                    <br />
                    <span className={"text-base break-words " + (darkMode?"text-white":"text-black")}>
                        I'm Rachit Sharma. I am a full-stack developer.
                        I've been building websites for two years now!
                        <br />
                        <br />
                        I believe our focus should be delivering a quality customer experience. Technology part comes later!
                        <br />
                        <br />
                        I started my journey as backend developer as I literally hated CSS.
                        But on the way I understood that I cannot ignore it so I became pretty good at it.
                        <br />
                        My go-to language is JavaScript, work-around language is Python. I've brought some UI designs to life via Angular and React.
                        <br />
                        <br />
                        <span className={"text-lg font-medium " + (darkMode?"text-light":"text-black")}>
                            Some things that I'm good at:
                        </span>
                            <ul className="list-disc ml-4">
                                <li>Converting boring codes to beautiful websites.</li>
                                <li>Handling databases like Mongo, Postgres via terminal.</li>
                                <li>Delivering solution to complex problems in web development.</li>
                                <li>Creating documentations for api in YAMLs.</li>
                                <li>Handling the complexities of deployment.</li>
                                <li>Automating instance launching via Terraform.</li>
                                <li>Creating pipelines for CI/CD.</li>
                            </ul>
                        <br />
                        <span className={"text-2xl " + (darkMode?"text-light":"text-black")}>Links</span>
                        <ul>
                            <li><a href="https://www.github.com/itsmerachit" rel="noreferrer" target="_blank">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/rachit-sharma-356a24150/" rel="noreferrer" target="_blank">LinkedIn</a></li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}

const AboutMe = forwardRef(AboutMeFunc);
export default AboutMe;