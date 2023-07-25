import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { BiAnalyse, BiAlbum, BiBeenHere } from "react-icons/bi";

export default function Features() {
  return (
    <>
      <Container style={{ marginBottom: "6rem" }}>
        <div className="row gx-5">
          <div className="col">
            <Card border="light">
              <Card.Body>
                <Card.Title>
                  <BiAlbum className="mb-2" />
                  <h4 className="fw-bolder">Web Technologies</h4>
                </Card.Title>
                <Card.Text>
                  Если вы собираете данные для вашего бизнеса вручную, то
                  наверняка вы тратите на это часы или даже дни, или даже
                  нанимаете людей, которые это делают. С Диггернаутом, вы
                  соберете информацию за минуты. Это сэкономит ваше время и
                  деньги.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card border="light">
              <Card.Body>
                <Card.Title>
                  <BiAnalyse className="mb-2" />
                  <h4 className="fw-bolder">Cross Platform</h4>
                </Card.Title>
                <Card.Text>
                  Диггер не ограничен одной страницей, он может собирать данные
                  с множественных страниц одного сайта, или даже с разных
                  сайтов. Другими словами, диггер может переходить с одной
                  страницы на другую без всяких проблем.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card border="light">
              <Card.Body>
                <Card.Title>
                  <BiBeenHere className="mb-2" />
                  <h4 className="fw-bolder">Open Source</h4>
                </Card.Title>
                <Card.Text>
                  Вы можете скомпилировать ваш диггер и запускать на своем
                  компьютере или сервере так часто и много, как вам требуется.
                  Вам не нужно оплачивать подписку, чтобы использовать
                  скомпилированный диггер.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}
