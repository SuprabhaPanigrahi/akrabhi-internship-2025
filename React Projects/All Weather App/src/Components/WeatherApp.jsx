import React, { useEffect, useState, useRef } from "react";
import "./WeatherApp.css";
import search_icon from "../assets/search_icon.png";
import clear_sky from "../assets/clear_sky.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import windSpeed from "../assets/wind.png";
import snowy from "../assets/snowy.png"; 

export const WeatherApp = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null); 

  const allIcons = {
    "01d": clear_sky,
    "01n": clear_sky,
    "02d": cloud,
    "02n": cloud,
    "03d": drizzle,
    "03n": drizzle,
    "04d": rain,
    "04n": rain,
    "09d": rain, 
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snowy, 
    "13n": snowy  
  };

  const search = async (city) => {
    if(city === ""){
      alert("city not found");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }
      const icon = allIcons[data.weather[0].icon] || clear_sky;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      });
    } catch (error) {
        setWeatherData(false);
        console.error("error in fetching weather data");
    }
  };
  useEffect(() => {
    search("London");
  }, []);

  return (
    <>
      <div className="weather-container">
        <div className="search">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter your city here..."
            ref={inputRef}
          />
          <img 
            src={search_icon} 
            alt="search-icon" 
            onClick={() => search(inputRef.current.value)}
          />
        </div>
        {weatherData && (
          <>
            <img src={weatherData.icon} alt="weather-icon" className="weather-icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity} alt="humidity" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={windSpeed} alt="wind" /> {/* Fixed from windSpeed to wind */}
                <div>
                  <p>{weatherData.windSpeed} km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};








