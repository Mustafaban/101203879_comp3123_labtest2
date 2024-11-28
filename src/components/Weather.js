import React from "react";
import { Box, Typography } from "@mui/material";

const Weather = ({ weather, error }) => {
  if (error) {
    return (
      <Box p={2}>
        <Typography variant="h6" color="error" className="error-message">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!weather) {
    return (
      <Box p={2} textAlign="center">
        <Typography variant="h6" className="empty-message">
          Please search for a city.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={2} textAlign="center" className="weather-info">
      <Typography variant="h4" className="city-name">{weather.name}</Typography>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather-icon"
        className="weather-icon"
      />
      <Typography variant="h6" className="weather-description">
        {weather.weather[0].description}
      </Typography>
      <Typography variant="h5" className="temperature">
        {weather.main.temp}°C
      </Typography>
      <Typography variant="body1" className="humidity">
        Humidity: {weather.main.humidity}%
      </Typography>
    </Box>
  );
};

export default Weather;
