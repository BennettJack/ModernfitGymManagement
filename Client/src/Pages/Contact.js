import react, { useEffect, useState } from "react";
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import { useNavigate } from "react-router-dom";
import '../CSS/contact.css';

const Contact = () => {
    return (
        <>
            <Header />
            <div class="contactWrapper">
                <h1>Contact Information</h1>
                <p>If you have any enquiries, please reach out to us on the channels below:</p>
                <ul class="contactList">
                    <li>Phone: 0114809227481</li>
                    <li>Email: admin@modernfitgym.co.uk</li>
                    <li>X, formally known as twitter: @modernfit</li>            </ul>
                </div>
            <Footer />
        </>
    )
}

export default Contact;