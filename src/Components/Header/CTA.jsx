import React from "react";

//Imports
import RESUME from "../../assets/Luis Lara Resume.pdf";
import RESUMESP from "../../assets/Luis Lara Resume (Esp).pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={RESUME} download className="btn">
        Download CV (English)
      </a>
      <a href={RESUMESP} download className="btn">
        Download CV (Spanish)
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
