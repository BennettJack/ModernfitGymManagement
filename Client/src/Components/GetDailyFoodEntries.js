import react, { useEffect, useState, Component } from "react";
import { redirect, useHistory } from 'react-router-dom';
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import data from "../data/FoodItems.json";
import FoodCard from "../Components/FoodCard.js"

class DailyEntries extends Component {


	constructor() {
		super();
		this.state = {
			diaryEntries: [],
		};
	}
	componentDidMount() {
		const userID = JSON.parse(localStorage.getItem('user'));
		//set the date
		const newDate = new Date();
		const day = newDate.getDate().toString();
		const year = newDate.getFullYear().toString();
		const month = newDate.getMonth().toString();
		const fullDate = year + month + day;
		const jsonData = data;

		axios.get("http://localhost:5000/getFoodDiaryEntries", { params: { user_id: userID, date: fullDate } })
			.then(res => {
				return res.data.diaryEntries
			}).then(data => {
				let entries = data.map((entry) => {
					const results = jsonData.filter((object) =>
						object.id === entry.FoodItemID
					);
					return (
						<div>
	
							<li>Name: {results[0].name}, Amount: {entry.Quantity}</li>


						</div>
					)
				})
				this.setState({ diaryEntries: entries })
			})

	}
	render() {
		console.log(this.diaryEntries)
		return (
			<div>
				{this.state.diaryEntries}
			</div>
		)
	}
}
export default DailyEntries