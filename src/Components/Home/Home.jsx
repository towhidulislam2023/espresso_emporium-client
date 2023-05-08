/* eslint-disable no-unused-vars */
import React from 'react';
import HomeBannar from '../../pages/HomeBannar/HomeBannar';
import Services from '../../pages/Services/Services';
import Products from '../../pages/Products/Products';
import InstagramView from '../InstagramView/InstagramView';

const Home = () => {
    return (
        <div>
            <HomeBannar></HomeBannar>
            <Services></Services>
            <Products></Products>
            <InstagramView></InstagramView>
        </div>
    );
};

export default Home;