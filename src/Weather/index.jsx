import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Body.scss";
import SideBar from "./Sidebar";
import WeatherPeriods from "./WeatherPeriods";
import ErrorMadal from "../ErrorMadal";
import Map from "./Map";
import { useLocation } from "react-router-dom";

function Weather({
  currentWeather,
  forecastWeather,
  errorMessage,
  setCurrentweather,
  setForecastWeather,
  setErrorMessage,
}) {
  const location = useLocation();
  const defaultTab = "current";
  // console.log("api key", process.env);
  const [showSideBar, setShowSideBar] = useState(false);
  const [selectedTab, setSelectedTab] = useState(
    location.pathname.includes("forecast") ? "forecast" : "current"
  );
  const [forecastDateTimeSelect, setForecastDateTimeSelect] = useState(null);

  const handleShow = () => setShowSideBar(true);
  const mapProps =
    selectedTab === defaultTab
      ? currentWeather
      : {
          main: forecastDateTimeSelect?.main || forecastWeather?.list[0].main,
          coord: forecastWeather?.city.coord,
          weather: forecastDateTimeSelect?.weather,
        };
  return (
    <>
      <div className="my-2">
        <Button variant="info" onClick={handleShow} className="my-2">
          Search
        </Button>
      </div>

      <Row>
        <Col md={4}>
          <WeatherPeriods
            currentWeather={currentWeather}
            forecastWeather={forecastWeather}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            setForecastDateTimeSelect={setForecastDateTimeSelect}
            forecastDateTimeSelect={forecastDateTimeSelect}
          />
        </Col>

        <Col md={8}>
          <Map {...mapProps} />
        </Col>
      </Row>

      <SideBar
        setCurrentweather={setCurrentweather}
        setForecastWeather={setForecastWeather}
        show={showSideBar}
        handleClose={() => setShowSideBar(false)}
      />
      <ErrorMadal
        handleCloseModal={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </>
  );
}
export default Weather;
