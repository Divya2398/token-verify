// import logo from './logo.svg';
// import './App.css';

import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/home";
import Navbar from "./components/Nav";
import Productsection from "./components/Product";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/product" element={<Productsection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
