import React from "react";
import Layout from "../components/layout";
import { Button } from "react-bootstrap";
import dictionary from "../i18/dictionary";

export default function docs() {
  return (
    <Layout>
      <h1>{dictionary().Titles._DocsPage[process.env.GATSBY_LANG]}</h1>
      <Button>Hello</Button>
    </Layout>
  );
}

export const Head = () => (
  <title>{dictionary().Titles._DocsPage[process.env.GATSBY_LANG]}</title>
);
