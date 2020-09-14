//! == Import : npm ==
import React from 'react';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Card = ({ title, text, icon }) => {
    AOS.init();
    return (
        <div className="card" data-aos="fade-up">
            <FontAwesomeIcon icon={icon} />
            <p className="card-title">{title}</p>
            <span></span>
            <p className="card-text">{text}</p>
            <span></span>
        </div>
    );
};

//! == Export ==
export default Card;
