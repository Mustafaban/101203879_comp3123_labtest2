import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Container, Paper, Box, CircularProgress, Snackbar, Fade } from "@mui/material";
import { Alert } from "@mui/lab";
import SearchBar from "./components/Search";
import WeatherInfo from "./components/Weather";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const fetchWeather = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16844e72420d6be36afefcacbd484518&units=metric`
      );
      setWeather(response.data);
      setError(null);
      setSnackbarOpen(false);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  }, [city]); 

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]); 

  return (
    <div className="app-container">
      <Container maxWidth="sm">
        <Box my={4}>
          <Paper elevation={10} className="paper">
            <Header />
            <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
            
            <Fade in={loading} timeout={500}>
              <CircularProgress className="spinner" />
            </Fade>

            {!loading && <WeatherInfo weather={weather} error={error} />}
            
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={() => setSnackbarOpen(false)}
            >
              <Alert onClose={() => setSnackbarOpen(false)} severity="error">
                {error}
              </Alert>
            </Snackbar>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default App;
