import React, { useState, useEffect } from 'react';
import './index.scss';
import gate from '../../gate/index';
import ExperienceItem from './ExperienceItem';
import Loader from '../Loader';

const Experience = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await gate.fetchData();
            setData(data[props.type]);
            setLoading(false);
        };
        fetchData();
    }, [props.type]);

    if (loading) return <Loader type="gradient" />;
    return (
        <section id={props.type} className={props.type === "education" ? "section-bg" : ""}>
            <div className="container">

                <div className="section-title">
                    <h2>{props.type.split('_').join(' ')}</h2>
                    <p>{data.description}</p>
                </div>

                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <h3 className="experience-title">
                            {props.type === 'work_experience' ? 'Professional Experience' : null}
                        </h3>
                        <ExperienceItem data={data.items} />
                    </div>
                </div>

            </div>
        </section>
    )
};

export default Experience;