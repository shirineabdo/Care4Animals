import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Lost from "./pages/Lost";
import Found from "./pages/Found";
import Shelters from "./pages/Shelters";


import { Routes, Route } from "react-router-dom";

import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import heroImage from "./assets/care4animals.png";


function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lost" element={<Lost />} />
      <Route path="/found" element={<Found />} />
      <Route path="/shelters" element={<Shelters />} />

    </Routes>
   
      <Footer />

    </>
  );
}

export default App;