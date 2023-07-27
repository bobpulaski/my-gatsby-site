import React from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { SiWindows } from "react-icons/si";

import dictionary from "../i18/dictionary";

export default function MainBanner() {
  return (
    <>
      <Container fluid style={{ marginBottom: "6rem" }}>
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Image
              className="my-5"
              src={"/pageover_big_logo_300.png"}
              rounded
            />
            <h1 className="my-2 text-center">Программа для парсинга сайтов</h1>
            <h2 className="mb-5 text-center">
              Парсите содержимое сайтов в данные
            </h2>
            <Button
              variant="dark"
              className="px-4 pt-3 position-relative"
              title="Загрузить парсер сайтов для Windows бесплатно"
            >
              <h4>
                <SiWindows className="me-3 mb-1" />
                {dictionary().Words._DownLoadForFree[process.env.GATSBY_LANG]}
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  Windows (64-bit)
                </span>
              </h4>
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
}
