import React, { useState, useEffect  } from "react";
import FoodCard from "../Components/FoodCard.js";
import Header from "../Components/header.js";
import Footer from "../Components/Footer.js";
import data from "../data/FoodItems.json";


function Search(params){
const [search, setSearch] = useState('');
//const [jsonArray, setJsonArray] = useState([]);
const [searchResults, setSearchResults] = useState([]);
const foodItems = data;

//setting search to default so that it returns all values.
 
{/*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/FoodItems');
        const data = await response.json();
        setJsonArray(data);
      } 
      catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); */}

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
const handleSearch = (e) => {
    e.preventDefault();
    
    if (search.trim() !== "") {
      const results = data.filter((object) =>
        object.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };
    return ( 
      
        <div>
        <form onSubmit={handleSearch}>
             <div className="foodItemContainerSearch">
              <div className="searchContainer">
                <label for="searchbox">Search: </label>
                <input type="textbox" name="searchbox" id="searchbox" placeholder="Search Nutrition:" value={search} onChange={handleSearchChange}/> 
                <button type="Submit" name="submit" id="submit">Search</button>
                </div>
            <div className="searchResults">
              <p> Search Reults: </p>
              <ul>
                {searchResults.map((object) => (
                  <div className="searchResultsList">
                    <p className="foodItemName">{object.name}</p>
                    <li key={object.id}>Kcal: {object.kcalper100g}</li>
                    <li key={object.id}>Fat: {object.fatper100g}</li>
                    <li key={object.id}>Sodium: {object.sodiumper100g}</li>
                    <li key={object.id}>Carbs: {object.carbsper100g}</li>
                    <li key={object.id}>Protein: {object.proteinper100g}</li>
                  </div>
                ))}
                </ul>
            </div>
            </div>
        </form>
        </div>
    );
}

const FoodIndex = () => {
    const [search, setSearch] = useState('');
    useEffect(() => {
        setSearch("default")
    }, [])

    return (
        <>
            <Header></Header>
            <Search />
            {FoodCard(search)}
            <Footer></Footer>
        </>
        )

}

export default FoodIndex