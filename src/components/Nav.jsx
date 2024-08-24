import { useState, useEffect } from "react"
import logo from "../assets/Screenshot 2024-08-23 at 12.46.54 AM.png"

export default function Nav() {

    const [groupDisplay, setGroupDisplay] = useState("none")
    const [portfolioDisplay, setPortfolioDisplay] = useState("none")

    function handleGroupDisplayChange() {
        if (groupDisplay === "none") {
            setGroupDisplay("flex")
            setPortfolioDisplay("none")
        } else {
            setGroupDisplay("none")
        }
    }

    function handlePortfolioDisplayChange() {
        if (portfolioDisplay === "none") {
            setPortfolioDisplay("flex")
            setGroupDisplay("none")
        } else {
            setPortfolioDisplay("none")
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.group-container') && !event.target.closest('a')) {
                setGroupDisplay("none");
                setPortfolioDisplay("none");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (

    <nav>
        <a href="https://runquanrayzhou.netlify.app/"><img src={logo} className="logo" /></a>
        <ul>
            <li>
                <span onClick={handleGroupDisplayChange}>GROUP PROJECTS</span>
                    <div className="dropDown" style={{display:groupDisplay}}>
                        <span><a href="https://mynotes-app-project.netlify.app/" target="_blank" rel="noopener noreferrer">0.7 - NOTES APP</a></span>
                        <span><a href="https://therealyoutube.netlify.app/" target="_blank" rel="noopener noreferrer">0.9 - YOUTUBE CLONE</a></span>
                        <span><a href="https://streetbites.netlify.app/" target="_blank" rel="noopener noreferrer">1.6 - STREETBITES APP</a></span>
                    </div>
                    
            </li>
            <li>
                <span onClick={handlePortfolioDisplayChange}>PORTFOLIO</span>
                        <div className="dropDown" style={{display:portfolioDisplay}}>
                            <span><a href="https://squadtrack.netlify.app/" target="_blank" rel="noopener noreferrer">0.1 - SQUAD TRACK</a></span>
                            <span><a href="https://runquan-ray-zhou.github.io/0.2-connectfour/" target="_blank" rel="noopener noreferrer">0.2 - CONNECT 4</a></span>
                            <span><a href="https://anaira.netlify.app/" target="_blank" rel="noopener noreferrer">0.3 - SQUAD HOME PAGE</a></span>
                            <span><a href="https://therealpokedex.netlify.app/" target="_blank" rel="noopener noreferrer">0.4 - POKEDEX</a></span>
                            <span><a href="https://cowsaywhat.netlify.app/" target="_blank" rel="noopener noreferrer">0.6 - COW SAY</a></span>
                            <span><a href="https://quiz-me-trivia-app.netlify.app/" target="_blank" rel="noopener noreferrer">0.8 - QUIZ ME</a></span>
                            <span><a href="https://pocket-dictionary-app.netlify.app/" target="_blank" rel="noopener noreferrer">1.0 - DICTIONARY</a></span>
                            <span><a href="https://bankbankster.netlify.app/" target="_blank" rel="noopener noreferrer">1.1 - BANK BANKSTER</a></span>
                            <span><a href="https://linknyc-finder.netlify.app/" target="_blank" rel="noopener noreferrer">2.9 - LinkNYC FINDER</a></span>
                        </div>
            </li>
            <li><a href="">ABOUT ME</a></li>
        </ul>
    </nav>

    )
}