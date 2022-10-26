import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shered/Footer';
import Header from '../components/shered/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;