import React from 'react';
import './index.scss';

const ExperienceItem = (props) => {
    return (
        props.data.map((exp, i) => {
            return (
                <div key={i} className="experience-item">
                    <h4>{exp.title}</h4>
                    <a href={exp.link} target="_blank" rel="noreferrer">
                        <h3>{exp.company ? exp.company : exp.university}</h3>
                    </a>
                    <h5>{exp.start_date} - {exp.end_date}</h5>
                    <p><em>{exp.city}, {exp.country}</em></p>
                    <ul>
                        {exp.items.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            );
        })
    )
};

export default ExperienceItem;