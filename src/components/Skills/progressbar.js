//! == Import : npm ==
import React from 'react';
import Progress from 'react-circle-progress-bar';
import AOS from 'aos';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Progressbar = ({ progress, image, alt, text }) => {
    AOS.init();
    const gradient = [{stop: 0.0, color: '#ff4e00 '}, {stop: 1, color: '#ec9f05'}];
    return (
        <div className="progressbar" data-aos="fade-up">
            <Progress 
                className="progressbar-progress"
                reduction={0}
                gradient={gradient}
                hideBall={true}
                hideValue={true}
                strokeWidth={8}
                transitionDuration={5000}
                progress={progress}
            >
            </Progress>
            <img src={image} alt={alt} />
            <p>{text}</p>
        </div>
    );
};

//! == Export ==
export default Progressbar;
