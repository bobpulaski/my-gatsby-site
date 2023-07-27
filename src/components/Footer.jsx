import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="bg-light">
      <Container>
        <footer className="d-flex flex-column justify-content-center align-items-center ">
          <p className="fw-lighter">
            Скачайте парсер <strong>Pageover</strong> и откройте для себя
            удобные возможности сбора данных уже сегодня!
          </p>
          <p className="text-secondary">
            Copyright © {new Date().getFullYear()} Pageover.
          </p>
        </footer>
      </Container>
    </Container>
  );
}

export default Footer;
