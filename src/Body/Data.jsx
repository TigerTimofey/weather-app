import Table from "react-bootstrap/Table";

function Data(props) {
  console.log(props);
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>City</td>
          <td>{props.city?.name || props.name}</td>
        </tr>
        <tr>
          <td>Temp</td>
          <td>{props.main?.temp}</td>
        </tr>
        <tr>
          <td>Feels like</td>
          <td>{props.main?.feels_like}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{props.weather?.length && props.weather[0].description}</td>
        </tr>
      </tbody>
    </Table>
  );
}
//ssss

export default Data;
