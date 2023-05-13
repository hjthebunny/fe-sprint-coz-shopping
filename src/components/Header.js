import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">
                <div id="title">
                    <img id="logo" src="../logo.png" alt="logo" />
                    <h1 id="name">COZ Shopping</h1>
                </div>
            </Link>
            <img id="menu" src="../menu.png" alt="hamburger menu" />


        </header>
    )
}

export default Header;