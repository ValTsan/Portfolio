import React from "react";
import "./Main.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import Headshot from "../../../public/headshot.jpeg";

function Main() {
  return (
    <section className="main">
      <div className="main__content">
        <img src={Headshot} alt="Valerie Tsan" className="main__image" />
        <h1 className="main__title">Hello I'm Valerie</h1>
        <p className="main__description">
          I build clean, functional web applications and care deeply about
          thoughtful design. I like solving problems that actually matter—and
          keeping things simple for the people using them.
        </p>
        <div className="main__socials">
          <a
            href="https://github.com/ValTsan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/valerietsan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@ValerieTsan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
