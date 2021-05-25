import React from 'react';
import './index.scss';

const SocialLinks = (props) => {
    const AwesomeFontClasses = {
        "website": "fas fa-link",
        "github": "fab fa-github",
        "instagram": "fab fa-instagram",
        "linkedin": "fab fa-linkedin",
        "hackerrank": "fab fa-hackerrank"
    }

    return (
        <div className="social-links mt-2 text-center">
            {props.data.map((item, i) => {
                return (
                    <a key={i} href={item.link} target="_blank" rel="noreferrer">
                        <i className={AwesomeFontClasses[item.title]}></i>
                    </a>
                )
            })}
        </div>
    )
};

export default SocialLinks;