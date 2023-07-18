import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import Logo from "../Queue_Logo.png"

function NavBar(){
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
        <nav className = "navBar">
        
        <img src={Logo} alt="Icon" className="icon"/>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Membership' className='nav-links' onClick={closeMobileMenu}>
                Membership
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Booking' className='nav-links' onClick={closeMobileMenu}>
                Booking
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Events' className='nav-links' onClick={closeMobileMenu}>
                Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Forum' className='nav-links' onClick={closeMobileMenu}>
                Forum
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Resources' className='nav-links' onClick={closeMobileMenu}>
                Resources
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Gallery' className='nav-links' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            
        </ul>
        </nav>
    </>
  );
}

export default NavBar;
