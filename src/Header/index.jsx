import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import moment from "moment";
import { FORECAST_DATE_FORMAT } from "../constants";

function Header({ list }) {
  return (
    <Container className="navbar-text d-flex justify-content-center align-items-center container-center">
      <Navbar bg="white" variant="light" expand="sm">
        <Container>
          <Link to="/weather-app/" className="navbar-brand text-white">
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

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" mt-2 ">
              <Link className="nav-link header-style" to="/weather-app/contact">
                Contact
              </Link>
              <NavDropdown
                title="Forecast plan"
                id="basic-nav-dropdown"
                className="header-style"
              >
                {list?.map(({ dt }, index) => (
                  <Link
                    to={`/weather-app/forecast/${index}`}
                    className="dropdown-item "
                    key={index}
                    // data-rr-ui-dropdown-item
                  >
                    {" "}
                    {moment.unix(dt).format(FORECAST_DATE_FORMAT)}
                  </Link>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
export default Header;
