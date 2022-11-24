import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import './navbar.css';
import Connect from './connectbutton';
export default function Navbar() {
    return (
        <>
        <div>
    <nav id="menu">
      <input type="checkbox" id="responsive-menu" /><label></label>
      {/* <span className="sl-container"
        ><img style="" className="sl-logo" src="@/assets/sl-logo.png" alt="" /><img
          style=""
          className="sl-text"
          src="@/assets/sl-text.png"
      /></span> */}
      <ul>
      <Connect />
      <li>
        <a>Faq</a>
        </li>
        <li>
        <a>Team</a>
        </li>
        <li>
        <a>Mint</a>
        </li>
        <li>
       
        <a>About Us</a>
        </li>
        <li>
           <a>Home</a>
           
        </li>
        
      </ul>
    </nav>
    </div>
        </>
    )
}