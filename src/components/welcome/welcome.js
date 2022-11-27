import React from "react";
import './welcome.css'
import Mint from "./mint/mint.js";
function Welcome(){
    return(
    <>
    <div className="welcome-div1" id="home">
        <h1 className="welcome-heading">
        Enter ALT Space 
        </h1>
        <h1 className="welcome-heading1">as Captains</h1>
        <h4 className="welcome-text">
        ALT Space Captains collection is made up of 9,999 randomly generated NFTs that exist on the Polygon blockchain. The holders of ALT Space Captains NFTs can participate in an exclusive forum that brings together Web3 builders under 1 roof. Keep in mind that all Captains have caps, and that's what makes them different from everyone else in ALT Space.

        </h4>
    </div>
    <div className="welcome-div2">
        <Mint/>
    </div>
    </>
    )
}
export default Welcome