import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import './navbar.css';
import Connect from './connectbutton';
import Onramper from '../onramper/onramper';
export default function Navbar() {
  const about=()=>{
    let ele=document.getElementById("about")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView({block: "center", inline: "center"})
        }
  }
  const faq=()=>{
    let ele=document.getElementById("faq")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView({block: "center", inline: "center"})
        }
  }
  const team=()=>{
    let ele=document.getElementById("team")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView({block: "center", inline: "center"})
        }
  }
  const home=()=>{
    let ele=document.getElementById("home")
        if (ele!=null) {
            console.log(ele)
            ele.scrollIntoView({block: "center", inline: "center"})
        }
  }
    return (
        <>
        <div>
    <nav id="menu">
      <input type="checkbox" id="responsive-menu" /><label></label>
       <span className="sl-container"
        ><img  className="sl-logo" src={require('./logo.png')} alt="" /></span> 
      <ul>
      <Connect />
        <Onramper />
        <li>
          <a href='http://enteraltspace.com/' target="_blank">Company</a>
        </li>
      <li>
        <a onClick={faq}>Faq</a>
        </li>
        <li>
        <a onClick={team}>Team</a>
        </li>
        <li>
        <a>Mint</a>
        </li>
        <li>
       
        <a onClick={about}>About Us</a>
        </li>
        <li>
           <a onClick={home}>Home</a>
        </li>
        
      </ul>
    </nav>
    </div>
        </>
    )
}