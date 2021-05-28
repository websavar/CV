import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";

import './index.scss';
import gate from '../../gate/index';
import Loader from '../../components/Loader';
import Breadcrumb from '../../components/Breadcrumb';
import Slider from '../../components/Slider';

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

    if (loading) return <Loader type="gradient" margin="true" />;
    return (
        <main id="main">

            <Breadcrumb title={data.title} />

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row gy-4">

                        <div className="col-lg-8">
                            <Slider imagesNumber={imagesNumber} data={data} />
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