import { useState } from "react"

export default function Nav() {

    const [display, setDisplay] = useState("none")

    function handleDisplayChange() {
        if (display === "none") {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }
    }

    return (

    <nav>
        <a href="https://www.pursuit.org"><img src="./src/assets/9265902-logo.png" className="logo" /></a>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">SERVICES</a></li>
            <li><a href="">HIRE ME</a></li>
            <li>
                <span onClick={handleDisplayChange}>PORTFOLIO</span>
                <div className="dropDown" style={{display:display}}>
                <span><a href="https://squadtrack.netlify.app/">SQUAD TRACK</a></span>
                <span><a href="https://runquan-ray-zhou.github.io/0.2-connectfour/">CONNECT 4</a></span>
                <span><a href="https://anaira.netlify.app/">ANAIRA HOME PAGE</a></span>
                <span><a href="https://therealpokedex.netlify.app/">ALEXANDER'S POKEDEX</a></span>
                </div>
            </li>
        </ul>
        <img src="./src/assets/moon.png" id="icon" />
    </nav>

    )
}