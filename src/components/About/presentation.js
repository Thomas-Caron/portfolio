//! == Import : npm ==
import React from 'react';
import AOS from 'aos';

//! == Import : local ==
import './styles.scss';
import Image from '../../assests/images/presentation/presentation.png';

//! == Composant ==
const Presentation = () => {
    AOS.init();
    return (
        <div className="presentation">
            <img src={Image} alt="portrait auteur" data-aos="fade-up"/>
            <div data-aos="fade-up">
                <p>Bienvenue,</p>
                <p>Je suis Thomas Caron, développeur Front-End et plus particulièrement React.js.</p>
                <p>Après une formation intensive à l'école O'clock, je poursuis mon apprentissage grâce à des travaux personnels.</p>
                <p>Actuellement en quête d'opportunités professionnelles sur Nantes, n'hésitez pas à me contacter si vous recrutez.</p>
            </div>
        </div>
    );
};

//! == Export ==
export default Presentation;
