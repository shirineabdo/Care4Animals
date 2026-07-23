import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Lost from "./pages/Lost";
import Found from "./pages/Found";
import Shelters from "./pages/Shelters";
import Emergency from "./pages/Emergency";

import { useState } from "react";

import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";


import { Routes, Route } from "react-router-dom";

import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import heroImage from "./assets/care4animals.png";



function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const toggleLogin = () => {
  setLoginOpen(!loginOpen);
  };

  const toggleRegister = () => {
  setRegisterOpen(!registerOpen);
  };

  return (
    <>
    <Header 
    toggleLogin={toggleLogin}
    />

    <Routes>
      <Route path="/" element={ <Home openLogin={toggleLogin} /> } />
      <Route path="/lost" element={<Lost />} />
      <Route path="/found" element={<Found />} />
      <Route path="/shelters" element={<Shelters />} />
      <Route path="/emergency" element={<Emergency />} />
      

    </Routes>

    <LoginModal
 isOpen={loginOpen}
 toggle={toggleLogin}
 openRegister={()=>{
    toggleLogin();
    toggleRegister();
 }}
/>


<RegisterModal
 isOpen={registerOpen}
 toggle={toggleRegister}
 openLogin={()=>{
    toggleRegister();
    toggleLogin();
 }}
/>
   
      <Footer />

    </>
  );
}

export default App;