import React from 'react';
import {  BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Users from './pages/Users';
import Analytics from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import AddUers from './component/AddUers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Navbar/>
      <Routes>
         <Route exact path="/" element={ <Dashboard/>} />
         <Route  path="/users" element={<Users/>} />
         <Route path="/analytics" element={<Analytics/>} />
         <Route path="/addUsers" element={<AddUers/>} />
        </Routes>
    </Router>
      </header>
    </div>
  );
}

export default App;
