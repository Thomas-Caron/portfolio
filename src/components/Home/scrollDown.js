//! == Import : npm ==
import React from 'react';
import { Link } from 'react-scroll';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const ScrollDown = () => (
    <div className="scrollDown">
        <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-95}
            duration={1000}
        >
            <span></span>
        </Link>
    </div>
);

//! == Export ==
export default ScrollDown;
