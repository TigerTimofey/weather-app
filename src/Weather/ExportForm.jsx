import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { gererateFetchUrl } from "../services/apiService";

function ExportForm() {
  const modes = ["xml", "html", "json"];
  const handleSubmit = async (event) => {
    event.preventDefault();

    const mode = event.target.mode.value;
    const url = gererateFetchUrl({
      mode,
    });
    console.log("url", url);
    window.open(url);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Mode</Form.Label>
        <Form.Select name="mode">
          {modes.map((mode) => (
            <option value={mode} key={mode}>
              {mode}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <div className="d-grid">
        <Button variant="warning" type="submit">
          {" "}
          Submit{" "}
        </Button>{" "}
      </div>
    </Form>
  );
}
export default ExportForm;
