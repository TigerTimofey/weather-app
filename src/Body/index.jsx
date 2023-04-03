import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Body.scss";
import SideBar from "./Sidebar";
import WeatherPeriods from "./WeatherPeriods";
import { getCurrentWeather } from "../services/apiService";

function Body() {
  // console.log("api key", process.env);
  const [showSideBar, setShowSideBar] = useState(false);
  const [currentWeather, setCurrentweather] = useState(null);
  const handleShow = () => setShowSideBar(true);

  // useEffect to make one time
  useEffect(() => {
    getCurrentWeather().then((weather) => {
      setCurrentweather(weather);
    });
  }, []);
  console.log(currentWeather);
  return (
    <>
      <div className="my-2">
        <Button variant="info" onClick={handleShow} className="my-2">
          Search
        </Button>
      </div>

      <Row>
        <Col md={4}>
          <WeatherPeriods />
        </Col>

        <Col md={8}>
          <div className="map-example"></div>
        </Col>
      </Row>
      <SideBar show={showSideBar} handleClose={() => setShowSideBar(false)} />
    </>
  );
}
export default Body;
