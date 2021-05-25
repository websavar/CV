import React, { useEffect, useRef } from 'react';
import './index.scss';
import { HashLink as Link } from 'react-router-hash-link';

const BackToTop = () => {
    const backToTopRef = useRef();

    useEffect(() => {
        const backToTop = backToTopRef.current;
        if (backToTopRef.current) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) backToTop.classList.add('active');
                else backToTop.classList.remove('active');
            }
            window.addEventListener('load', toggleBacktotop);
            document.addEventListener('scroll', toggleBacktotop);
        }
    }, []);

    return (
        <Link ref={backToTopRef} to="#home" className="back-to-top d-flex align-items-center justify-content-center">
            <i className="fas fa-arrow-up"></i>
        </Link>
    );
};

export default BackToTop;