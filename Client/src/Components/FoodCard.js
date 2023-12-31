import react from "react";
import data from "../data/FoodItems.json";
import FoodIndex from "../Pages/FoodIndex";
import "../CSS/FoodCard.css";

const foodItems = data

const CreateFoodItemInfoBox = (object) => {
    return (
        <>
            <div className="foodItemContainer">
            <div>
                <p className="foodItemName">{object.name}</p>
                <p>Nutritional values for {object.name} per 100g:</p>

                <div className="foodStatContainer">
                    <ul>
                        <li>Kcal: {object.kcalper100g}</li>
                        <li>Fat: {object.fatper100g}</li>
                        <li>Carbs: {object.carbsper100g}</li>
                    </ul>
                    <ul>
                        <li>Sodium: {object.sodiumper100g}</li>
                        <li>Protein: {object.proteinper100g}</li>
                    </ul>
                    </div>
                </div>
                <img className="foodItemImage" alt={"Placeholder for image of " + object.name}></img>
            </div>
        </>
    )
}


function FoodCard(e) {

    if (e === "default") {
        return (
            <>
            <p>w</p>
                {foodItems.map((object) => (CreateFoodItemInfoBox(object)))}
            </>
        )
    } else {
        return (
            <>
            <p>a</p>
                {data.map((object) => (CreateFoodItemInfoBox(object)))}
            </>
        )
    }
}
export default FoodCard
