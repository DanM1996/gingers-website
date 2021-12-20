import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './index.css'
import AboutDropdown from '../AboutDropdown'
import ContactDropdown from '../ContactDropdown'

function Nav() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false)
    } else {
      setDropdown1(true)
    }
  }
  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false)
    } else {
      setDropdown1(false)
    }
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          Tampa Bay
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
              About <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <AboutDropdown />}
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave1}
          >
            <Link to='/contact-me' className='nav-links' onClick={closeMobileMenu}>
              Contact Us <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <ContactDropdown />}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;