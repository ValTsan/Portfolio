import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__info">
          <h3 className="footer__name">Valerie Tsan</h3>
          <p className="footer__role">Full Stack Developer</p>
        </div>
        <nav className="footer__nav-list">
          <li>
            <a href="/" className="footer__button-home">
              Home
            </a>
          </li>

          <li>
            <a href="/about" className="footer__button-saved">
              About
            </a>
          </li>

          <li>
            <a href="/projects" className="footer__button-projects">
              Projects
            </a>
          </li>

          <li>
            <a href="/skills" className="footer__button-skills">
              Skills
            </a>
          </li>

          <li>
            <a href="/contact" className="footer__button-contact">
              Contact
            </a>
          </li>
        </nav>
      </div>

      <hr className="footer__divider"></hr>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Valerie Tsan. All rights reserved.</p>

        <p>Designed with ❤️ and a cup of coffee.</p>
      </div>
    </footer>
  );
}

export default Footer;
