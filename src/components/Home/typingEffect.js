//! == Import : npm ==
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const TypingEffect = ({ scrollValue }) => {
    const textTyping = [
        "Web",
        "Front-End",
        "Javascript",
        "React.JS",
    ];
    return (
        <div className="typing">
            <ReactTypingEffect
                className="typing-text"
                staticText="Développeur"
                text={textTyping}
                speed={200}
                eraseDelay={2000}
                typingDelay={300}
                style={{marginBottom: .8 * scrollValue + 'px'}}
            />
        </div>
    );
};

//! == Export ==
export default TypingEffect;
