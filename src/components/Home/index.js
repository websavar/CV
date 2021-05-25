import React, { useState, useEffect } from 'react';
import './index.scss';
import gate from '../../gate/index';
import Loader from '../Loader';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await gate.fetchData();
            setData(data.home);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <Loader type="gradient" margin="true" />;
    return (
        <section id="home" style={{ backgroundImage: `url('${data.home_bg}')` }}
            className="d-flex flex-column justify-content-center align-items-center" >
            <div className="hero-container" data-aos="fade-in">
                <h1>{data.firstname} {data.lastname}</h1>
                <h2>{data.profession}</h2>
            </div>
        </section >
    )
};

export default Home;