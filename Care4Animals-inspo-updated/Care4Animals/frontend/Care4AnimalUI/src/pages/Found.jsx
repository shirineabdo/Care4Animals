import "./Found.css";

const foundPets = [
  { name: "Bella", breed: "Mixed Breed", location: "Jdeideh", time: "5 hours ago" },
  { name: "Tom", breed: "Gray Cat", location: "Dour El Choueir", time: "1 day ago" },
  { name: "Rocky", breed: "German Shepherd", location: "Aley", time: "2 days ago" },
  { name: "Lucy", breed: "White Cat", location: "Saida", time: "3 days ago" },
];

function Found(){
    return(
        <>
        <div className="found-header">
            <h3>Found Pets</h3>
            <p>Browse found pets in your area and help reunite them find their way home.</p>
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
        {foundPets.map((pet) => (
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

export default Found;