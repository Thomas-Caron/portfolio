//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import cloud1 from '../../assests/images/clouds/cloud1.png';
import cloud2 from '../../assests/images/clouds/cloud2.png';
import cloud3 from '../../assests/images/clouds/cloud3.png';
import cloud4 from '../../assests/images/clouds/cloud4.png';
import cloud5 from '../../assests/images/clouds/cloud5.png';

//! == Composant ==
const CloudsReverse = () => (
    <div className="banner">
        <div className="banner-clouds-reverse">
            <img src={cloud1} style={{"--i":1}} alt="cloud"/>
            <img src={cloud2} style={{"--i":2}} alt="cloud"/>
            <img src={cloud3} style={{"--i":3}} alt="cloud"/>
            <img src={cloud4} style={{"--i":4}} alt="cloud"/>
            <img src={cloud5} style={{"--i":5}} alt="cloud"/>
            <img src={cloud1} style={{"--i":10}} alt="cloud"/>
            <img src={cloud2} style={{"--i":9}} alt="cloud"/>
            <img src={cloud3} style={{"--i":8}} alt="cloud"/>
            <img src={cloud4} style={{"--i":7}} alt="cloud"/>
            <img src={cloud5} style={{"--i":6}} alt="cloud"/>
        </div>
    </div>
);

//! == Export ==
export default CloudsReverse;