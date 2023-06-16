import React from "react";
import Layout from "../components/layout";
import dictionary from "../i18/dictionary";

function about() {
  return (
    <Layout>
      <h1>{dictionary().Titles._AboutPage[process.env.GATSBY_LANG]}</h1>
    </Layout>
  );
}

export default about;

export const Head = () => (
  <title>{dictionary().Titles._AboutPage[process.env.GATSBY_LANG]}</title>
);
