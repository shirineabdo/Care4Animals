import { useState, useEffect } from "react";

function Lost() {
const [lostPets, setLostPets] = useState([]);

useEffect(() => {
fetch("https://localhost:7010/api/Lost")
.then((response) => {
if (!response.ok) {
throw new Error("Failed to fetch lost pets");
}

    return response.json();
  })
  .then((data) => {
    console.log("All lost pets:", data);
    setLostPets(data);
  })
  .catch((error) => {
    console.error("Error fetching lost pets:", error);
  });

}, []);

return (
<>
<div className="lostfound-header">

    <h1>Lost Pets</h1>

    <p>
      Browse lost pets in your area and help reunite them with their families.
    </p>


    {/* SEARCH AND FILTER */}

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


    {/* ALL LOST PETS */}

    <div className="pet-grid">

      {lostPets.length === 0 ? (

        <p>No lost pets found.</p>

      ) : (

        lostPets.map((pet) => (

          <article
            className="pet-card"
            key={pet.lostReport_ID}
          >

            <div className="pet-image-placeholder">
              <i className="bi bi-heart"></i>
            </div>


            <div className="pet-card-body">

              <h3>
                Pet #{pet.pet_ID}
              </h3>


              <p>
                Lost Pet
              </p>


              <small>
                <i className="bi bi-geo-alt-fill"></i>

                {" "}

                {pet.lostReport_LastLocation}
              </small>


              <small>
                <i className="bi bi-clock"></i>

                {" "}

                {new Date(
                  pet.lostReport_LostDate
                ).toLocaleDateString()}
              </small>

            </div>

          </article>

        ))

      )}

    </div>


    {/* PAGINATION */}

    <div className="pagination">

      <button className="page-arrow">
        <i className="bi bi-chevron-left"></i>
      </button>


      <button className="page-number active">
        1
      </button>


      <button className="page-number">
        2
      </button>


      <button className="page-number">
        3
      </button>


      <button className="page-arrow">
        <i className="bi bi-chevron-right"></i>
      </button>

    </div>

  </div>
</>

);
}

export default Lost;