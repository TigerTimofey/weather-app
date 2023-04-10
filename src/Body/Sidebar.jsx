import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import { useState } from "react";

import ExportForm from "./ExportForm";

function SideBar({ show, handleClose, setCurrentweather, setForecastWeather }) {
  const [selectedData, setSelectedData] = useState(null);
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Weather</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm
          setCurrentweather={setCurrentweather}
          setForecastWeather={setForecastWeather}
          closeSidebar={handleClose}
          setSelectedData={setSelectedData}
          selectedData={selectedData}
        />
        <ExportForm />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default SideBar;
