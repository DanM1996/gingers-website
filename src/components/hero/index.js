import React from "react";
import image from '../../assets/skyline.jpg'
function Hero() {
    return (
        <div>
            <img src={image} className="hero-img" alt="Tampa Skyline"></img>;
        </div>
    )
}

export default Hero