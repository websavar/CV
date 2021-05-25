import React, { useState, useEffect, useRef } from 'react';

import { slideHandler } from '../../utils';
import './index.scss';

import gate from '../../gate/index';
import Loader from '../Loader';
import Recommendation from './Recommendation';

const Recommendations = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await gate.fetchData();
            setData(data.recommendations);
            setLoading(false);
        };
        fetchData();
    }, []);

    const swiperRef = useRef();
    useEffect(() => {
        if (swiperRef.current)
            slideHandler({
                speed: 800,
                loop: true,
                delay: 10000,
                type: 'bullets'
            });
    });

    if (loading) return <Loader type="gradient" />;
    return (
        <section id="recommendations" className="recommendations">
            <div className="container">

                <div className="section-title">
                    <h2>Recommendations</h2>
                    <p>{data.description}</p>
                </div>

                <div ref={swiperRef} className="recommendations-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">
                        {data.persons.map((person, index) => <Recommendation person={person} key={index} />)}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
    )
};

export default Recommendations;