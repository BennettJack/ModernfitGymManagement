import react, { useEffect, useState, Component } from "react";
import { redirect, useHistory } from 'react-router-dom';
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import axios from "axios";
import Select from "react-select";
import data from "../data/FoodItems.json";
import DailyEntries from "../Components/GetDailyFoodEntries.js";
import DailyKcal from "../Components/GetDailyKcal.js";
import '../CSS/Diary.css';


const Diary = () => {
	//Attributes
	const [userID, setUserID] = useState('');
	const [foodItemID, setFoodItemID] = useState('');
	const [quantity, setQuantity] = useState('');
	const [fullDate, setFullDate] = useState('');
	const [testdata, setTestData] = useState('');
	const [kcalGoal, setKcalGoal] = useState('');

	//set the date
	const newDate = new Date();
	const day = newDate.getDate().toString();
	const year = newDate.getFullYear().toString();
	const month = newDate.getMonth().toString();
	const FullDate = year + month + day;
	

	//When the form is submitted, this function is called
	const handleSubmit = async (e) => {
		e.preventDefault();

		//Posts the food item object
		axios.post("http://localhost:5000/foodDiary", { userID, foodItemID, quantity, fullDate })

	}

	//When the page loads, set the date, and get user data
	useEffect(() => {
		setFullDate(FullDate);

		//gets the user's data, then pull out their ID and Kcal goal
		const userID = JSON.parse(localStorage.getItem('user'));
		axios.get("http://localhost:5000/getUser", { params: { user_id: userID } })
			.then(res => {
				setUserID(res.data.userData[0].ID)
				setKcalGoal(res.data.userData[0].KcalGoal)
			})
	}, []);

	//options set the FoodItems.json data. This data is then used to populate a combo box
	const options = data
	return (

        <>
			<Header />
			<div div id="diaryWrapper">
				<h2> Food Diary </h2>

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
			
				<button>test</button>
				<h3>Your entries for today</h3>
				<p><DailyEntries /></p>
				<h3>Your total Kcal for today:</h3>
				<p id="totalKcal"><DailyKcal /> / {kcalGoal}</p>
			</div>
            <Footer />
        </>
    )
}

export default Diary;




