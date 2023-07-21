import React from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import dictionary from "../i18/dictionary";

export default function MainBanner() {
  return (
    <>
      <Container fluid className="">
        <Container className="p-2">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Image
              className="my-5"
              src={"/pageover_big_logo_300.png"}
              rounded
            />
            <h1 className="my-2">Парсить сайты стало намного проще</h1>
            <h2 className="mb-5">
              Парсите содержимое сайтов в данные. Запускайте парсеры на вашем
              компьютере
            </h2>
            <Button className="mb-5 display-5" variant="warning">
              <h4>
                {dictionary().Words._DownLoadForFree[process.env.GATSBY_LANG]}
              </h4>
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
}
