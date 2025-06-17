import { useState } from "react";

import "./App.css";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import Projects from "../Projects/Projects.jsx";
import Skills from "../Skills/Skills.jsx";
import Blog from "../Blog/Blog.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
