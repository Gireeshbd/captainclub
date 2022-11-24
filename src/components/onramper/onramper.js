import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Onramper(){
return(<>
<Popup trigger={<button> Trigger</button>} position="left center">
<div className="onramper-div">
  <iframe
    className="onramper-iframe"
    src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
    height="660px"
    width="482px"
    title="Onramper widget"
    frameborder="0"
    allow="accelerometer; autoplay; camera; gyroscope; payment"
    
  >
  </iframe>
</div>
  </Popup>
</>)
}
export default Onramper