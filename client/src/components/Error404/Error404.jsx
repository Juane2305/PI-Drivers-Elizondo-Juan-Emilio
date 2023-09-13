import React from 'react';
import { Link } from 'react-router-dom';


const Error404 = () => {
    return (
        <div>
            <div>
                <h3>Error 404 :( Page not found</h3>
                <div>
                    <h1>Go back Home!</h1>
                    <Link to='/home'>
                        <button>HOME</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;