import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

function Header({ list, setForecastDateTimeSelect }) {
  const { listIndex } = useParams();
  useEffect(() => {
    setForecastDateTimeSelect(list?.[parseInt(listIndex) || 0]);
  }, [list, setForecastDateTimeSelect, listIndex]);

  const handleChange = (event) => {
    const index = event.target.value;
    setForecastDateTimeSelect(list[index]);
  };
  return (
    <Navbar bg="white" variant="light" expand="sm">
      <Container>
        <Link to="/" className="navbar-brand text-white">
          <h5>
            <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top mt-1"
              alt="React Bootstrap logo"
            />{" "}
            <Badge bg="success mt-2">Weather App</Badge>
          </h5>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link header-style" to="/contact">
              Contact
            </Link>

            <Nav.Link className="header-style" href="#link">
              Link
            </Nav.Link>
            <NavDropdown
              title="Forecast plan"
              id="basic-nav-dropdown"
              className="header-style"
            >
              <NavDropdown.Item
                className="header-style"
                href="#action/3.1"
              ></NavDropdown.Item>
              <>
                <Form.Group className="m-2 pb-3  text-center">
                  <Form.Label>Forecast for 5 days</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={handleChange}
                    value={listIndex}
                  >
                    {list?.map(({ dt }, index) => (
                      <option value={index} active={listIndex} key={index}>
                        {moment.unix(dt).format("DD.MM HH:mm")}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
