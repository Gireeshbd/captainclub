import React from "react";
import './team.css'
function Team(){
    return(<div className="team" id="team">
    <h1 className="team-heading">Meet our Team</h1>
    <span className="team-span">
    <img src={require("./image1.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
        Seshu Karthick
        </ h3 >
        <h5 className="team-text">Founder</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    
    </span>
    <span className="team-span">
    <img src={require("./image2.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
        T.N.Rao
        </ h3 >
        <h5 className="team-text">Investor</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span>
    <span className="team-span">
    <img src={require("./image3.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
        Gireesh
        </ h3>
        <h5 className="team-text">Developer</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span><br/>
    <span className="team-span">
    <img src={require("./image5.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
        Dhanush Waran
        </ h3>
        <h5 className="team-text">Designer
</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span>
    <span className="team-span">
    <img src={require("./imag4.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
        Sachin
        </ h3>
        <h5 className="team-text">Commu coo. </h5>
      
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span>

    <span className="team-span">
    <img src={require("./image7.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
        Kiran
        </ h3>
        <h5 className="team-text">Web3 Mar.</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span>
    
    
    </div>)
}
export default Team