import React from "react";
import "./Main.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Headshot from "/headshot.jpeg";

function Main() {
  return (
    <section className="main">
      <div className="main__content">
        <img src={Headshot} alt="Valerie Tsan" className="main__image" />
        <h1 className="main__title">Hello, I'm Valerie</h1>
        <p className="main__description">
          Hey, I'm Valerie. I'm a software engineer who likes keeping things
          simple—clean UI, thoughtful design, and code that just makes sense.
          This is my portfolio, and a peek into what I've been building.
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
          <a
            href="https://www.instagram.com/_helloval/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="main__buttons">
          <a href="/projects" className="main__buttons-projects">
            View My Work
          </a>
          <a href="/contact" className="main__buttons-contact">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
