//! == Import : npm ==
import React from 'react';
import AOS from 'aos';

//! == Import : local ==
import './styles.scss';

import CloudsReverse from './cloudsReverse';
import Presentation from './presentation.js';

//! == Composant ==
const About = () => {
    AOS.init();
    return (
        <div className="about">
            <CloudsReverse />
            <div className="about-filter"></div>
            <h2 data-aos="fade-right">ABOUT ME</h2>
            <Presentation />
            <svg viewBox="0 0 800 100">
                <polygon points="0,100 800,100 800 0,100"/>
            </svg>
        </div>
    );
};

//! == Export ==
export default About;
