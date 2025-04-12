import React, { use, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  return (
    <>
      <SearchBar
        city={city}
        setCity={setCity}
        setData={setWeatherData}
        loading={loading}
        setLoading={setLoading}
        setValid={setValid}
      />
      {valid ? (
        loading ? (
          <div className="Loading">Loading...</div>
        ) : (
          weatherData && <WeatherCard data={weatherData.data} />
        )
      ) : (
        <div className="Invalid">Not a Valid City</div>
      )}
    </>
  );
}

export default App;
