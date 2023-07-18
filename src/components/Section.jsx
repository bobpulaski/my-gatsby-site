import React from "react";

import Container from "react-bootstrap/Container";

function Section() {
  return (
    <>
      <Container className="mt-6">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h6 className="text-danger">Section</h6>
          <h3 className="display-5 fw-bold">
            <strong>Desktop development made easy</strong>
          </h3>
          <p>
            Electron takes care of the hard parts so you can focus on the core
            of your application.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Section;
