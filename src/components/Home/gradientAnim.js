//! == Import : npm ==
import React from 'react';
import GranimCanvas from 'react-granim-canvas';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const GradientAnim = ({ scrollValue }) => {
    GranimCanvas.defaultProps = {
        direction: 'top-bottom',
        element: '.granim-canvas',
        opacity: [1, 1],
        image : {
            source: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            blendingMode: 'multiply'
        },
        states: {
           "default-state": {
              gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
              ],
              transitionSpeed: 7000
           }
        },
    };
    return (
        <div className="granim">
            <canvas 
                className="granim-canvas"
                style={{marginBottom: .2 * scrollValue + 'px'}}
            >
            </canvas>
            <GranimCanvas />
        </div>
    );
};

//! == Export ==
export default GradientAnim;
