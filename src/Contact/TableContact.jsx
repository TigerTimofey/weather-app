import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function TableContact() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="text-center">
          <th>GitHub </th>
          <th>Email</th>
          <th>LinkedIn</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center">
            <Button
              href="https://github.com/TigerTimofey"
              variant="outline-dark"
              target="_blank"
              size="sm"
            >
              @tigertimofey
            </Button>
          </td>
          <td className="text-center">
            <Button
              href="mailto:timofey.babisashvili@gmail.com"
              variant="outline-success"
              target="_blank"
              size="sm"
            >
              @emailMe
            </Button>
          </td>
          <td className="text-center">
            <Button
              href="https://www.linkedin.com/in/timofey-babisashvili/"
              variant="outline-primary"
              target="_blank"
              size="sm"
            >
              @timofey-babisashvili
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
export default TableContact;
