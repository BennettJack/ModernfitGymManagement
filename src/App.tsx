import React from 'react';
import './App.css';
import Footer from './Components/Footer.js';
import Navbar from './Components/Navbar.tsx';
import header from './Components/header';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen">
              <Navbar />
              <div className="flex-grow"></div>
              <Footer />
          </div>
    </div>
  );
}

export default App;
