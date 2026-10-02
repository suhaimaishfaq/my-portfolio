import { FaTint, FaWind, FaTemperatureHigh, FaMapMarkerAlt } from "react-icons/fa";
import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiRain,
  WiSprinkle,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

// Choose an icon based on the main weather condition from the API
function getWeatherIcon(condition, iconCode) {
  const isNight = iconCode.endsWith("n"); // API icon codes end with "d" (day) or "n" (night)

  switch (condition) {
    case "Clear":
      return isNight ? <WiNightClear /> : <WiDaySunny />;
    case "Clouds":
      return <WiCloudy />;
    case "Rain":
      return <WiRain />;
    case "Drizzle":
      return <WiSprinkle />;
    case "Thunderstorm":
      return <WiThunderstorm />;
    case "Snow":
      return <WiSnow />;
    default:
      return <WiFog />; // Mist, Haze, Smoke, Dust, Fog, etc.
  }
}

// Displays the weather data received from the Weather page through props
function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <div className="weather-main">
        <div className="weather-icon">{getWeatherIcon(weather.condition, weather.iconCode)}</div>
        <div>
          <h2 className="weather-city">
            <FaMapMarkerAlt /> {weather.city}, {weather.country}
          </h2>
          <p className="weather-temp">{weather.temperature}°C</p>
          <p className="weather-desc">{weather.description}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="weather-detail">
          <FaTemperatureHigh />
          <span>Feels like</span>
          <strong>{weather.feelsLike}°C</strong>
        </div>
        <div className="weather-detail">
          <FaTint />
          <span>Humidity</span>
          <strong>{weather.humidity}%</strong>
        </div>
        <div className="weather-detail">
          <FaWind />
          <span>Wind speed</span>
          <strong>{weather.windSpeed} km/h</strong>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
