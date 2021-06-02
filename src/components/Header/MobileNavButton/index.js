import React from 'react';
import './index.scss';
import { mobileNavToggle } from '../../../utils';

const MobileNavButton = () => {
    return (
        <i onClick={mobileNavToggle} className="fas fa-bars mobile-nav-toggle d-xl-none"></i>
    )
};

export default MobileNavButton;