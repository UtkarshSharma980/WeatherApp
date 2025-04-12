const router = require("express").Router();
const axios = require("axios");
const API_Key = process.env.API_KEY;
// console.log(API_Key);
const getWeather = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
  try {
    const weatherData = await axios.get(url);
    if (!weatherData.data) {
      throw new Error("No weather data found");
    }
    // console.log(weatherData.data);
    return {
      city: weatherData.data.name,
      temperature: weatherData.data.main.temp,
      condition: weatherData.data.weather[0].main,
      icon: weatherData.data.weather[0].icon,
      humidity: weatherData.data.main.humidity,
      wind: weatherData.data.wind.speed,
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("City invalid");
    } else {
      console.error("Error fetching weather:", error.message);
      throw new Error("Failed");
    }
  }
};
router.get("/", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send("City is required");
  }

  try {
    const weatherData = await getWeather(city);
    res.json(weatherData);
  } catch (error) {
    if (error.message === "City invalid") {
      res.status(404).json({ error: "City not found" });
    } else {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
});

module.exports = router;
