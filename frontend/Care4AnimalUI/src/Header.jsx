import "./Header.css";
import logo from "./assets/logo1-removebg-preview.png" ;
function Header() {
  return (
    <header>
      
        <div className="nav-logo">
            <img src= {logo} alt="logo" class="nav-logo-img"></img>
            <h2>AnimalRescue</h2>
        </div>
        
        
    </header>
  );
}

export default Header;