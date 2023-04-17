import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Data from "./Data";
import ForecastSelect from "./ForecastSelect";

function WeatherPeriods({
  currentWeather,
  forecastWeather,
  handleForecastOrCurrent,
  keyFromIndex,
}) {
  console.log("props", handleForecastOrCurrent);
  console.log(keyFromIndex);
  return (
    <Tabs
      defaultActiveKey="current"
      className="mb-3"
      justify
      onSelect={handleForecastOrCurrent}
    >
      <Tab eventKey="current" title="Current Weather">
        <Data {...currentWeather} />
      </Tab>
      <Tab eventKey="forecast" title="Forecast">
        <ForecastSelect {...forecastWeather} />
      </Tab>
    </Tabs>
  );
}

export default WeatherPeriods;
