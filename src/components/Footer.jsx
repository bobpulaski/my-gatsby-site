import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="bg-light">
      <Container>
        <footer className="d-flex flex-column justify-content-center align-items-center">
          <p>Copyright © {new Date().getFullYear()} Pageover.</p>
        </footer>
      </Container>
    </Container>
  );
}

export default Footer;
