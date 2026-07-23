import { useState, useEffect } from "react";

function Found(){
  const [foundPets, setFoundPets] = useState([]);

   useEffect(() => {
    fetch("https://localhost:7010/api/Found")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch found pets");
        }

        return response.json();
      })
      .then((data) => {
        console.log("All found pets:", data);
        setFoundPets(data);
      })
      .catch((error) => {
        console.error("Error fetching found pets:", error);
      });
  }, []);

    return(
        <>
        <div className="lostfound-header">
            <h1>Found Pets</h1>
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
             {foundPets.length === 0 ? (

          <p>No found pets found.</p>

        ) : (

          foundPets.map((pet) => (

            <article
              className="pet-card"
              key={pet.foundReport_ID}
            >

              <div className="pet-image-placeholder">
                <i className="bi bi-heart"></i>
              </div>

              <div className="pet-card-body">

                <h3>
                  Pet #{pet.pet_ID}
                </h3>

                <p>
                  Found Pet
                </p>

                <small>
                  <i className="bi bi-geo-alt-fill"></i>
                  {" "}
                  {pet.foundReport_Location}
                </small>

                <small>
                  <i className="bi bi-clock"></i>
                  {" "}
                  {new Date(
                    pet.foundReport_Date
                  ).toLocaleDateString()}
                </small>

              </div>

            </article>

          ))

        )}
        </div>

        {/* Pagination */}
      <div className="pagination">

        <button className="page-arrow">
          <i className="bi bi-chevron-left"></i>
        </button>

        <button className="page-number active">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>

       

        <button className="page-arrow">
          <i className="bi bi-chevron-right"></i>
        </button>

      </div>
      
        </div>
      
        </>
    );

}

export default Found;