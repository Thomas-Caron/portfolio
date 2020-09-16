//! == Import : npm ==
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import AOS from 'aos';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const CardFlippy = ({ logo, altLogo, image, altImage, title, text, techno, link }) => {
    AOS.init();
    return (
        <div className="flippy" data-aos="fade-up">
            <Flippy
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="vertical"
            >
                <FrontSide>
                    <div className="flippy-front-detail">
                        <h4>{title}</h4>
                        <img src={logo} alt={altLogo}/>
                    </div>
                    <img src={image} alt={altImage} />
                    <button>En savoir plus</button>
                </FrontSide>
                <BackSide>
                    <FontAwesomeIcon icon={faTimesCircle} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <p>Techno utilisé :</p>
                    <p>{techno}</p>
                    <button>
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href={link}
                        >
                            Découvrir le site
                        </a>
                    </button>
                </BackSide>
            </Flippy>
        </div>
    );
};

//! == Export ==
export default CardFlippy;
