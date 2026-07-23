import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PetCard({ pet }) {
  return (
    <article className="pet-card">
      <div className="pet-image-placeholder"><i className="bi bi-heart"></i></div>
      <div className="pet-card-body">
        <h3>{pet.name}</h3>
        <p>{pet.breed}</p>
        <small><i className="bi bi-geo-alt-fill"></i> {pet.location}</small>
        <small><i className="bi bi-clock"></i> {pet.time}</small>
      </div>
    </article>
  );
}

function Home({ openLogin }) {
  const navigate = useNavigate();
  const [lostPets, setLostPets] = useState([]);
  const [foundPets, setFoundPets] = useState([]);

  const scrollToPets = () => document.getElementById("lost-found")?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
fetch("https://localhost:7010/api/Lost")
.then((response) => {
if (!response.ok) {
throw new Error("Failed to fetch lost pets");
}

    return response.json();
  })
  .then((data) => {
    console.log("Lost pets from backend:", data);
    setLostPets(data);
  })
  .catch((error) => {
    console.error("Error fetching lost pets:", error);
  });

}, []);

useEffect(() => {
  fetch("https://localhost:7010/api/Found")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch found pets");
      }

      return response.json();
    })
    .then((data) => {
      console.log("Found pets from backend:", data);
      setFoundPets(data);
    })
    .catch((error) => {
      console.error("Error fetching found pets:", error);
    });
}, []);

  return (
    <>
    {/*hero*/}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Every animal. Every story. Every chance matters.</span> <br/><br/>
          <h1>Together, we can give every pet a second chance.</h1>
          <p>Helping lost, abandoned, or injured animals by connecting them with people who care.</p>
          <div className="hero-actions">
            <button className="outline-btn" onClick={scrollToPets}>Browse Lost & Found Pets</button>
            <button className="green-btn" onClick={openLogin}>Report a Pet</button>
            <button className="urgency-btn" onClick={openLogin}>Report Emergency</button>
          </div>
        </div>
        
      </section>

      {/*how we help*/}
      <section className="help-section">
        <div className="container">
          <h2>How You Can Help</h2>
          <p className="section-sub">One platform, three purposes - repporting, protecting and reconnecting animals with their families.</p>

          <div className="help-grid">
            <div className="help-card">
              <i className="bi bi-search-heart-fill"></i>
              <h3>Report</h3>
              <p>Report lost or found pets in your area.</p>
              </div>

            <div className="help-card">
              <i className="bi bi-heart-fill" style={{color: "var(--heart-icon)"}}></i>
              <h3>Emergency Rescue</h3>
              <p>Help abandoned, injured, or rescued animals by connecting them with owners and shelters.</p>
              </div>

            <div className="help-card">
              <i className="bi bi-people-fill" style={{color: "var(--support-icon)"}}></i>
              <h3>Spread Love</h3>
              <p>Share posts and help reunite pets.</p>
              </div>
          </div>
        </div>
      </section>

      {/*recently lost & found*/}
      <section className="recent-section" id="lost-found">
        <div className="container">
          <div className="recent-header">
            <h2>Recently Lost Pets</h2>
            <button onClick={() => navigate("/lost")}>View all</button>
            </div>

          <div className="pet-grid"> 
           {lostPets.length === 0 ? (
  <p>No lost pets found.</p>
) : (
  lostPets.map((pet) => (
    <PetCard
      key={pet.lostReport_ID}
      pet={{
        name: `Pet #${pet.pet_ID}`,
        breed: "Lost Pet",
        location: pet.lostReport_LastLocation,
        time: new Date(
          pet.lostReport_LostDate
        ).toLocaleDateString()
      }}
    />
  ))
)}
             </div>

          <div className="recent-header found-heading">
            <h2>Recently Found Pets</h2>
            <button onClick={() => navigate("/found")}>View all</button>
            </div>

          <div className="pet-grid">

  {foundPets.length === 0 ? (

    <p>No found pets found.</p>

  ) : (

    foundPets.map((pet) => (

      <PetCard
        key={pet.foundReport_ID}
        pet={{
          name: `Pet #${pet.pet_ID}`,
          breed: "Found Pet",
          location: pet.foundReport_Location,
          time: new Date(
            pet.foundReport_Date
          ).toLocaleDateString()
        }}
      />

    ))

  )}

</div>
          
        </div>
      </section>
    </>
  );
}

export default Home;
