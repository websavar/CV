import React, { useEffect } from "react";
import "./index.scss";
import { slideHandler } from '../../utils';

const Slider = (props) => {
    const data = props.data;
    const imagesNumber = props.imagesNumber;

    useEffect(() => {
        slideHandler({
            speed: 500,
            loop: imagesNumber > 1 ? true : false,
            delay: 4000,
            type: imagesNumber > 1 ? 'bullets' : 'custom'
        });
    });

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper align-items-center">
                {data.images.map((image, i) => {
                    return (
                        <div key={i} className="swiper-slide">
                            <img src={image} alt={data.title} />
                        </div>
                    )
                })}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default Slider;
