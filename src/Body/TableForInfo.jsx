import ShortTable from "./ShortTable";
import DetailTable from "./DetailTable";

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
        <ShortTable />
      </Tab>
      <Tab eventKey="profile" title="Detail">
        <DetailTable />
      </Tab>
    </Tabs>
  );
}

export default TableForInfo;
