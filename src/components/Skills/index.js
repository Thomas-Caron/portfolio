//! == Import : npm ==
import React from 'react';
import AOS from 'aos';

//! == Import : local ==
import './styles.scss';
import Progressbar from './progressbar';
import Html from '../../assests/images/logo/html.png';
import Css from '../../assests/images/logo/css.png';
import Sass from '../../assests/images/logo/sass.png';
import Bootstrap from '../../assests/images/logo/bootstrap.png';
import Git from '../../assests/images/logo/git.png';
import Php from '../../assests/images/logo/php.png';
import Sql from '../../assests/images/logo/sql.png';
import Javascript from '../../assests/images/logo/js.png';
import ReactJS from '../../assests/images/logo/react.png';
import Node from '../../assests/images/logo/node.png';


//! == Composant ==
const Skills = () => {
    AOS.init();
    return (
        <div className="skills">
            <h2 data-aos="fade-right">SKILLS</h2>
            <svg viewBox="0 0 800 100">
                <polygon points="0,100 800,100 800 0,100"/>
            </svg>
            <div className="skills-progressbar">
                <Progressbar progress="90" image={Html} alt="logo html" text="HTML5" />
                <Progressbar progress="90" image={Css} alt="logo css" text="CSS3" />
                <Progressbar progress="75" image={Sass} alt="logo sass" text="SASS &amp; SCSS" />
                <Progressbar progress="80" image={Bootstrap} alt="logo bootstrap" text="BOOTSTRAP" />
                <Progressbar progress="65" image={Git} alt="logo git" text="GIT &amp; GITHUB" />
                <Progressbar progress="75" image={Php} alt="logo php" text="MVC, POO, CRUD, API" />
                <Progressbar progress="65" image={Sql} alt="logo sql" text="ADMINER, PHPMYADMIN, MONGODB" />
                <Progressbar progress="70" image={Javascript} alt="logo javascript" text="JAVASCRIPT, ES6" />
                <Progressbar progress="80" image={ReactJS} alt="logo react" text="REACT.JS &amp; REDUX" />
                <Progressbar progress="40" image={Node} alt="logo node" text="NODE.JS &amp; EXPRESS.JS" />
            </div>
        </div>
    );
};

//! == Export ==
export default Skills;
