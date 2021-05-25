import React from "react";
import "./index.scss";
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    return (
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>Portfolio Details</h2>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>{props.title}</li>
                    </ol>
                </div>

            </div>
        </section>
    );
};

export default Breadcrumb;
