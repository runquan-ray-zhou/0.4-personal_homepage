import { useState } from "react";

import bw from '../assets/bw-portrait.jpg'
import color from '../assets/color-portrait.jpg'

export default function Info() {

    const [isFlipped, setIsFlipped] = useState(false);

    function handleFlip() {
      setIsFlipped(!isFlipped);
    }

    return(
    <>
        <div className="info">
            <p className="hi">👋</p>
            <br />
            <h1 className="info__fullname">I'm Runquan <br/> <span>(Ray)</span> Zhou</h1>
            <h1 className="info__shortname">I'm <span>Ray</span></h1>
            <p>Full Stack Software Engineer</p>
            <br />
            <p>Driven by Challenges, Fueled by Creativity</p>
            <div>
                <a href="https://drive.google.com/file/d/1PU9O1aSlj2VsTaWBED22dhGutsqY4YopTi5Uoedt4-s/view" target="_blank" rel="noopener noreferrer">View CV</a>
                <a href="https://docs.google.com/document/d/1PU9O1aSlj2VsTaWBED22dhGutsqY4YopTi5Uoedt4-s/export?format=pdf" download>Download CV</a>
            </div>
        </div>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/runquanrayzhou/"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/runquan-ray-zhou"><i className="fab fa-github"></i></a>
            <a href="https://therealyoutube.netlify.app/"><i className="fab fa-youtube"></i></a>
        </div>
    </>

    )

}