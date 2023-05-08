/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Sheared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;