import React from 'react';
import './index.scss';
import { HashLink as Link } from 'react-router-hash-link';

const NavMenu = (props) => {

    const AwesomeFontClasses = {
        "home": "fas fa-home",
        "about": "far fa-user",
        "skills": "fas fa-clipboard-list",
        "work_experience": "far fa-file",
        "education": "fas fa-university",
        "portfolio": "far fa-file-code",
        "personal_skills": "far fa-edit",
        "recommendations": "fas fa-clipboard-check",
        "contact": "far fa-envelope"
    }

    return (
        <nav id="navbar" className="nav-menu navbar">
            <ul>
                {Object.entries(props.data).map(obj => {
                    const [key] = obj;
                    return (
                        <li key={key}>
                            <Link to={`/#${key}`} className="nav-link scrollto">
                                <i className={AwesomeFontClasses[key]}></i>
                                <div>{key.split('_').join(' ')}</div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default NavMenu;