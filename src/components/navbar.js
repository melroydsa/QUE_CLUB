import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import Logo from "../Queue_Logo.png"

function navBar(){
  
  return (
    <>
        <nav className = "navBar">
        
        <img src={Logo} alt="Icon" className="icon"/>
        <ul className="nav-menu">
            <Link to = '/' className='Selected'>
                <li>Home</li>
            </Link>
            <Link to = '/Membership' className='Selected'>
                <li>Membership</li>
            </Link>
            <Link to = '/Booking' className='Selected'>
                <li>Booking</li>
            </Link>
            <Link to = '/Events' className='Selected'>
                <li>Events</li>
            </Link>
            <Link to = '/Forum' className='Selected'>
                <li>Forum</li>
            </Link>
            <Link to = '/Resources' className='Selected'>
                <li>Resources</li>
            </Link>
            <li>Gallery</li>
            
        </ul>
        </nav>
    </>
  );
}

export default navBar;


