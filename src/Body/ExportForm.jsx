import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { linkGenerator } from "../services/apiService";

function ExportForm() {
  const modes = ["xml", "html", "json"];
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.mode.value);
    const link = await linkGenerator();
    window.open(link);
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
