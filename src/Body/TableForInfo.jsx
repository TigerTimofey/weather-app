// import React from "react";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function TableForInfo() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Shortly">
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
        </Table>
      </Tab>
      <Tab eventKey="profile" title="Detail">
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
      </Tab>
    </Tabs>
  );
}

export default TableForInfo;
