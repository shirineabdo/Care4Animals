import './App.css';

function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Every animal. Every story. Every chance matters.</span>
          <h1></h1>
          <p>
           A platform connecting pet owners, rescuers, and animal lovers to reunite lost pets and support animals in need.
          </p>
        </div>
      </section>

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
                  className="bi bi-basket2"
                  style={{ color: "var(--cat-food-icon)" }}
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
                  className="bi bi-bag-heart"
                  style={{ color: "var(--cat-clothes-icon)" }}
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
                  className="bi bi-heart-pulse"
                  style={{ color: "var(--cat-medical-icon)" }}
                ></i>
              </div>

              <h3>Animal Support</h3>

              <p>
                Help abandoned, injured, or rescued animals by connecting them with volunteers and shelters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;