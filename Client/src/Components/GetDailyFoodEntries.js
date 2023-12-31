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
		const userID = 19
		const fullDate = "20231131"
		axios.get("http://localhost:5000/getFoodDiaryEntries", { params: { user_id: userID, date: fullDate } })
			.then(res => {
				console.log("test1")
				return res.data.diaryEntries
			}).then(data => {
				console.log("test2")
				let entries = data.map((entry) => {
					return (
						<div>
							<li>Name: {entry.FoodItemID}, Amount: {entry.Quantity}</li>


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