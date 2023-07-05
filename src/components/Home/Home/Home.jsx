import React from 'react';
import Banner from './Banner';
import About from '../About/About';
import Skills from '../About/Skills';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Reviews from '../Projects/Reviews';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Resume></Resume>
            <Projects></Projects>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;