import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from "@mui/icons-material/MyLocation";

function App() {
  const handleLocationClick = () => {
    console.log("Fetching current location...");
    // Add geolocation logic here if needed
  };

  return (
    <div className="container">
      <div className="search-section">
        <form action="#" className="search-form">
          <div className="input-wrapper">
            <span className="material-symbols-outlined search-icon">search</span>
            <input
              type="search"
              placeholder="Enter a City Name"
              className="search-input"
              required
            />
          </div>
          <button className="location-button" type="button" onClick={handleLocationClick}>
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </form>
      </div>

      <div className="weather-section">
        <div className="current-weather">
          <img src="./icons/clouds.svg" className="weather-icon" alt="weather" />
          <h2 className="temperature">
            20 <span>&deg; C</span>
          </h2>
          <p className="description">partly cloudy</p>
        </div>
      </div>
    </div>
  );
}

export default App;
