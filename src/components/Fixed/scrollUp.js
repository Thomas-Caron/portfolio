//! == Import : npm ==
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const ScrollUp = ({ scrollValue }) => (
    <div className="bottom-fixed">
        <div className={scrollValue > 100 ? "scrollUp visible" : "scrollUp"}>
            <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >
                <FontAwesomeIcon icon={faChevronUp} />
            </Link>
        </div>
    </div>
);

//! == Export ==
export default ScrollUp;
