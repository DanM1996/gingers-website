import React, { useState } from "react";
import NavItems from "./navItems";

function Nav(props) {
    // setup useState to take in information for navbar and dropdown items
    const [navItemList, setNavItemList] = useState([
        {name: 'About', dropdownItem1: 'About Me', dropdownItem2: 'About Tampa Bay', id: 1}, 
        {name:'Listings',  dropdownItem1: 'House 1', dropdownItem2: 'House 2', id: 2} , 
        {name: 'Contact',  dropdownItem1: 'Email', dropdownItem2: <a href="https://www.google.com" target="_blank">Google</a>, id: 3}
    ]);

    
    
    return (
        <header className="flex-row">
            <h1 class="name-tag">
                <img src={"../../assets/Logo1.png"} />
            </h1>
            <nav>
                {/* set the props to equal useState and pass into the subcomponent */}
                <NavItems items={navItemList} />
            </nav>
        </header>
    )

}

export default Nav;