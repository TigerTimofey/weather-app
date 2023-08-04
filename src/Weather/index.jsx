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
  //useLocation -  это Реакт ХООК для определения url в котором мы находимся. При изменение url useLocation если он остается на том же компоненте, то он заставляет компонент отрисоваться/ render.
  //ч
  const location = useLocation();
  //useDispatch - это Реакт ХООК и он передает функцию? которая общается с Редуксом.
  //dispatch тригирит Редукс и принимает в себя триггер состояния, то есть action.
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState(
    location.pathname.includes("forecast") ? "forecast" : "current"
  );

  const defaultTab = "current";

  const handleShow = () => dispatch(setShowSideBar(true));

  return (
    <>
      <div className="my-3 d-flex justify-content-center align-items-center container-center">
        <Button
          variant="success"
          onClick={handleShow}
          className="my-2 text-white w-100 navbar-text "
          style={{ opacity: "90%" }}
        >
          <h4>Search</h4>
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
