import React from "react";
import "./footer.css"
function Footer(){
    return(<>
    <footer className="footer-basic">
    <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">About Us</a></li>
                <li class="list-inline-item"><a href="#">Mint</a></li>
                <li class="list-inline-item"><a href="#">Team</a></li>
                <li class="list-inline-item"><a href="#">Faq</a></li>
            </ul>
            <p class="copyright">Alt Space © 2022</p>
        </footer>
    
    </>)
}
export default Footer