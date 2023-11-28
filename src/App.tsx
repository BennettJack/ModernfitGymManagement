import React from 'react';
import { AuthProvider } from '././Components/UserSession';
import Login from './Pages/Login.js';
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

function App() {
    return (
      <div>
          <BrowserRouter>
                <Routes>
                  <Route index element={<Home /> } />
                  <Route path="/FoodIndex" element={<FoodIndex />} />
                  <Route path="/Account" element={<Account />}>
                  </Route>
              </Routes>
          </BrowserRouter>          
        </div>
  );
}

export default App;
