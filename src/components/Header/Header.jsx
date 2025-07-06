import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__nav-bar">
        <p className="header__logo">Valerie Tsan</p>
        <nav className="header__desktop-nav">
          <ul className="header__nav-list">
            <li>
              <a href="/" className="header__button-home">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="header__button-saved">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="header__button-projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/skills" className="header__button-skills">
                Skills
              </a>
            </li>
            <li>
              <a href="/contact" className="header__button-contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
