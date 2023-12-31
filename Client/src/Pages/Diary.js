import react, { useEffect, useState } from "react";
import { redirect, useHistory } from 'react-router-dom';
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import data from "../data/FoodItems.json";

const Diary = () => {
	const [userID, setUserID] = useState('');
	const [foodItemID, setFoodItemID] = useState('');
	const [quantity, setQuantity] = useState('');
	const [fullDate, setFullDate] = useState('');


	//set the date
	const newDate = new Date();
	const day = newDate.getDate().toString();
	const year = newDate.getFullYear().toString();
	const month = newDate.getMonth().toString();
	const FullDate = year + month + day;
	
	useEffect(() => {
		setFullDate(FullDate);



        const userID = JSON.parse(localStorage.getItem('user'));
        const one = 1
        axios.get("http://localhost:5000/getUser", { params: { user_id: userID } })
            .then(res => {
                setUserID(res.data.userData[0].ID)
            })

	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(foodItemID, quantity);

		axios.post("http://localhost:5000/foodDiary", { userID, foodItemID, quantity, fullDate })
			.then(res => {
				console.log(res)
			})
	}


	function handleClick() {
		console.log(fullDate);

	}
	const options = data
    return (
        <>
            <Header />
			<h2> Food Diary </h2>
			<h1>Click</h1>
			<button onClick={handleClick}>Click button</button>

			<form id="newFoodItem" onSubmit={handleSubmit}>
				<label htmlFor="item">
					Food Item
				</label>
				<Select
					id="item"
					options={options}
					getOptionLabel={(option) => option.name}
					getOptionValue={(option) => option.id }
					onChange={(option) => setFoodItemID(option.id)}
				/>
				<label htmlFor="quantity">
					Quantity (G / ML)
				</label>
				<input
					type="text"
					id="quantity"
					onChange={(e) => setQuantity(e.target.value)}
				/>
				<button>Submit</button>
			</form>
            <Footer />
        </>
    )
}

export default Diary;




