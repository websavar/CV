import React from "react";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="text-center pt-5 page-not-found">
            <h1 className="mb-3">404 Page Not Found!</h1>
            <h4>Sorry, the page you tried to view does not exist.</h4>
            <p>Check out the <Link to="/">Home page</Link></p>
        </div>
    )
};

export default NotFoundPage;
