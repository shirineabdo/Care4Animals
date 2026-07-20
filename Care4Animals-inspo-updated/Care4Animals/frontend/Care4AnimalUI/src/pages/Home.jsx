import { useNavigate } from "react-router-dom";
import "./Home.css";


const lostPets = [
  { name: "Luna", breed: "Golden Retriever", location: "Beirut, Ashrafieh", time: "2 hours ago" },
  { name: "Milo", breed: "Siberian Husky", location: "Jounieh, Keserwan", time: "1 day ago" },
  { name: "Simba", breed: "Orange Tabby Cat", location: "Tripoli", time: "2 days ago" },
  { name: "Charlie", breed: "Beagle", location: "Baabda", time: "3 days ago" },
];

const foundPets = [
  { name: "Bella", breed: "Mixed Breed", location: "Jdeideh", time: "5 hours ago" },
  { name: "Tom", breed: "Gray Cat", location: "Dour El Choueir", time: "1 day ago" },
  { name: "Rocky", breed: "German Shepherd", location: "Aley", time: "2 days ago" },
  { name: "Lucy", breed: "White Cat", location: "Saida", time: "3 days ago" },
];

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
  const scrollToPets = () => document.getElementById("lost-found")?.scrollIntoView({ behavior: "smooth" });

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
          <div className="recent-header"><h2>Recently Lost Pets</h2><button onClick={() => navigate("/lost")}>View all</button></div>
          <div className="pet-grid">{lostPets.map((pet) => <PetCard key={pet.name} pet={pet} />)}</div>
          <div className="recent-header found-heading"><h2>Recently Found Pets</h2><button onClick={() => navigate("/found")}>View all</button></div>
          <div className="pet-grid">{foundPets.map((pet) => <PetCard key={pet.name} pet={pet} />)}</div>
        </div>
      </section>
    </>
  );
}

export default Home;
