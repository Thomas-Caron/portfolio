//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';
import SvgAnim from './svgAnim';
import TypingEffect from './typingEffect';
import ScrollDown from './scrollDown';
import Clouds from './clouds';
import GradientAnim from './gradientAnim';

//! == Composant ==
const Home = ({ scrollValue }) => (
    <header className="home">
        <SvgAnim scrollValue={scrollValue} />
        <TypingEffect scrollValue={scrollValue} />
        <ScrollDown />
        <GradientAnim scrollValue={scrollValue}/>
        <Clouds />
        <div className="home-filter"></div>
    </header>
);

//! == Export ==
export default Home;
