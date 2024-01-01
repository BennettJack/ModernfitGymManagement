import react, { useEffect, useState, Component } from "react";
import axios from "axios";
import data from "../data/FoodItems.json";
import '../CSS/Diary.css';


class DailyKcal extends Component {

	
	constructor() {
		super();
		this.state = {
			diaryEntries: 0,
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
				let total = 0
				let entries = data.forEach((entry) => {
					const results = jsonData.filter((object) =>
						object.id === entry.FoodItemID
					);
					const kcal = parseInt(results[0].kcalper100g) * (parseInt(entry.Quantity) / 100)
					console.log("test" + kcal)
					total += kcal
					console.log("Total = " + total)
					this.setState({ diaryEntries: total })
				})				
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
export default DailyKcal