import { useState } from "react";
import { useLocation } from "react-router-dom";
import { setShowSideBar } from "../services/stateService";
import { useDispatch } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import SideBar from "./Sidebar";
import WeatherPeriods from "./WeatherPeriods";
import ErrorMadal from "../ErrorMadal";
import Map from "./Map";

import "./Body.scss";

function Weather({ errorMessage, setErrorMessage }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState(
    location.pathname.includes("forecast") ? "forecast" : "current"
  );

  const defaultTab = "current";

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
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        </Col>

        <Col md={8}>
          <Map selectedTab={selectedTab} defaultTab={defaultTab} />
        </Col>
      </Row>

      <SideBar handleClose={() => dispatch(setShowSideBar(false))} />
      <ErrorMadal
        handleCloseModal={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </>
  );
}
export default Weather;
