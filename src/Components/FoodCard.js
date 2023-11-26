import react from "react";
import data from "../data/FoodItems.json";
import FoodIndex from "../Pages/FoodIndex";
import "../CSS/FoodCard.css";

const foodItems = data

const CreateFoodItemInfoBox = (object, key) => {
    return (
        <>
            <div class="foodItemContainer">
            <div>
                <p class="foodItemName">{object.name}</p>
                <p>Nutritional values for {object.name} per 100g:</p>

                <div class="foodStatContainer">
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
                <img class="foodItemImage"></img>
            </div>
        </>
    )
}


const FoodCard = () => {

    return (
        <>
            {foodItems.map((object, key) => (CreateFoodItemInfoBox(object, key)))}
        </>
    )
}
export default FoodCard
