import "./Header.css";
import logo from "../assets/logo1-removebg-preview.png" ;
import { Link } from "react-router-dom";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useState } from "react";

function Header() {
   const [loginOpen, setLoginOpen] = useState(false);
   const [registerOpen, setRegisterOpen] = useState(false);

  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
  };
  const toggleRegister = () => {
  setRegisterOpen(!registerOpen);
  };

  return ( 
    <header>
      <nav className="navbar">
      
        <div className="nav-logo">
            <img src= {logo} alt="logo" className="nav-logo-img"></img>
            <h3>AnimalRescue</h3>
  
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lost">Lost Pets</Link></li>
          <li><Link to="/found">Found Pets</Link></li>
          <li><Link to="/shelters">Shelters</Link></li>
        </ul>
      
        <button className="report-btn" onClick={toggleLogin}> Login </button>
      
     </nav> 

     <LoginModal
      isOpen={loginOpen}
      toggle={toggleLogin} 
      openRegister={() => {
      toggleLogin();
      toggleRegister();
      }}
      />

      <RegisterModal
      isOpen={registerOpen}
      toggle={toggleRegister}
      openLogin={() => {
      toggleRegister();   // Close Register
      toggleLogin();      // Open Login
      }}
/>
    </header>
  );
}

export default Header;