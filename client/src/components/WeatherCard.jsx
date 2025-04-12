import React from "react";
import './WeatherCard.css';
function WeatherCard({ city, data }) {
  return (
    <div className="Weather-Card">
      <h2>Weather Of {data.city}</h2>
      <div className="Weather-Details">
        <p>Temperature: {data.temperature}°C</p>
        <p>Condition: {data.condition}</p>
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.wind} km/h</p>
        <img
          src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="icon"
        />
      </div>
    </div>
  );
}

export default WeatherCard;
