import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='mt-3 text-white bg-dark text-center p-3'>
            <p><small>Copyright Mega Grocery &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;