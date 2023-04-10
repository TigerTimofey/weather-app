import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Data from "./Data";

function ForecastSelect({ list, city }) {
  const [weather, setWeather] = useState(null);
  console.log(list?.[0]);

  useEffect(() => {
    setWeather(list?.[0]);
  }, [list]);

  const handleChange = (event) => {
    const index = event.target.value;
    setWeather(list[index]);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Languages</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="language"
          onChange={handleChange}
        >
          {list?.map(({ dt_txt }, index) => (
            <option value={index} key={index}>
              {dt_txt}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Data {...weather} {...city} />
    </>
  );
}
export default ForecastSelect;
