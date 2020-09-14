//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import Navbar from './navbar';
import ScrollUp from './scrollUp';
import SocialNetwork from './socialNetwork';

//! == Composant ==
const Fixed = ({ scrollValue }) => {
    return (
        <div className="fixed">
            <Navbar scrollValue={scrollValue} />
            <ScrollUp scrollValue={scrollValue} />
            <SocialNetwork scrollValue={scrollValue} />
        </div>
    );
};

//! == Export ==
export default Fixed;
