import React from "react";
import Footer from '../Components/Footer.js';
import Navbar from '../Components/Navbar.tsx';
import header from '../Components/header.js';
import Main from '../Components/Main.js'

const Home = () => {
    return (
        <div>
            <Main />
            <Navbar />
            <Footer />
        </div>
    )

}

export default Home