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

     <section className="recent-pets">
      <div className="container section-header">
      <h2>Recently Lost Pets</h2>
      <button className="green-btn" onClick={() => navigate("/lost")} > View All </button>
      </div>
      <div className="pet-preview-grid">
        <div className="pet-card">
          <img src="pet-image.jpg" alt="lost pet"/>
          <h3>Max</h3>
          <p>Golden Retriever</p>
          <p>📍 Beirut</p>
          </div>
          
          <div className="pet-card">
            <h3>Luna</h3>
            <p>Cat</p>
            <p>📍 Jounieh</p>
            </div>
            
        </div>
    </section>

    <section className="recent-pets">


<div className="container">

<h2>Recently Found Pets</h2>


<button
className="green-btn"
onClick={() => navigate("/found")}
>
View All 
</button>


</div>



<div className="pet-preview-grid">


<div className="pet-card">

<h3>Rocky</h3>

<p>Dog</p>

<p>📍 Tripoli</p>

</div>



<div className="pet-card">

<h3>Milo</h3>

<p>Cat</p>

<p>📍 Beirut</p>

</div>


</div>


</section>
</>
    );
}

export default Home;