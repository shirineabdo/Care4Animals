import { useEffect, useState } from "react";

function Shelters(){
     const [shelters, setShelters] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7010/api/Shelter")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch shelters");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Shelters from backend:", data);
        setShelters(data);
      })
      .catch((error) => {
        console.error("Error fetching shelters:", error);
      });
  }, []);

    return(
        <>
        <div className="lostfound-header">
            <h1>Shelters</h1>
            <p>Browse different shelters</p>
       

         {/* Search */}
         <div className="lost-filters">
            <div className="search-box">
             <i className="bi bi-search"></i>
             <input
             type="text"
             placeholder="Search shelters..."
             />
             </div>
         </div>

{/* Shelter Cards */}
<div className="shelters-grid">

  {shelters.length === 0 ? (

    <p>No shelters found.</p>

  ) : (

    shelters.map((shelter) => (

      <article
        className="shelter-card"
        key={shelter.shelter_ID}
      >

        {/* Image */}
        <div className="shelter-image">

          {shelter.shelter_ImageUpload ? (

            <img
              src={shelter.shelter_ImageUpload}
              alt={shelter.shelter_Name}
            />

          ) : (

            <i className="bi bi-house-heart"></i>

          )}

        </div>


        {/* Information */}
        <div className="shelter-info">

          <h3>
            {shelter.shelter_Name}
          </h3>


          <p>
            <i className="bi bi-geo-alt-fill"></i>

            {" "}

            {shelter.shelter_Address}
          </p>


          <p>
            <i className="bi bi-telephone-fill"></i>

            {" "}

            {shelter.shelter_Phone}
          </p>


          <button className="view-details-btn">
            View Details
          </button>

        </div>

      </article>

    ))

  )}

</div>

      <div className="emergency-view-all">

        <button className="view-emergency-btn">
          View All Shelters
        </button>

      </div>
      </div>
        </>
    );

}

export default Shelters;