import react, { useEffect, useState, Component } from "react";
import axios from "axios";
import data from "../data/FoodItems.json";
import '../CSS/Diary.css';

//This class extends react Component. I've done this as the component needs to re-render with data from the database.
//Without this, the page would keep rendering blank datasets. componentDidMount() allows the render to be re-called
//once the data has been returned
class DailyKcal extends Component {

	
	constructor() {
		super();
		this.state = {
			diaryEntries: 0,
		};
	}
	componentDidMount() {
		//Attributes
		const userID = JSON.parse(localStorage.getItem('user'));
		//set the date
		const newDate = new Date();
		const day = newDate.getDate().toString();
		const year = newDate.getFullYear().toString();
		const month = newDate.getMonth().toString();
		const fullDate = year + month + day;
		const jsonData = data;

		//Fetch data from database
		axios.get("http://localhost:5000/getFoodDiaryEntries", { params: { user_id: userID, date: fullDate } })
			.then(res => {
				return res.data.diaryEntries
				//With this data, get the total kcal amount
			}).then(data => {
				let total = 0
				//Find the KCal values for each entry
				let entries = data.forEach((entry) => {
					const results = jsonData.filter((object) =>
						object.id === entry.FoodItemID
					);

					//Add them all together for a toal
					const kcal = parseInt(results[0].kcalper100g) * (parseInt(entry.Quantity) / 100)
					total += kcal
					this.setState({ diaryEntries: total })
				})				
			})
		
	}
	//Return the component
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