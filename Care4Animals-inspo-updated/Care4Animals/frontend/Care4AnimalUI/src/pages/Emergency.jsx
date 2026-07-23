import emergencypet from "../assets/pet-removebg-preview.png";

const emergencyCases = [
  {
    title: "Injured Dog",
    location: "Baabda, Keserwan",
    description:
      "Injured dog on the road near the highway. Needs immediate medical attention.",
    time: "2 hours ago",
    image: "/images/injured-dog.jpg",
  },
  {
    title: "Abandoned Kitten",
    location: "Tripoli",
    description:
      "Small kitten abandoned in a box. Looks weak and needs help.",
    time: "4 hours ago",
    image: "/images/abandoned-kitten.jpg",
  },
  {
    title: "Hit by Car",
    location: "Baabda",
    description:
      "Cat hit by a car. Unable to move. Please help!",
    time: "1 day ago",
    image: "/images/hit-by-car.jpg",
  },

   {
    title: "Injured Dog",
    location: "Baabda, Keserwan",
    description:
      "Injured dog on the road near the highway. Needs immediate medical attention.",
    time: "2 hours ago",
    image: "/images/injured-dog.jpg",
  },
  {
    title: "Abandoned Kitten",
    location: "Tripoli",
    description:
      "Small kitten abandoned in a box. Looks weak and needs help.",
    time: "4 hours ago",
    image: "/images/abandoned-kitten.jpg",
  },
  {
    title: "Hit by Car",
    location: "Baabda",
    description:
      "Cat hit by a car. Unable to move. Please help!",
    time: "1 day ago",
    image: "/images/hit-by-car.jpg",
  },
];



function Emergency(){
    return(
        <>
         <div className="lostfound-header">
            <h1>Emerency Rescue</h1>
            <p>Report an emergency case that needs immediate help.</p>
        
          {/* Emergency Banner */}
      <div className="emergency-banner">

        <div className="emergency-banner-content">

          <h3>
            If you see an injured or abused animal,
            <br />
            don't wait. Report it now.
          </h3>

          <button className="emergency-report-btn">
            Report Emergency
          </button>

        </div>

        <div className="emergency-animal">
          <img src={emergencypet} alt="pet"/>
        </div>

      </div>

            {/* Recent Emergency Cases */}
      <div className="recent-emergency">

        <h2>Recent Emergency Cases</h2>

        <div className="emergency-cases">

          {emergencyCases.map((emergency) => (

            <article
              className="emergency-case-card"
              key={emergency.title}
            >

              <div className="emergency-case-image">

                <img
                  src={emergency.image}
                  alt={emergency.title}
                />

              </div>


              <div className="emergency-case-info">

                <h3>
                  {emergency.title}
                </h3>

                <small>
                  <i className="bi bi-geo-alt-fill"></i>
                  {emergency.location}
                </small>

                <p>
                  {emergency.description}
                </p>

              </div>


              <div className="emergency-case-right">

                <span className="urgent-badge">
                  Urgent
                </span>

                <small className="emergency-time">
                  {emergency.time}
                </small>

              </div>

            </article>

          ))}

        </div>
     

      </div>
          {/* View All Button */}
      <div className="emergency-view-all">

        <button className="view-emergency-btn">
          View All Emergency Cases
        </button>

      </div>

        </div>
        
        </>
    );

}

export default Emergency;