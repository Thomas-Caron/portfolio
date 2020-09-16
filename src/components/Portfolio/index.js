//! == Import : npm ==
import React from 'react';
import AOS from 'aos';

//! == Import : local ==
import './styles.scss';
import Vitrine from '../../assests/images/portfolio/vitrine.png';
import Backoffice from '../../assests/images/portfolio/backoffice.png';
import Perso from '../../assests/images/portfolio/perso.png';
import logoMC from '../../assests/images/logo/logo-mc.png';
import logoTC from '../../assests/images/logo/logo-tc.png';
import CardFlippy from './cardFlippy.js';

//! == Composant ==
const Portfolio = () => {
    AOS.init();
    return (
        <div className="portfolio">
            <h2 data-aos="fade-right">PORTFOLIO</h2>
            <div className="portfolio-cards">
                <CardFlippy 
                    logo={logoMC}
                    altLogo="logo Messieurs Croquent"
                    image={Vitrine} 
                    altImage="site messieurs croquent" 
                    title="MESSIEURS CROQUENT"
                    text="Création d’un site pour un restaurant de croque-monsieur existant «Messieurs Croquent» situé à Bordeaux. Mise en place d’un panier afin de commander en ligne et payer sur place."
                    techno="React/Redux, React-Router, Webpack, Sass, Aos.JS, Symphony, Adminer"
                    link="http://ec2-3-84-167-149.compute-1.amazonaws.com"
                />
                <CardFlippy 
                    logo={logoMC}
                    altLogo="logo Messieurs Croquent"
                    image={Backoffice} 
                    altImage="site backoffice messieurs croquent" 
                    title="BACKOFFICE - MESSIEURS CROQUENT" 
                    text="Création du back-office pour que le restaurateur reçoive les commandes et ai la possibilité d’ajouter, modifier ou supprimer des produits."
                    techno="React/Redux, React-Router, Aos.JS, Webpack, Sass, Symphony, Adminer"
                    link="http://ec2-3-84-167-149.compute-1.amazonaws.com/backoffice"
                />
                <CardFlippy 
                    logo={logoTC}
                    altLogo="logo portfolio"
                    image={Perso} 
                    altImage="site portfolio thomas caron" 
                    title="SITE PORTFOLIO" 
                    text="Création d'un site portfolio pour mon propre compte afin de montrer ce que je sais faire."
                    techno="React/Redux, Aos.JS, Granim.JS, Webpack, Sass"
                    link="http://thomas-caron.netlify.app"
                />
            </div>
        </div>
    );
};

//! == Export ==
export default Portfolio;
