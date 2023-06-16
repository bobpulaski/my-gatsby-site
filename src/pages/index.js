import * as React from "react";

import Layout from "../components/layout";
import dictionary from "../i18/dictionary";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <h1>{dictionary().Titles._MainPage[process.env.GATSBY_LANG]}</h1>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
