import React, { useState, useEffect } from 'react';

import gate from '../../gate/index';
import Loader from '../Loader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './index.scss';

const Contact = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await gate.fetchData();
            setData(data.contact);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <Loader type="gradient" />;
    return (
        <section id="contact" className="section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>{data.description}</p>
                </div>

                <div className="row" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            {data.info.map((item, index) => <ContactInfo item={item} index={index} key={index} />)}
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section >
    )
};

export default Contact;