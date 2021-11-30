import React from "react";

// receive the props here
function NavItems(props) {

    // destructure the props into a variable. items here fomes from the items in index.js, without it the code won't work
    const items = props.items
    return (
        <ul className=" flex-row nav-list">
            {/* map through the props so each navitem receives unique information */}
            {items.map((navItem) => (
                <div className="dropdown" key={navItem.id}>
                <li className="nav-list-item">{ navItem.name }</li>
                <div className="dropdown-item">
                    <p>{ navItem.dropdownItem1 }</p>
                    <p>{ navItem.dropdownItem2 }</p>
                </div>
            </div>
            )) }
        
        </ul>
    )
}

export default NavItems;