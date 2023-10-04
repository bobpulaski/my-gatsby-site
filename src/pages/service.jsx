import React from "react";
import Layout from "../components/layouts/Layout";
import dictionary from "../i18/dictionary";

function service() {
  return (
    <Layout>
      <h1>{dictionary().Titles._ServicePage[process.env.GATSBY_LANG]}</h1>
    </Layout>
  );
}

export default service;

export const Head = () => (
  <title>{dictionary().Titles._ServicePage[process.env.GATSBY_LANG]}</title>
);
