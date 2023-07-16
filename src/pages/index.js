import * as React from "react";

import Layout from "../components/layout";
import MainBanner from "../components/MainBanner";

import dictionary from "../i18/dictionary";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <MainBanner />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
