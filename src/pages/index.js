import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <h1>IndexPage</h1>
      <Link to="/about">about</Link>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
