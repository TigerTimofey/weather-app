import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Data from "./Data";
import "./Body.scss";
import SideBar from "./Sidebar";

function Body() {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleShow = () => setShowSideBar(true);

  return (
    <>
      <div className="my-2">
        <Button variant="info" onClick={handleShow} className="my-2">
          Search
        </Button>
      </div>

      <Row>
        <Col md={4}>
          <Data />
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
