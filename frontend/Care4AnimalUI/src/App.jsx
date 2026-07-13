import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';

import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import heroImage from "./assets/care4animals.png";


function App() {
  return (
    <>
    <Header />
    {/*hero*/}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Every animal. Every story. Every chance matters.</span> <br/><br/>
          <h1>Together, we can give every pet a second chance.</h1>
          <p> A platform connecting pet owners, rescuers, and animal lovers to reunite lost pets and support animals in need. </p>
          <br/>
          <div className="hero-actions">
         <button className="green-btn">  Browse Lost & Found Pets </button>
         <button className="outline-btn">  Report a Pet </button>
         <button className="outline-btn">  Report Emergency Resuce </button>
         </div>
        </div> 
        <div className='hero-overlay'></div>
      </section>

      {/*how we help*/}
      <section className="categories">
        <div className="container">
          <h2>How We Help</h2>

          <p className="section-sub">
            One platform, three purposes - repporting, protecting and reconnecting animals with their families.
          </p>

          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">
                <i
                  className="bi bi-search"
                  style={{ color: "var(--search-icon)" }}
                ></i>
              </div>

              <h3>Lost Pets</h3>

              <p>
                Report missing pets with details, pictures, location, and contact information to increase the chance of finding them.
              </p>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <i
                  className="bi bi-heart"
                  style={{ color: "var(--heart-icon)" }}
                ></i>
              </div>

              <h3>Found Pets</h3>

              <p>
                Share information about animals you found and help owners safely recover their pets.
              </p>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <i
                  className="bi bi-person-heart"
                  style={{ color: "var(--support-icon)" }}
                ></i>
              </div>

              <h3>Emergency Rescue</h3>

              <p>
                Help abandoned, injured, or rescued animals by connecting them with volunteers and shelters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*how it works*/}
      <section className='how-it-works'>
        <div className='container'>
          <h2>How It Works</h2>
          <p className='section-sub'>Simple, transparent, and fast.</p>
          <div className='steps-grid'>
            <div className='step'>
              <div className='step-number'>01</div>
              <h3>Create a Report</h3>
              <p>Owners or rescuers report lost/found or emergency case rescue pet information including photos, location, 
                breed and description.</p>
            </div>
            <div className='step'>
              <div className='step-number'>02</div>
              <h3>...</h3>
              <p>....</p>
            </div>
            <div className='step'>
              <div className='step-number'>03</div>
              <h3>Community Helps</h3>
              <p>Users browse reports, share information and contact owners when they recognize the pet.</p>
            </div>
            <div className='step'>
              <div className='step-number'>04</div>
              <h3>Pet ...</h3>
              <p>......</p>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />

      
    </>
  );
}

export default App;