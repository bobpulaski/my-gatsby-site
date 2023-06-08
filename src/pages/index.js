import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";

import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <h1>IndexPage</h1>
      <Link as="style" to="/about">
        about
      </Link>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
