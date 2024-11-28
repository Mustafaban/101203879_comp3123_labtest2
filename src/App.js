import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/Search";
import WeatherInfo from "./components/Weather";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16844e72420d6be36afefcacbd484518&units=metric`
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="weather-app">
      <Header />
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <WeatherInfo weather={weather} error={error} />
    </div>
  );
};

export default App;
