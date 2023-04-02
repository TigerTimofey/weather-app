import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";

import GetDataType from "./GetDataType";

function SideBar({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Weather</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SearchForm />
        <GetDataType />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default SideBar;
