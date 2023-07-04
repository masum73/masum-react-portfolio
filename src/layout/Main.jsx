import React from 'react';
import NavBar from '../components/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import ScrollToTop from 'react-scroll-to-top';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollToTop className='flex justify-center items-center' smooth color="rgb(37 99 235)" />
        </div>
    );
};

export default Main;