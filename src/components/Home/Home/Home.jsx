import React from 'react';
import Banner from './Banner';
import About from '../About/About';
import Skills from '../About/Skills';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Resume></Resume>
        </div>
    );
};

export default Home;