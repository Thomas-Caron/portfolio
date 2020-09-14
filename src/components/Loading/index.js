//! == Import : npm ==
import React from 'react';

//! == Import : local ==
import './styles.scss';

//! == Composant ==
const Loading = () => (
    <div className="loading">
        <svg viewBox="0 0 1000 800">
                <polygon points="0,0 1000,0 935,100 190,100 245,200 340,200 240,380"/>
                <polygon points="470,200 875,200 744,410 610,410 680,300 530,300 420,490 500,600 560,510 680,510 500,800 300,485"/>
        </svg>
    </div>
);

//! == Export ==
export default Loading;
