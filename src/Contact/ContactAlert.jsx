import Alert from "react-bootstrap/Alert";
import ImageContact from "./ImageContact";

import Ratio from "react-bootstrap/Ratio";
import TableContact from "./TableContact";

function ContactAlert() {
  return (
    <>
      <Ratio aspectRatio={1 / 3.5}>
        <div>
          {" "}
          <ImageContact />
        </div>
      </Ratio>
      <Ratio aspectRatio={1 / 2}>
        <div>
          {" "}
          <Alert variant="success">
            <Alert.Heading className="text-center">Summary</Alert.Heading>
            <p>
              A self-motivated and dedicated individual with a passion for web
              development and a strong desire to continuously improve and
              enhance my skills. I have experience in JavaScript, HTML, CSS,
              Bootstrap and React, I have a solid foundation in building
              dynamic, responsive, and interactive web applications. I am eager
              to apply my skills and knowledge to real-world projects and take
              on new challenges.
            </p>
            <hr />
            <TableContact />
          </Alert>
        </div>
      </Ratio>
    </>
  );
}

export default ContactAlert;
