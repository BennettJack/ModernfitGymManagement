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

function App() {
    return (
      <div>
          <BrowserRouter>
                <Routes>
                    <Route index element={<Home /> } />
                  <Route path="/FoodIndex" element={<FoodIndex />}>
                  </Route>
              </Routes>
          </BrowserRouter>          
        </div>
  );
}

export default App;
