//! == Import : npm ==
import React from 'react';
import { Link } from 'react-scroll';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Navbar = ({ scrollValue }) => {
    return (
        <nav className={scrollValue > 80 ? "navbar scrolled" : "navbar"}>
            <Link
                className="navbar-logo"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >
                <svg viewBox="0 0 1000 800">
                    <polygon points="0,0 1000,0 935,100 190,100 245,200 340,200 240,380"/>
                    <polygon points="470,200 875,200 744,410 610,410 680,300 530,300 420,490 500,600 560,510 680,510 500,800 300,485"/>
                </svg>
            </Link>

            <input type="checkbox" className="navbar-burger" id="navbar-burger"/>
            <label htmlFor="navbar-burger" className="navbar-icon">
                <span></span>
            </label>
            <div className="navbar-links">
                <Link
                    className="navbar-link"
                    activeClass="navbar-link-active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={1000}
                >
                    <span></span>
                    <span>About me</span>
                </Link>
                <Link
                    className="navbar-link"
                    activeClass="navbar-link-active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={1000}
                >
                    <span></span>
                    <span>Skills</span>
                </Link>
                <Link
                    className="navbar-link"
                    activeClass="navbar-link-active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={1000}
                >
                    <span></span>
                    <span>Portfolio</span>
                </Link>
                <Link
                    className="navbar-link"
                    activeClass="navbar-link-active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-330}
                    duration={1000}
                >
                    <span></span>
                    <span>Contact</span>
                </Link>
            </div>
        </nav>
    );
};

//! == Export ==
export default Navbar;
