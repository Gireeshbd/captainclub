import React from "react";
import './team.css'
function Team(){
    return(<div className="team" id="team">
    <h1 className="team-heading">Meet our Team</h1>
    <span className="team-span">
    <img src={require("./image2.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
            Anonmous
        </ h3 >
        <h5 className="team-text">Developer</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    
    </span>
    <span className="team-span">
    <img src={require("./image2.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
            Anonmous
        </ h3 >
        <h5 className="team-text">Developer</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span>
    <span className="team-span">
    <img src={require("./image2.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
            Anonmous
        </ h3>
        <h5 className="team-text">Developer</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span><br/>
    <span className="team-span">
    <img src={require("./image2.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
            Anonmous
        </ h3>
        <h5 className="team-text">Developer</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span>
    <span className="team-span">
    <img src={require("./image2.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
            Anonmous
        </ h3>
        <h5 className="team-text">Developer</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span>

    <span className="team-span">
    <img src={require("./image2.png")} className="team-image"/>
    <span className="team-name">
        < h3 className="team-text">
            Anonmous
        </ h3>
        <h5 className="team-text">Developer</h5>
        <img src={require('./linkedinlogo.png')} className="linkedin-logo"/>
    </span>
    </span>
    
    
    </div>)
}
export default Team