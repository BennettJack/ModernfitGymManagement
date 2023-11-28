import React from "react";
import Footer from '../Components/Footer.js';
import Navbar from '../Components/Navbar.tsx';
import Header from '../Components/Header.js';
import Main from '../Components/Main.js'

const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <Navbar />
            <Footer />
        </div>
    )

}

export default Home