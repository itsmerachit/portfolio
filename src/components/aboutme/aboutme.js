import './aboutme.css';
import myimage from '../../asset/myimage.jpeg'
import { useRef } from 'react';

export default function AboutMe({darkMode}) {

    let aboutRef = useRef(null);
    function scrollAboutIntoView(){
        aboutRef.current.scrollIntoView({behaviour: 'smooth'});
    }
    return (
        <div className={"about-us " + (darkMode?"dark-about":"light-about")}>
            <div className={"flex items-center justify-center pill " + (darkMode?" pill-bg-dark text-white ":" pill-bg-white text-black ")}>
                <div className="pill-options pr-1" onClick={()=>{scrollAboutIntoView()}}> About Me</div>|
                <div className="pill-options px-1">Projects</div>|
                <div className="pill-options pl-1">Contact</div>
            </div>
            <div className={"about-content mb-10"} ref={aboutRef}>
                <div className="image-ctr">
                    <img className="my-img" src={myimage} alt="Yep.. that'd be me if it loaded!" title="Rachit Sharma" loading="lazy" />
                </div>
                <div className="content-ctr">
                    <span className={"text-3xl " + (darkMode?"text-white":"text-black")}>About Me</span>
                    <br />
                    <br />
                    <br />
                    <span className={"text-base " + (darkMode?"text-white":"text-black")}>I'm Rachit Sharma. I started my journey as a backend developer.</span>
                    <br />
                    <br />
                    <span className={"text-2xl " + (darkMode?"text-white":"text-black")}>Links</span>
                </div>
            </div>
        </div>
    )
}