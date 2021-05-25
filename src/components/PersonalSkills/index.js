import React, { useState, useEffect } from 'react';

import gate from '../../gate/index';
import PersonalSkill from './PersonalSkill';
import Loader from '../Loader';

const PersonalSkills = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await gate.fetchData();
            setData(data.personal_skills);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <Loader type="gradient" />;
    return (
        <section id="personal_skills" className="services section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Personal Skills</h2>
                    <p>{data.description}</p>
                </div>

                <div className="row">
                    {data.skills.map((item, i) => <PersonalSkill key={i} data={item} index={i} />)}
                </div>

            </div>
        </section>
    )
};

export default PersonalSkills;