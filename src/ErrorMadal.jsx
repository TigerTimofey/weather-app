import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ErrorMadal({ handleCloseModal, message }) {
  return (
    <Modal show={!!message} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ErrorMadal;
