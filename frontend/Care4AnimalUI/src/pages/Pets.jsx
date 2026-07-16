import "./Pets.css";

function Pets() {

  return (
    <>

      <section className="pets-header">
        <h1>Lost & Found Pets</h1>
        <p>
          Browse lost animals and help reconnect them with their families.
        </p>
      </section>


      <section className="pets-container">

        <div className="pet-section">
          <h2>Lost Pets</h2>

          <div className="pet-grid">

            {/* Lost pet cards will go here later */}

            <div className="pet-card">
              <h3>Max</h3>
              <p>Dog - Beirut</p>
              <p>Lost on: 12/07/2026</p>
            </div>
            
            <div className="pet-card">
              <h3>Max</h3>
              <p>Dog - Beirut</p>
              <p>Lost on: 12/07/2026</p>
            </div>
            
            <div className="pet-card">
              <h3>Max</h3>
              <p>Dog - Beirut</p>
              <p>Lost on: 12/07/2026</p>
            </div>
            

          </div>

        </div>



        <div className="pet-section">

          <h2>Found Pets</h2>


          <div className="pet-grid">

            {/* Found pet cards will go here later */}

            <div className="pet-card">
              <h3>Luna</h3>
              <p>Cat - Tripoli</p>
              <p>Found on: 14/07/2026</p>
            </div>

          </div>

        </div>


      </section>

    </>
  );
}


export default Pets;