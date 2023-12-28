import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";

const Signup = () => {
   

    const handleSubmit = (e) => {
       
    }

    return (
        <div>
            <Header />
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
            </form>
            <Footer />
        </div>
    )
}

export default Signup;