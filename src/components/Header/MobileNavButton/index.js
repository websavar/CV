import React from 'react';
import './index.scss';

const MobileNavButton = () => {
    const mobileNavToggle = (e) => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        e.target.classList.toggle('fa-times');
    }

    return (
        <i onClick={mobileNavToggle} className="fas fa-bars mobile-nav-toggle d-xl-none"></i>
    )
};

export default MobileNavButton;