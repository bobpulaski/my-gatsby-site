import React from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import dictionary from "../i18/dictionary";

export default function MainBanner() {
  return (
    <>
      <Container fluid className="bg-info">
        <Container className="p-2">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="text-danger">{dictionary().Titles._MainPage[process.env.GATSBY_LANG]}</h6>
            <Image
              src="https://dummyimage.com/300x200/d6d6d6/000000.jpg&text=logo"
              rounded
            />
            <h1></h1>
          </div>
        </Container>
      </Container>
    </>
  );
}
