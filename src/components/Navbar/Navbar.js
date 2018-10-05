import React from "react";
import './Navbar.css';

const Navbar = props => {
    return (
        <div>
            <nav className="navbar sticky-top bg-color">
                <a className="navbar-brand" href="https://github.com/erandro/Clicky-Thingy">Go to Github page</a>
                <p className="spreadnav">Score: {props.rightClick}</p>
                <p className="spreadnav">Best: {props.bestClick}</p>
            </nav>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Clicking game (of thrones)</h1>
                    <p className="lead">The North Remembers... Let's see if you do. Click on each of the images below only once.</p>
                </div>
            </div>
        </div>
    )
};

export default Navbar;