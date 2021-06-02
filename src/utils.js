import AOS from 'aos';

import Swiper, { Autoplay } from 'swiper';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
Swiper.use([Autoplay]);
SwiperCore.use(Pagination);

export const slideHandler = ({ speed = 600, loop = true, delay = 3000, type = 'bullets' }) => {
    new Swiper('.swiper-container', {
        speed: speed,
        loop: loop,
        autoplay: {
            delay: delay,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: type,
            clickable: true
        }
    });
}

AOS.init();

// Animation on scroll
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});

// Scrolls to an element with header offset
const scrollto = (el) => {
    let elementPos = document.querySelector(el).offsetTop;
    window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
    });
}

// Scroll with ofset on page load with hash links in the url
window.addEventListener('load', () => {
    if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
            scrollto(window.location.hash);
        }
    }
});

// Toggle switch active for mobile-nav button
export const mobileNavToggle = (e) => {
    const body = document.querySelector('body');
    const toggleIcon = e.target;
    if (toggleIcon.classList.value.includes('mobile-nav-toggle') || body.classList.value.includes('mobile-nav-active')) {
        body.classList.toggle('mobile-nav-active');
        document.querySelector('.mobile-nav-toggle').classList.toggle('fa-times');
    }
}

