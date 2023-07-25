import React from "react";
import Container from "react-bootstrap/Container";

function Section(props) {
  const { header, text } = props; // Деструктурируем props для более читаемого кода

  return (
    <Container fluid style={{ marginBottom: "6rem" }}>
      <Container className="col-6">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="display-5 fw-bold text-center">
            <strong>{header}</strong>
          </h3>
          <p className="text-center">{text}</p>
        </div>
      </Container>
    </Container>
  );
}

export default Section;
