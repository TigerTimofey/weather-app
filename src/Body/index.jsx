import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Body.scss";
import SideBar from "./Sidebar";
import WeatherPeriods from "./WeatherPeriods";
import { getCurrentWeather, getForecastWeather } from "../services/apiService";
import ErrorMadal from "../ErrorMadal";
import Map from "./Map";

function Body() {
  // console.log("api key", process.env);
  const defaultTab = "current";
  const [showSideBar, setShowSideBar] = useState(false);
  const [currentWeather, setCurrentweather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const [forecastDateTimeSelect, setForecastDateTimeSelect] = useState(null);

  const handleShow = () => setShowSideBar(true);
  // useEffect to make one time
  useEffect(() => {
    getCurrentWeather()
      .then((weather) => {
        setCurrentweather(weather);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
    getForecastWeather()
      .then((forecast) => {
        setForecastWeather(forecast);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
  }, []);
  // console.log("current", currentWeather);
  // console.log("forecast", forecastWeather);
  // console.log("forecast", forecastWeather.list[0]);

  const mapProps =
    selectedTab === defaultTab
      ? currentWeather
      : {
          main: forecastDateTimeSelect?.main || forecastWeather?.list[0].main,
          coord: forecastWeather?.city.coord,
          weather: forecastWeather?.weather || forecastWeather?.list[0].weather,
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
            defaultTab={defaultTab}
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
export default Body;
