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
import { setShowSideBar } from "../services/stateService";
import { useDispatch } from "react-redux";

function Weather({
  currentWeather,
  forecastWeather,
  errorMessage,
  setCurrentweather,
  setForecastWeather,
  setErrorMessage,
}) {
  const location = useLocation();
  const dispatch = useDispatch();
  const defaultTab = "current";

  const [selectedTab, setSelectedTab] = useState(
    location.pathname.includes("forecast") ? "forecast" : "current"
  );
  const handleShow = () => dispatch(setShowSideBar(true));

  return (
    <>
      <div className="my-2">
        <Button
          variant="primary"
          onClick={handleShow}
          className="my-2 text-white"
        >
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
          />
        </Col>

        <Col md={8}>
          <Map
            selectedTab={selectedTab}
            defaultTab={defaultTab}
            currentWeather={currentWeather}
            forecastWeather={forecastWeather}
          />
        </Col>
      </Row>

      <SideBar
        setCurrentweather={setCurrentweather}
        setForecastWeather={setForecastWeather}
        handleClose={() => dispatch(setShowSideBar(false))}
      />
      <ErrorMadal
        handleCloseModal={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </>
  );
}
export default Weather;
