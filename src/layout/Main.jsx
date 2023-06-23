import React from 'react';
import NavBar from '../components/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;