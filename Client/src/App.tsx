import React from 'react';
import './CSS/App.css';
import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import FoodIndex from './Pages/FoodIndex.js';
import Home from './Pages/Home.tsx';
import Account from './Pages/Account.js';
import Login from './Pages/Login.js';
import Terms from './Pages/Terms.js';
import Contact from './Pages/Contact.js';
import Signup from './Pages/Signup.js';
import Diary from './Pages/Diary.js';

function App() {
    return (
      <div id="appWrapper">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home /> } />
            <Route path="/FoodIndex" element={<FoodIndex />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Terms" element={<Terms />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Diary" element={<Diary />}></Route>
          </Routes>
        </BrowserRouter>          
      </div>
    );
}

export default App;
