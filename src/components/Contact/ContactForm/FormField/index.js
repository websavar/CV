import React from 'react';
import './index.scss';

const FormField = (props) => {

    const AwesomeFontClasses = {
        "name": "fas fa-user",
        "email": "fas fa-envelope",
        "subject": "fas fa-heading"
    }

    if (props.type === "submit")
        return (
            <div className="text-center">
                <button type={props.type} onClick={(e) => e.preventDefault()}>
                    {props.label}
                </button>
            </div>
        );

    if (props.type === "textarea")
        return (
            <div className="form-group">
                <label htmlFor="name">{props.name}</label>
                <div className="input-group mb-3">
                    <textarea className="form-control"
                        id={props.name}
                        name={props.name}
                        rows="6"
                        required={props.required}>
                    </textarea>
                </div>
            </div>
        );

    return (
        <div className="form-group">
            <label htmlFor="name">{props.label}</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className={AwesomeFontClasses[props.name]}></span>
                    </span>
                </div>
                <input className="form-control"
                    id={props.name}
                    placeholder={props.placeholder}
                    type={props.type}
                    aria-label={props.name}
                    required={props.required} />
            </div>
        </div>
    );
};

export default FormField;