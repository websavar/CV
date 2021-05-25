import React from 'react';
import FormField from './FormField';
import './index.scss';

const ContactForm = () => {

    return (
        <form action="" method="post" className="email-form">
            <div className="row">
                <FormField name="name" label="Your Name" placeholder="example@company.com" type="text" required={true} />
                <FormField name="email" label="Your email" placeholder="Firstname & Lastname" type="email" required={true} />
                <FormField name="subject" label="subject" placeholder="Subject" type="text" required={true} />
                <FormField name="message" placeholder="Your Message" type="textarea" required={true} />
            </div>

            <div className="messages mb-3">
                <div className="loading">Loading</div>
                <div className="error-message">Something went wrong!</div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>

            <FormField type="submit" label="Send Message" />
        </form>
    );
};

export default ContactForm;