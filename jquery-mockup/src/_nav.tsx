import * as React from "react";

const CurrentSection = "play";

function isActive(str: string){
    return str == CurrentSection ? "active" : "";
}

export const Nav = () =>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Memes Inc.</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className={"nav-item nav-link" + isActive("home")} id="home-link" href="./index.html">Home <span className="sr-only">(current)</span></a>
            <a className={"nav-item nav-link" + isActive("signup")} id="signup-link" href="signup.html">Sign Up</a>
            <a className={"nav-item nav-link" + isActive("rules")} id="rules-link" href="rules.html">Rules</a>
            <a className= {"nav-item nav-link" + isActive("play")} href="/play">Play</a>
         </div>
    </div>
</nav>