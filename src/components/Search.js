import React from "react";

const Search = ({ city, setCity, fetchWeather }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
      />
      <button onClick={fetchWeather}>Search</button>
    </div>
  );
};

export default Search;
