import React from 'react';
import './index.scss';

const PersonalInfo = (props) => {
    return (
        <li className="personal-info"><i className="fas fa-chevron-right"></i>
            <strong>{props.property}:</strong>
            <span>{props.value}</span>
        </li>
    )
};

export default PersonalInfo;