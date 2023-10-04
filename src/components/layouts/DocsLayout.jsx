import React from "react";
// import { Helmet } from "react-helmet";

import NavBar from "../NavBar";
import Footer from "../Footer";

import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import dictionary from "../../i18/dictionary";
import AsideMenu from "../AsideMenu";

export default function DocsLayout({ children }) {
  return (
    <>
      <NavBar />
      <Container>
        <h2>{dictionary().Titles._DocsPage[process.env.GATSBY_LANG]}</h2>
        <Row>
          <AsideMenu />
          {children}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
