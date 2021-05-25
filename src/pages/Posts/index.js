import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from "react-router-dom";

import { slideHandler } from '../../utils';
import './index.scss';
import gate from '../../gate/index';
import Loader from '../../components/Loader';
import Breadcrumb from '../../components/Breadcrumb';

const Posts = () => {
    const history = useHistory();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imagesNumber, setmagesNumber] = useState(true);

    const { title } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await gate.fetchData();
            let item = data.portfolio.items.find(item => item.title === title);
            if (!item) history.push('/404');
            setData(item);
            setLoading(false);
            setmagesNumber(Object.values(item.images).length);
        };
        fetchData();
    }, [history, title]);

    const swiperRef = useRef();
    useEffect(() => {
        if (swiperRef.current)
            slideHandler({
                speed: 500,
                loop: imagesNumber > 1 ? true : false,
                delay: 4000,
                type: imagesNumber > 1 ? 'bullets' : 'custom'
            });
    });

    if (loading) return <Loader type="gradient" margin="true" />;
    return (
        <main id="main">

            <Breadcrumb title={data.title} />

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row gy-4">

                        <div className="col-lg-8">
                            <div ref={swiperRef} className="portfolio-details-slider swiper-container">
                                <div className="swiper-wrapper align-items-center">
                                    {data.images.map((image, i) => {
                                        return (
                                            <div key={i} className="swiper-slide">
                                                <img src={image} alt={data.title} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li><strong>Category</strong>: {data.category}</li>
                                    <li><strong>Client</strong>: {data.title}</li>
                                    <li><strong>Project date</strong>: {data.date}</li>
                                    <li><strong>Project URL</strong>:
                                        <a href={data.link} target="_blank" rel="noreferrer"> {data.link.split('//')[1]}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="portfolio-description">
                                <h3>Technologies used</h3>
                                <ul>{data.technologies.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}

export default Posts;