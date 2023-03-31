import Table from "react-bootstrap/Table";

function DetailTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Current</th>
          <th>Forecast</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr></tr>
      </tbody>

      <tbody>
        <tr>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr></tr>
      </tbody>

      <tbody>
        <tr>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr></tr>
      </tbody>
    </Table>
  );
}
export default DetailTable;
