import React, { useState } from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const GetDataType = () => {
  const [forecastWeather, setForecastWeather] = useState(null);
  const handleChange = (event) => {
    setForecastWeather(event.target.value);
  };
  const modes = ["xml", "html", "json"];
  return (
    <Form onSubmit={handleChange}>
      <FormGroup className="mb-3">
        <Form.Label> {"Choose Data Type"}</Form.Label>

        <Form.Select onChange={handleChange}>
          {modes.map((mode) => (
            <option value={mode} key={mode}>
              {mode}
            </option>
          ))}
        </Form.Select>
        <div className="d-grid">
          <Button
            onClick={() => {
              window.open(
                `https://api.openweathermap.org/data/2.5/weather?lat=59.44&lon=24.75&mode=${dataTypeValue}&appid=75dabd7495f2bcb270e12f2e536e0683`
              );
            }}
            variant="primary"
            type="submit"
          >
            {" "}
            Export{" "}
          </Button>{" "}
        </div>
      </FormGroup>
    </Form>
  );
};

export default GetDataType;
