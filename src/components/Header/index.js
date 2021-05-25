import React, { useState, useEffect } from 'react';
import './index.scss';
import gate from '../../gate/index';

import { Link } from 'react-router-dom';
import Loader from '../Loader';
import SocialLinks from './SocialLinks';
import MobileNavButton from './MobileNavButton';
import NavMenu from './NavMenu';

const Header = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await gate.fetchData();
            setData(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        // Navbar links active state on scroll
        let navbarlinks = [...document.querySelectorAll('#navbar .scrollto')];
        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return;
                let section = document.querySelector(navbarlink.hash);
                if (!section) return;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active');
                } else {
                    navbarlink.classList.remove('active');
                }
            })
        }
        window.addEventListener('load', navbarlinksActive);
        document.addEventListener('scroll', navbarlinksActive);
    });

    return (
        <header id="header">

            <MobileNavButton />

            <div className="d-flex flex-column">
                {loading ? <Loader type="spinner" /> :
                    <>
                        <div className="profile">
                            <div className="avatar">
                                <img src={data.home.avatar_url}
                                    alt={`${data.home.firstname} ${data.home.lastname}`}
                                    className="img-fluid rounded-circle" />
                            </div>
                            <h1 className="text-light">
                                <Link to="/">
                                    {data.home.firstname} {data.home.lastname}
                                </Link>
                            </h1>
                            <SocialLinks data={data.about.social_links} />
                        </div>

                        <NavMenu data={data} />
                    </>
                }
            </div>
        </header >
    )
};

export default Header;