import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ErrorMadal({ show, handleCloseModal }) {
  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ErrorMadal;
