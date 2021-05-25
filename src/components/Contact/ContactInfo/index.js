import React from 'react';
import './index.scss';

const ContactInfo = (props) => {

    const AwesomeFontClasses = {
        "location": "fas fa-map-marker-alt",
        "email": "fas fa-envelope",
        "phone": "fas fa-mobile-alt"
    }

    const infoTitle = Object.keys(props.item).join();
    const infoValue = Object.values(props.item);

    const setLink = (title, value) => {
        if (title === "email") return <a href={`mailto:${value}`}>{value}</a>;
        if (title === "phone") return <a href={`tel:${value}`}>{value}</a>;
        return value;
    }

    if (infoTitle === "map_address")
        return (
            <iframe className="map" title="map"
                src={props.item.map_address}
                frameBorder="0" allowFullScreen>
            </iframe>
        );

    return (
        <div className={infoTitle}>
            <i className={AwesomeFontClasses[infoTitle]}></i>
            <h4>{infoTitle}</h4>
            <p>{setLink(infoTitle, infoValue)}</p>
        </div>
    );
};

export default ContactInfo;