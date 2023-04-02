import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const GetDataType = () => {
  const [dataTypeValue, setDataTypeValue] = useState(null);

  const handleChange = (event) => {
    setDataTypeValue(event.target.value);
  };

  return (
    <div className="mt-5 text-center">
      {<h4>Choose Data Type</h4>}
      <select onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="xml">xml</option>
        <option value="html">html</option>
        <option value="json">json</option>
      </select>
      {<p>You selected: {dataTypeValue}</p>}

      <div className="d-grid">
        <Button
          onClick={() => {
            window.open(
              `https://api.openweathermap.org/data/2.5/weather?lat=59.44&lon=24.75&mode=${dataTypeValue}&appid=75dabd7495f2bcb270e12f2e536e0683`,
              "_blank"
            );
          }}
          variant="primary"
          type="submit"
        >
          {" "}
          Submit{" "}
        </Button>{" "}
      </div>
    </div>
  );
};

export default GetDataType;
