import React from 'react';
import './index.scss';

const Recommendation = (props) => {
    const person = props.person;

    return (
        <div className="swiper-slide">
            <div className="recommendation-item" data-aos="fade-up">
                <p>
                    <i className="fas fa-quote-left quote-icon-left"></i>
                    {person.description}
                    <i className="fas fa-quote-right quote-icon-right"></i>
                </p>
                <img src={person.avatar} className="recommendation-img" alt={person.name} />
                <h3>{person.name}</h3>
                <h4>{person.role}</h4>
            </div>
        </div>
    )
};

export default Recommendation;