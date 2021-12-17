import React, {useState} from 'react';
import { ContactItems } from '../ContactItems';
import { Link } from 'react-router-dom';
import './index.css'

function ContactDropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {ContactItems.map((item, index) => {
            return(
                <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
        </ul>
        </>
    )
}

export default ContactDropdown;