import React from 'react';
import {  BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';

import Analytics from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import AddUsers from './pages/AddUers';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
      <Router>
      <Navbar/>
      <Routes>
         <Route exact path="/" element={ <Dashboard/>} />
         
         <Route path="/analytics" element={<Analytics/>} />
         <Route path="/addUsers" element={<AddUsers/>} />
        </Routes>
    </Router>
      </header>
    </div>
  );
}

export default App;
