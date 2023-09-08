import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div>
            <Link to='/register'>Register</Link>
        </div>
    );
};

export default home;