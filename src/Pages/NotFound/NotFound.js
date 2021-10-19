import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';


const NotFound = () => {
    return (
        <div>
            <img style={{ width: "100%", height: "90vh" }} src={notFound} alt="" />
            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;