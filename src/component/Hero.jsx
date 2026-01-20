import React from "react";
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-container">
            {/* {Title} */}
            <h1>English Speaking Competition</h1>
            
            {/* {Description} */}
            <h3>Description about ESC</h3>
            
            {/* {Buttons} */}
            <ul>
                <li><button>View current season</button></li>
                <li><button>Explore post season</button></li>
            </ul>
        </div>
    )
}

export default Hero