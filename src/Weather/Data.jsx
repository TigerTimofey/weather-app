import Table from "react-bootstrap/Table";
import moment from "moment";
import { useSelector } from "react-redux";

function Data({ main, name, weather, dt, selectedTab }) {
  //useSelector общается с Реукс и слушает изменения состояние. Что слушать мы передаем через функцию, которой мы тянем состояние и возвращаем необходимое состояние.
  //useSelector рабоает так же как useState при изменении запускает render данного компонента.
  const forecastDateTimeSelect = useSelector(
    (state) => state.forecastDateTimeSelect
  );
  const data =
    selectedTab === "current" ? { main, weather, dt } : forecastDateTimeSelect;
  const futureDate = moment.unix(data?.dt);
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
          <td>{`${Math.round(data?.main?.temp)}`}</td>
        </tr>
        <tr>
          <th>Feels like</th>
          <td>{`${Math.round(data?.main?.feels_like)}`}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{data?.weather?.length && data?.weather[0].description}</td>
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
