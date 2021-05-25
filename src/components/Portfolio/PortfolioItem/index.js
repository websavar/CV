import React from 'react';
import './index.scss';
import { HashLink as Link } from 'react-router-hash-link';

const PortfolioItem = (props) => {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <Link to={`/Posts/${props.data.title}`}>
                <div className="portfolio-wrap">
                    <img src={props.data.thumb_img} className="img-fluid" alt={props.data.title} />
                </div>
            </Link>
        </div>
    )
};

export default PortfolioItem;