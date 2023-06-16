import { Link } from "gatsby";
import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import dictionary from "../i18/dictionary";

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sequoia Parser
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/docs">
              {dictionary().NavBar._Docs[process.env.GATSBY_LANG]}
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              {dictionary().NavBar._About[process.env.GATSBY_LANG]}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
