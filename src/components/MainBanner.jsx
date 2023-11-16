import React from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { SiWindows } from "react-icons/si";

import dictionary from "../i18/dictionary";

export default function MainBanner() {
  function download() {
    console.log("Была нажата ссылка.");
  }

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

            <a href="400-300.jpg" download>
              Download the directly imported file
            </a>
            {` `}

            <Button
              variant="dark"
              type="submit"
              className="px-4 pt-3 position-relative"
              title="Скачать парсер сайтов для Windows бесплатно"
              onClick={download}
              href="scale_1200.zip"
            >
              <h4>
                <SiWindows className="me-3 mb-1" />
                {dictionary().Words._DownLoadForFree[process.env.GATSBY_LANG]}
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  beta
                </span>
              </h4>
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
}
