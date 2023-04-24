import Table from "react-bootstrap/Table";
import moment from "moment";

function Data({ main, name, weather, dt }) {
  const futureDate = moment.unix(dt);
  const currentDate = moment();
  const duration = moment.duration(futureDate.diff(currentDate));
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <th>City</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Temp</th>
          <td>{main?.temp}</td>
        </tr>
        <tr>
          <th>Feels like</th>
          <td>{main?.feels_like}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{weather?.length && weather[0].description}</td>
        </tr>
        <tr>
          <th>Valid untill</th>
          <td>{`Days: ${duration.days()} Hours: ${duration.hours()} Minutes: ${duration.minutes()}`}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Data;
