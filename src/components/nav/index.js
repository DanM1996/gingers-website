import React from "react";

function Nav() {
    return (
        <header className="flex-row">
            <h1 class="name-tag">
                Ginger Bennett
            </h1>
            <nav>
            <ul className=" flex-row nav-list">
                <li className="nav-list-item">About</li>
                <li className="nav-list-item">Listings</li>
            </ul>
            </nav>
        </header>
    )

}

export default Nav;