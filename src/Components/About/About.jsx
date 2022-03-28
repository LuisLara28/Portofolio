import React from "react";

//Imports
import ME from "../../assets/profile-picture.jpg";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

//Style
import "./About.style.css";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            {/* <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>200+Worlwide</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div> */}

            <p>
              My name is <span>Luis Lara</span> I'm from Mexico, currently
              studyng to be a <span>FullStack Developer</span> in a bootcamp
              with <span>Academlo</span>.
            </p>
            <p>
              My experience during the bootcamp goes from learning the
              Fundamentals of Programming using <span>HTML</span>,{" "}
              <span>CSS</span> and <span>JavaScript</span>, to using a library
              such as <span>React</span>.
            </p>
            <p>
              That would be from the <span>frontend</span> area, and from the{" "}
              <span>backend</span> I learned how to use <span>NodeJs</span> in
              order to create an <span>API</span>.
            </p>
            <p>
              Most of my <span>projects</span> you can see them below in the{" "}
              <span>Portfolio</span> Area.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
