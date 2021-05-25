import React from 'react';
import BackToTop from './BackToTop';
import './index.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div>&copy; Copyright 2021</div>
                <div className="credits">
                    Implemeneted by &nbsp;
                    <a href="http://websavar.com/" target="_blacnk" rel="noreferre">
                        H. Soltani
                    </a>
                </div>
            </div>

            <BackToTop />
        </footer>
    )
};

export default Footer;