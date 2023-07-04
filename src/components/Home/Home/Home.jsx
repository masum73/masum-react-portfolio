import React from 'react';
import Banner from './Banner';
import About from '../About/About';
import Skills from '../About/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;