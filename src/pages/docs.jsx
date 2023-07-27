import React from "react";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import dictionary from "../i18/dictionary";

export default function docs() {
  return (
    <Layout>
      <Container>
        <h1>{dictionary().Titles._DocsPage[process.env.GATSBY_LANG]}</h1>
      </Container>
    </Layout>
  );
}

export const Head = () => (
  <title>{dictionary().Titles._DocsPage[process.env.GATSBY_LANG]}</title>
);
