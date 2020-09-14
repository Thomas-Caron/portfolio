//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Footer = () => {
    let y = new Date();
    return (
        <footer>
            <p>&copy;{y.getFullYear()} - Thomas Caron - Tous droits réservés</p>
        </footer>
    );
};

//! == Export ==
export default Footer;
