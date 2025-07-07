import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__nav-bar">
        <p className="header__logo">Valerie Tsan</p>

        {/* Desktop Nav */}
        <nav className="header__desktop-nav">
          <ul className="header__nav-list">
            <li>
              <a href="/" className="header__button-home">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="header__button-saved">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="header__button-projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="header__button-skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="header__button-contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="header__menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="header__mobile-nav">
          <ul className="header__mobile-list">
            <li>
              <a href="/" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
