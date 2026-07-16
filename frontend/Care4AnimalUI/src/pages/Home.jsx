import { useNavigate } from "react-router-dom";

function Home({openLogin}) {
  const navigate = useNavigate();

    return (
       <> 
       {/*hero*/}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Every animal. Every story. Every chance matters.</span> <br/><br/>
          <h1>Together, we can give every pet a second chance.</h1>
          <p> Helping lost, abandoned or injured animals by connecting them with people who care. </p>
          <br/>
          <div className="hero-actions">

          <button className="outline-btn" onClick={()=>navigate("/pets")}> Browse Lost & Found Pets </button>
         <button className="green-btn" onClick={openLogin}> Report a Pet </button>
         
         <button className="urgency-btn" onClick={openLogin}> Report Emergency Resuce </button>
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

              <h3>Report Pets</h3>

              <p>
                Report lost or found pets in your area.
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

            <div className="category-card">
              <div className="category-icon">
                <i
                  className="bi bi-people-fill"
                  style={{ color: "var(--heart-icon)" }}
                ></i>
              </div>

              <h3>Spread Love</h3>

              <p>
                Share posts and help reunite pets.
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
</>
    );
}

export default Home;