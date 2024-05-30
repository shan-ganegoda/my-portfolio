import React from 'react';
import './Header.css';
import {useState} from 'react';

const Header = () => {

  /* ===============Toggle Menu================= */
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Lakshan</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list ">

            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-briefcase nav__icon"></i>Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#certificates" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Certificates
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>

          </ul>
          <i className="uil uil-times nav__close" onClick={() => showMenu (!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header