import React from "react";
import { TextField, Button, Box } from "@mui/material";

const Search = ({ city, setCity, fetchWeather }) => {
  return (
    <Box display="flex" justifyContent="center" my={3}>
      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mr: 2, backgroundColor: "#ffffff", borderRadius: "5px" }}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={fetchWeather}
        className="search-button"
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
