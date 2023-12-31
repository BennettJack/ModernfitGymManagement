import react, { useEffect, useState } from "react";
import { redirect, useHistory } from 'react-router-dom';
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Diary = () => {
    const [userID, setUserID] = useState('');

    useEffect(() => {
        const userID = JSON.parse(localStorage.getItem('user'));
        const one = 1
        axios.get("http://localhost:5000/getUser", { params: { user_id: userID } })
            .then(res => {
                setUserID(res.data.userData[0].ID)
            })

    }, []);
	function handleClick() {
		const UserID = userID
		const FoodItemID = "89"
		const Quantity = "409"
		const newDate = new Date()
		const day = newDate.getDate().toString();
		const year = newDate.getFullYear().toString();
		const month = newDate.getMonth().toString();
		const fullDate = year + month + day;
		console.log(fullDate);
		axios.post("http://localhost:5000/foodDiary", { UserID, FoodItemID, Quantity, fullDate })
			.then(res => {
				console.log(res)
			})
	}

    return (
        <>
            <Header />
			<h2> Food Diary </h2>
			<h1>Click</h1>
			<button onClick={handleClick}>Click button</button>
            <Footer />
        </>
    )
}

export default Diary;


const handleClick = (userTest) => {
	axios.post("http://localhost:5000/user", {
		FirstName: "TestFirst",
		LastName: "TestSecond",
		Username: "TestUname",
		Password: "TestPass",
		Pin: 1234,
		Email: "Test@testemail.com",
		Location: "TestLocation"
	})
}


