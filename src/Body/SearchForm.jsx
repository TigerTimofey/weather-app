import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchForm() {
  const modes = ["xml", "html", "json"];
  const units = ["standard", "metric", "imperial"];
  const languages = [
    {
      label: "English",
      code: "en",
    },
    { label: "Finish", code: "fi" },
    { label: "Russian", code: "ru" },
    { lavel: "Vietnamese", code: "vi" },
  ];

  const defaultValue = {
    latitude: "59.4370",
    longitude: "24.7536",
    mode: "json",
    unit: "standard",
  };

  const handleSumbit = (event) => {
    event.preventDefault(); // stop Data move when is clicked
    const data = {
      lat: event.target.latitude.value,
      lot: event.target.longitude.value,
      mode: event.target.mode.value,
      unit: event.target.unit.value,
      lang: event.target.language.value,
    };
    console.log(data);
  };
  return (
    <Form onSubmit={handleSumbit}>
      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter latitude"
          name="latitude"
          defaultValue={defaultValue.latitude}
        />
        <Form.Text className="text-muted">Example: 59.4370</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Longitude </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter longitude"
          name="longitude"
          defaultValue={defaultValue.longitude}
        />
        <Form.Text className="text-muted">Example: 24.7536</Form.Text>
      </Form.Group>

      <Row>
        <Col>
          <FormGroup className="mb-3">
            <Form.Label>Mode</Form.Label>
            {modes.map((mode) => (
              <Form.Check
                type="radio"
                label={mode}
                key={mode}
                name="mode"
                value={mode}
                defaultChecked={mode === defaultValue.mode}
              />
            ))}
            <Form.Text className="text-muted">Data type</Form.Text>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className="mb-3">
            <Form.Label>Units</Form.Label>
            {units.map((unit) => (
              <Form.Check
                type="radio"
                label={unit}
                key={unit}
                name="unit"
                value={unit}
                defaultChecked={unit === defaultValue.unit}
              />
            ))}
            <Form.Text className="text-muted">Measurement type</Form.Text>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup className="mb-3">
        <Form.Label>Languages</Form.Label>
        <Form.Select aria-label="Default select example" name="language">
          {languages.map((lang) => (
            <option value={lang.code} key={lang.code}>
              {lang.label}
            </option>
          ))}
        </Form.Select>
      </FormGroup>

      <div className="d-grid">
        <Button variant="primary" type="submit">
          {" "}
          Submit{" "}
        </Button>{" "}
      </div>
    </Form>
  );
}
export default SearchForm;
