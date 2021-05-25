import React from "react";
import "./index.scss";

const Loader = (props) => {
    return (
        <div className={`row justify-content-center loading-${props.type} ${props.margin ? 'margin-left' : ''}`}>
            <span></span>
        </div>
    );
};

export default Loader;
