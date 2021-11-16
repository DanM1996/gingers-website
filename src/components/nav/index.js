import React from "react";

function Nav() {
    return (
        <header className="flex-row">
            <h1 class="name-tag">
                Ginger Bennett
            </h1>
            <nav>
                <ul className=" flex-row nav-list">
                    <div className="dropdown">
                        <li className="nav-list-item">About</li>
                        <div className="dropdown-item">
                            <p>This Works</p>
                            <a href="https://www.google.com" target="_blank" >Google</a>
                        </div>
                    </div>
                    <li className="nav-list-item">Listings</li>
                </ul>
            </nav>
        </header>
    )

}

export default Nav;