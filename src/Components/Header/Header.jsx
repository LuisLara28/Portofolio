import React, { useState } from "react";

//COMPONENTS
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

//Style
import "./Header.style.css";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Luis Lara</h1>
        <h5 className="text-light"> Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials />
      </div>
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </header>
  );
};

export default Header;
