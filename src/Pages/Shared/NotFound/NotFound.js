import React from 'react';
import error from '../../../images/error.png';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;