import React from "react";

import { Link } from "gatsby";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { MdOutlineLanguage } from "react-icons/md";

import dictionary from "../i18/dictionary";

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={"/logo.png"}
            className="d-inline-block align-top me-2"
            alt="Logo"
          />
          Pageover
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/docs/overview">
              {dictionary().NavBar._Docs[process.env.GATSBY_LANG]}
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/service">
              {dictionary().NavBar._Service[process.env.GATSBY_LANG]}
            </Nav.Link> */}
          </Nav>
          {/* <Nav>
            <NavDropdown
              title={
                <span>
                  <MdOutlineLanguage className="mx-1" />
                  Русский
                </span>
              }
              id="navbarScrollingDropdown"
              className="me-2"
            >
              <NavDropdown.Item href="#action3">English</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
