import "./Lost.css";

const lostPets = [
  { name: "Luna", breed: "Golden Retriever", location: "Beirut, Ashrafieh", time: "2 hours ago" },
  { name: "Milo", breed: "Siberian Husky", location: "Jounieh, Keserwan", time: "1 day ago" },
  { name: "Simba", breed: "Orange Tabby Cat", location: "Tripoli", time: "2 days ago" },
  { name: "Charlie", breed: "Beagle", location: "Baabda", time: "3 days ago" },
];



function Lost() {
  return (
    <>
      <div className="lost-header">
         <h1>Lost Pets</h1>
      <p>
        Browse lost pets in your area and help reuinte them with their families.
      </p>

      {/*search and filter*/}
      <div className="lost-filters">

        <div className="search-box">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search by name, breed, or location..."
          />
        </div>

        <select>
          <option>All Types</option>
          <option>Dogs</option>
          <option>Cats</option>
        </select>

        <select>
          <option>All Locations</option>
          <option>Beirut</option>
          <option>Jounieh</option>
          <option>Tripoli</option>
        </select>

        <button className="filter-btn">
          <i className="bi bi-funnel"></i>
          Filter
        </button>

      </div>

      <div className="pet-grid">
        {lostPets.map((pet) => (
          <article className="pet-card" key={pet.name}>
            <div className="pet-image-placeholder">
              <i className="bi bi-heart"></i>
            </div>

            <div className="pet-card-body">
              <h3>{pet.name}</h3>
              <p>{pet.breed}</p>

              <small>
                <i className="bi bi-geo-alt-fill"></i>
                {pet.location}
              </small>

              <small>
                <i className="bi bi-clock"></i>
                {pet.time}
              </small>
            </div>
          </article>
        ))}
        </div>

         {/* Pagination */}
      <div className="pagination">

        <button className="page-arrow">
          <i className="bi bi-chevron-left"></i>
        </button>

        <button className="page-number active">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>

        <span>...</span>

        <button className="page-number">8</button>

        <button className="page-arrow">
          <i className="bi bi-chevron-right"></i>
        </button>

      </div>

      </div>
      
    </>
  
  );
}

export default Lost;