//! == Import : npm ==
import React from 'react';
import AOS from 'aos';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

//! == Import : local ==
import './styles.scss';
import Card from './card';

//! == Composant ==
const Contact = () => {
    AOS.init();
    return (
        <div className="contact">
            <h2 data-aos="fade-right">CONTACT</h2>
            <svg viewBox="0 0 800 50">
                <polygon points="0,0 800,0 400,50 0,0"/>
            </svg>
            <svg viewBox="0 0 800 60">
                <polygon points="0,60 800,60 800,20 0,60"/>
                <line x1="0" y1="60" x2="800" y2="20"/>
                <polygon points="0,60 800,20 800,0 0,60"/>
            </svg>
            <div className="contact-data">
                <Card icon={faMapMarkerAlt} title="ADRESSE" text="Orvault Bourg, NANTES"/>
                <Card icon={faEnvelope} title="EMAIL" text="thomas.caron.dev@gmail.com"/>
                <Card icon={faMobileAlt} title="TÉLÉPHONE" text="06 47 86 35 14"/>
            </div>
        </div>
    );
};

//! == Export ==
export default Contact;