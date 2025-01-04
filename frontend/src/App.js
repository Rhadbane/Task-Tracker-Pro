import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;