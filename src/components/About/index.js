import React, { useState, useEffect } from 'react';
import './index.scss';
import gate from '../../gate/index';
import Loader from '../Loader';
import PersonalInfo from './PersonalInfo';

const About = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [middle, setMiddle] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await gate.fetchData();
            setData(data);
            setLoading(false);
            setMiddle(Math.floor((data.about.personal_info.length - 1) / 2));
        };
        fetchData();
    }, []);

    const showPersonalInfo = (info, index) => {
        return <PersonalInfo
            key={index}
            property={Object.keys(info)[0]}
            value={Object.values(info)[0]} />
    }

    if (loading) return <Loader type="gradient" />;
    return (
        <section id="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>{data.about.description}</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={data.about.about_url} className="img-fluid"
                            alt={`${data.home.firstname} ${data.home.lastname}`} />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>{data.about.positions.join(" & ")}</h3>
                        <ul className="fst-italic perspective">
                            {data.about.perspectives.map((perspective, i) =>
                                <li key={i}>{perspective}</li>
                            )}
                        </ul>

                        <div className="row spec">
                            <div className="col-lg-6">
                                <ul>
                                    {data.about.personal_info.map((info, index) => {
                                        return index <= middle ? showPersonalInfo(info, index) : null;
                                    })}
                                </ul>
                            </div>
                            <div className="col-lg-6" data-aos-delay="100">
                                <ul>
                                    {data.about.personal_info.map((info, index) => {
                                        return index > middle ? showPersonalInfo(info, index) : null;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default About;