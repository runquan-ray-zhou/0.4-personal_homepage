import { useState } from "react"

export default function Nav() {

    const [groupDisplay, setGroupDisplay] = useState("none")
    const [portfolioDisplay, setPortfolioDisplay] = useState("none")

    function handleGroupDisplayChange() {
        if (groupDisplay === "none") {
            setGroupDisplay("flex")
        } else {
            setGroupDisplay("none")
        }
    }

    function handlePortfolioDisplayChange() {
        if (portfolioDisplay === "none") {
            setPortfolioDisplay("flex")
        } else {
            setPortfolioDisplay("none")
        }
    }

    return (

    <nav>
        <a href="https://www.pursuit.org"><img src="https://pursuit.codetrack.dev/pursuit_logo.png" className="logo" /></a>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">HIRE ME</a></li>
            <li>
                <span onClick={handleGroupDisplayChange}>GROUP PROJECTS</span>
                <div className="dropDown" style={{display:groupDisplay}}>
                <span><a href="https://mynotes-app-project.netlify.app/">NOTES APP</a></span>
                <span><a href="https://therealyoutube.netlify.app/">YOUTUBE CLONE</a></span>
                </div>
            </li>
            <li>
                <span onClick={handlePortfolioDisplayChange}>PORTFOLIO</span>
                <div className="dropDown" style={{display:portfolioDisplay}}>
                <span><a href="https://squadtrack.netlify.app/">SQUAD TRACK</a></span>
                <span><a href="https://runquan-ray-zhou.github.io/0.2-connectfour/">CONNECT 4</a></span>
                <span><a href="https://anaira.netlify.app/">SQUAD HOME PAGE</a></span>
                <span><a href="https://therealpokedex.netlify.app/">POKEDEX</a></span>
                <span><a href="https://cowsaywhat.netlify.app/">COW SAY</a></span>
                <span><a href="https://quiz-me-trivia-app.netlify.app/">QUIZ ME</a></span>
                <span><a href="https://pocket-dictionary-app.netlify.app/">DICTIONARY</a></span>
                </div>
            </li>
        </ul>
    </nav>

    )
}