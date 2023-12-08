import React from "react";
import Footer from '../Components/Footer.js';
import Header from '../Components/header.js';
import Main from '../Components/Main.js'
import Offer from '../Components/Offer.js'
import Map from '../Components/Map.js'

const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <Map />
            <Offer />
            <Footer/>
        </div>
    )

}

export default Home