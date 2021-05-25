import React from 'react';

import './index.scss';

const Skill = (props) => {
    return (
        <div key={props.index} className="progress">
            <span className="skill">
                {props.skill}
                <i className="val">{props.val}%</i>
            </span>
            <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar"
                    aria-valuenow={props.val} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
};

export default Skill;