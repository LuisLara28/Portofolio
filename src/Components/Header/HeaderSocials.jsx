import React from "react";

//React Icons
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/luis-e-lara-morales-ab142a153"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/LuisLara28" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
