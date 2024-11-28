import React from "react";

const Weather = ({ weather, error }) => {
  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!weather) {
    return <p>Enter a city to get the weather information.</p>;
  }

  return (
    <div className="weather-info">
      <h2>{weather.name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default Weather;
