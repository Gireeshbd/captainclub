import React, { useState } from "react";
import Onramper from "../../onramper/onramper";
import './mint.css'
import { MintButton } from "./mintButton";
import Timer from "./timer";
function Mint(){
    const [value,setvalue]=useState(1)
    const add=()=>{
        if (value<5) {
            setvalue(value+1)
        }
      
    }
    const minus=()=>{
        if (value>1) {
            setvalue(value-1) 
        }
       
    }
    return(<>
    <div className="mint-container">
        <img src={require("./image1.gif")} className="mint-image" />
        <h2>Launch Day</h2><br/>
        <Timer/><br/>
        <span className="mint-value">
            <button onClick={minus} className="value-button">-</button>
            <p className="value">{value}</p>
            <button onClick={add} className="value-button">+</button>
        </span><br/>
        <h5 className="current-price-text">Current-Price-0.03ETH</h5>
        <MintButton />
        {/* <Onramper/> */}
    </div>
    </>)
}
export default Mint