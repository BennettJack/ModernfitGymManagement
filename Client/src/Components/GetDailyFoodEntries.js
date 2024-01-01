import react, { useEffect, useState, Component } from "react";
import axios from "axios";
import data from "../data/FoodItems.json";
import '../CSS/Diary.css';

//This class extends react Component. I've done this as the component needs to re-render with data from the database.
//Without this, the page would keep rendering blank datasets. componentDidMount() allows the render to be re-called
//once the data has been returned
class DailyEntries extends Component {

	//diaryEntries declared so it can store the HTML blocks
	constructor() {
		super();
		this.state = {
			diaryEntries: [],
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
				//Once data has been returned, map the data to HTML blocks
			}).then(data => {
				let entries = data.map((entry) => {
					//Find the corresponding FoodItem from FoodItems.Json so we can get the Kcal values
					const results = jsonData.filter((object) =>
						object.id === entry.FoodItemID
					);
					//Calculate the Kcal amount
					const kcal = parseInt(results[0].kcalper100g) * (parseInt(entry.Quantity) / 100)
					//return a HTML block
					return (
						<div class="dairyEntry">
	
							<li>Name: {results[0].name}</li>
							<li>Amount: {entry.Quantity}g</li>
							<li>Kcal: {kcal}</li>


						</div>
					)
				})
				//Add the mapped diary entries
				this.setState({ diaryEntries: entries })
			})

	}
	//Return the html component
	render() {
		console.log(this.diaryEntries)
		return (
			<div >
				{this.state.diaryEntries}
			</div>
		)
	}
}
export default DailyEntries