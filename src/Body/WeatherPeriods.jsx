import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";
import ForecastData from "./ForecastData";

function WeatherPeriods({ currentWeather, forecastWeather }) {
  return (
    <Tabs defaultActiveKey="current" className="mb-3" justify>
      <Tab eventKey="current" title="Current Weather">
        <Data {...currentWeather} />
      </Tab>
      <Tab eventKey="forecast" title="Forecast">
        <ForecastData {...forecastWeather} />
        <Data {...forecastWeather} />
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
