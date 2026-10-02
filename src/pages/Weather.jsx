import { useState, useEffect } from "react";
import { FaSearch, FaCloudSun, FaExclamationTriangle, FaKey } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle.jsx";
import WeatherCard from "../components/WeatherCard.jsx";

// The API key is read from the .env file (never written directly in the code)
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const quickCities = ["Lahore", "Karachi", "Islamabad", "London"];

function Weather() {
  const [city, setCity] = useState(""); // text typed in the search box
  const [weather, setWeather] = useState(null); // weather data from the API
  const [loading, setLoading] = useState(false); // true while waiting for the API
  const [error, setError] = useState(""); // error message to show the user

  // Key is "missing" if the .env file was not created or still has the placeholder
  const isKeyMissing = !API_KEY || API_KEY === "YOUR_API_KEY_HERE";

  async function fetchWeather(cityName) {
    setLoading(true);
    setError("");

    try {
      const url = `${API_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) throw new Error("City not found. Please check the spelling.");
        if (response.status === 401) throw new Error("Invalid API key. Please check your .env file.");
        throw new Error("Something went wrong. Please try again.");
      }

      const data = await response.json();

      // Keep only the fields we need, in a simple object
      setWeather({
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // API gives m/s, we show km/h
        condition: data.weather[0].main,
        description: data.weather[0].description,
        iconCode: data.weather[0].icon,
      });

      // Remember the last searched city for the next visit
      localStorage.setItem("lastCity", data.name);
    } catch (err) {
      setWeather(null);
      // "Failed to fetch" means there was no internet / network problem
      setError(err.message === "Failed to fetch" ? "Network error. Check your internet connection." : err.message);
    } finally {
      setLoading(false);
    }
  }

  // useEffect with an empty [] runs only once, when the page first opens.
  // If the user searched a city before, load its weather automatically.
  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity && !isKeyMissing) {
      fetchWeather(lastCity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }
    fetchWeather(city.trim());
  }

  return (
    <section className="section page-section">
      <div className="container weather-container">
        <SectionTitle
          label="Weather App"
          title="Check the weather"
          subtitle="Search any city to see live weather from the OpenWeatherMap API."
        />

        {/* Show a setup message instead of the app if the key is not configured */}
        {isKeyMissing ? (
          <div className="status-box status-warning">
            <FaKey className="status-icon" />
            <h3>Weather API key not configured</h3>
            <p>
              Create a <code>.env</code> file in the project root, add{" "}
              <code>VITE_WEATHER_API_KEY=your_key</code> and restart the dev server. See the
              README for full steps.
            </p>
          </div>
        ) : (
          <>
            <form className="weather-search" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city, e.g. Lahore"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <button type="submit" className="btn btn-primary" disabled={loading}>
                <FaSearch /> <span>Search</span>
              </button>
            </form>

            <div className="quick-cities">
              {quickCities.map((name) => (
                <button
                  key={name}
                  className="chip chip-button"
                  onClick={() => {
                    setCity(name);
                    fetchWeather(name);
                  }}
                  disabled={loading}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Conditional rendering: only one of these blocks is shown at a time */}
            {loading && (
              <div className="status-box">
                <div className="spinner"></div>
                <p>Fetching weather...</p>
              </div>
            )}

            {!loading && error && (
              <div className="status-box status-error">
                <FaExclamationTriangle className="status-icon" />
                <p>{error}</p>
              </div>
            )}

            {!loading && !error && weather && <WeatherCard weather={weather} />}

            {!loading && !error && !weather && (
              <div className="status-box">
                <FaCloudSun className="status-icon" />
                <h3>No city searched yet</h3>
                <p>Type a city name above or pick one of the quick options.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Weather;
