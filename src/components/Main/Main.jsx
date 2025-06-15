import React from "react";
import "./Main.css";
import { FaGithub } from "react-icons/fa";
import { FaGitHub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Main() {
  return (
    <section className="main">
      <div className="main__content">
        <div className="main__image"></div>
        <h1 className="main__title">Hello I'm Valerie</h1>
        <p className="main__subtitle">Software Engineer</p>
        <p className="main__description">
          I am a software engineer with a passion for building web applications.
          I love creating user-friendly interfaces and solving complex problems.
        </p>
        <div className="main__hero-socials"></div>
      </div>
    </section>
  );
}

export default Main;
