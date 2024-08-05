import React from "react";
import logo from "../../assets/img/Visko_logo.png";

const Footer = () => {
  return (
    <div>
    <footer>
        <div class="container  containers" >
          <img src={logo} alt="" style={{height:"100px"}} />
            <div class="footer-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
          
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            {/* <div class="social-links">
                <a href="#" target="_blank"><i class="fa fa-facebook-f"></i></a>
                <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                <a href="#" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="#"   target="_blank"><i class="fa fa-linkedin"></i></a>
            </div> */}
           
            <p class="copyright">&copy;All right reserved | Visko E-Serve Private Limited</p>
        </div>
    </footer>
    </div>
  );
};

export default Footer;
