import React, { useEffect, useState } from "react";
import './faq.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


 
function Faq(){
   

    useEffect(()=>{
        const items = document.querySelectorAll('.accordion button');
        function toggleAccordion() {
          const itemToggle = this.getAttribute('aria-expanded');
        console.log(itemToggle)
          for (var i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
          }
        
          if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
          }
        }
        
        items.forEach((item) => item.addEventListener('click', toggleAccordion));
    
    })
        


    return(<>
    {/* <h1>FAQ's</h1>
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        <div className="accordion-item">
          <button id="accordion-button-1" aria-expanded="false">
            <span className="accordion-title">Why is the moon sometimes out during the day?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
              Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-2" aria-expanded="false">
            <span className="accordion-title">Why is the sky blue?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
              Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-3" aria-expanded="false">
            <span className="accordion-title">Will we ever discover aliens?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
              Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-4" aria-expanded="false">
            <span className="accordion-title">How much does the Earth weigh?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
              Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button id="accordion-button-5" aria-expanded="false">
            <span className="accordion-title">How do airplanes stay up?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
              Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </div> */}
     <h1 className="faq-heading">FAQ's</h1>
    <details open>
  <summary>FAQ 1</summary>
  <div class="faq__content">
    <p>Answer 1</p>
  </div>
</details>
<details>
  <summary>FAQ 2</summary>
  <div class="faq__content">
    <p>Answer 2</p>
  </div>
</details>
<details>
  <summary>FAQ 3</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
    </>)
} 
export default Faq