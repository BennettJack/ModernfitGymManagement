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

//Honestly don't know why componentDidMount won't work outside of this claass, but hey. If this isn't
//set up, the page will crash as it won't wait for data.


const Diary = () => {
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
	


	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(foodItemID, quantity);

		axios.post("http://localhost:5000/foodDiary", { userID, foodItemID, quantity, fullDate })
			.then(res => {
				console.log(res)
			})

	}

	useEffect(() => {
		setFullDate(FullDate);
		
		const userID = JSON.parse(localStorage.getItem('user'));
		axios.get("http://localhost:5000/getUser", { params: { user_id: userID } })
			.then(res => {
				setUserID(res.data.userData[0].ID)
				setKcalGoal(res.data.userData[0].KcalGoal)
			})
		console.log(testdata)
	}, []);

	
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




