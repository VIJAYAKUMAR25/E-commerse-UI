import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import hero_image from '../Assets/hero_image.png'
const Hero = () =>{
    return(
        <div className="container-fluid hero-main">
            <div className="hero row">
                <div className="hero-left col-12 col-lg-6">
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>new</p>
                            <img src={hand_icon} width={32} height={32} alt="wave" />
                        </div>        
                            <p>collections</p>
                            <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest collection <span className="bi bi-arrow-right"></span></div>
                    </div>
                </div>
                <div className="hero-right col-12 col-lg-6">
                    <img src={hero_image} alt="Hero-Img" />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}
export default Hero;
