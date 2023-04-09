import Form from "react-bootstrap/Form";

function ForecastData(props) {
  const onChangeForecast = (event) => {
    event.preventDefault();
    console.log(props.list[event.target.value]);
    return props.list[event.target.value];
  };

  return (
    <Form.Group onChange={onChangeForecast}>
      <Form.Select name="forecast">
        {props.list.map((weather, index) => (
          <option value={index} key={index}>
            {weather.dt}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}
export default ForecastData;
