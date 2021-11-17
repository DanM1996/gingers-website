import React, { useState } from "react";
import NavItems from "./navItems";

function Nav() {
    // setup useState to take in information for navbar and dropdown items
    const [navItemList, setNavItemList] = useState([
        {name: 'About', dropdownItem1: 'Test', dropdownItem2: 'Google'}, 
        {name:'Listings',  dropdownItem1: 'House 1', dropdownItem2: 'House 2'} , 
        {name: 'Contact',  dropdownItem1: 'Email', dropdownItem2: 'Phone'}
    ]);
    
    return (
        <header className="flex-row">
            <h1 class="name-tag">
                Ginger Bennett
            </h1>
            <nav>
                {/* set the props to equal useState and pass into the subcomponent */}
                <NavItems items={navItemList} />
            </nav>
        </header>
    )

}

export default Nav;