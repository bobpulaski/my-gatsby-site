import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Block2Parts(props) {
  // Проверяем значение props.order, чтобы определить порядок колонок
  const isTextRight = props.order === "text-right";
  const textColumnClass = isTextRight ? "order-md-2" : "order-md-1";
  const imageColumnClass = isTextRight ? "order-md-1" : "order-md-2";

  return (
    <Container fluid style={{ marginBottom: "6rem" }}>
      <Container>
        <div className="row gx-5">
          <div className={`col-md-6 ${textColumnClass}`}>
            <h3 className="fw-bolder mb-4">{props.header}</h3>
            <p>{props.text}</p>
          </div>
          <div className={`col-md-6 ${imageColumnClass}`}>
            <div className="d-flex justify-content-center">
              <Image src={props.image} rounded />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Block2Parts;
