import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Outlets from '../Outlets/Outlets';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <Outlets></Outlets>
            <Contact></Contact>
        </>
    );
};

export default Home;