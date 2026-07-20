import "./Header.css";
import logo from "../assets/logo1-removebg-preview.png";
import { Link } from "react-router-dom";

function Header({ toggleLogin }) {
  return (
    <header>
      <nav className="navbar">
    <Link to="/" className="nav-logo">
    <img src={logo} alt="logo" className="nav-logo-img" />
    <h3>AnimalRescue</h3>
    </Link>

    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/lost">Lost Pets</Link></li>
      <li><Link to="/found">Found Pets</Link></li>
      <li><Link to="/shelters">Shelters</Link></li>
      <li><Link to="/emergency">Emergency</Link></li>
     
    </ul>
    
      <button className="register-btn" onClick={toggleLogin}>Login</button>
  </nav></header>

  );
  
}
export default Header;
