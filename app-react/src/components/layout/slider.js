import React from "react";
import './slider.css'
import './move.js'
import logo from '../../img/2.jpg'
import logo2 from '../../img/3.jpg'
import logo3 from '../../img/4.jpg'
const Slider = () => { 
    return (
        <div className="carousel">
        <div className="carousel-item">
        <img src={logo} className=" min-w-full min-h-full"/> 
        </div>
        <div className="carousel-item">
          <img src={logo2} className=" min-w-full min-h-full"/>
        </div>
        <div className="carousel-item">
        <img src={logo3} className=" min-w-full min-h-full"/>
        </div> 
      </div>
  );
};

export default Slider;
