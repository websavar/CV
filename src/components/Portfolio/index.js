import React, { useState, useEffect } from 'react';
import gate from '../../gate/index';
import Loader from '../Loader';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await gate.fetchData();
            setData(data.portfolio);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <Loader type="gradient" />;
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>{data.description}</p>
                </div>

                <div className="row portfolio-container" data-aos="fade-up">
                    {data.items.map((item, i) => <PortfolioItem key={i} data={item} />)}
                </div>

            </div>
        </section>
    )
};

export default Portfolio;