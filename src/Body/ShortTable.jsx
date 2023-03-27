import Table from "react-bootstrap/Table";

function ShortTable() {
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
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default ShortTable;
