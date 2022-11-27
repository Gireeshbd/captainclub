import React from "react";
import './welcome.css'
import Mint from "./mint/mint.js";
function Welcome(){
    return(
    <>
    <div className="welcome-div1" id="home">
        <h1 className="welcome-heading">
            WELCOME TO 
        </h1>
        <h1 className="welcome-heading1">CAPTAIN CLUB</h1>
        <h4 className="welcome-text">
        Captain club is one of the major collection in the
 ALT SPACE community with the highest power than 
the rest of the collections

        </h4>
    </div>
    <div className="welcome-div2">
        <Mint/>
    </div>
    </>
    )
}
export default Welcome