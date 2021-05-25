import React, { useState, useEffect, useRef } from 'react';

import gate from '../../gate/index';
import Skill from './Skill';
import Loader from '../Loader';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [middle, setMiddle] = useState(0);

    const skillsRef = useRef();

    useEffect(() => {
        const fetchSkills = async () => {
            const data = await gate.fetchData();
            setSkills(data.skills);
            setLoading(false);
            setMiddle(Math.floor((Object.keys(data.skills.percent).length - 1) / 2));
        };
        fetchSkills();
    }, []);

    useEffect(() => {
        if (skillsRef.current) {
            let progress = [...document.querySelectorAll('.progress .progress-bar')];
            progress.forEach((el) => {
                el.style.width = el.getAttribute('aria-valuenow') + '%'
            });
        }
    });

    const showSkill = (skill, index) => {
        return <Skill key={index} skill={skill} val={skills.percent[skill]} />
    }

    if (loading) return <Loader type="gradient" />;
    return (
        <section id="skills" className="section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>{skills.description}</p>
                </div>

                <div ref={skillsRef} className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        {Object.keys(skills.percent).map((skill, index) => {
                            return index <= middle ? showSkill(skill, index) : null;
                        })}
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        {Object.keys(skills.percent).map((skill, index) => {
                            return index > middle ? showSkill(skill, index) : null;
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;