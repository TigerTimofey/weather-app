import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

function Header() {
  return (
    <Container className="navbar-text d-flex justify-content-center align-items-center container-center">
      <Navbar bg="white" variant="light" expand="sm">
        <Link to="/weather-app/" className="navbar-brand text-white ">
          <h1>
            <Badge bg="success mt-2 ">
              WEATHER APP{" "}
              <img
                src="/weather-app/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top mt-0"
                alt="React Bootstrap logo"
              />
            </Badge>
          </h1>
        </Link>

        <Link to="/weather-app/" className="navbar-brand text-white  ">
          <Badge bg="success" className="mt-2 d-flex justify-content-center">
            <Link
              className="nav-link navbar-brand text-white p-0 m-0"
              to="/weather-app/contact"
            >
              CONTACT
            </Link>
          </Badge>
        </Link>
      </Navbar>
    </Container>
  );
}
export default Header;
