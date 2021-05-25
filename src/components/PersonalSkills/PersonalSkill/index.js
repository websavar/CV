import React from 'react';
import './index.scss';

const PersonalSkill = (props) => {
    const data = props.data;
    return (
        <div key={props.index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={props.index * 100}>
            <div className="personal_card">
                <div className="card-header">{Object.keys(data)[0]}</div>
                <div className="card-body">
                    <ul>
                        {Object.values(data)[0].map((val, i) => {
                            return (
                                <li key={i}>
                                    <strong>{val.split(':')[0]}</strong>
                                    {val.split(':')[1] !== null ? val.split(':')[1] : null}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default PersonalSkill;