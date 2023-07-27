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
                  <h4 className="fw-bolder">Электронная коммерция</h4>
                </Card.Title>
                <Card.Text>
                  Парсинг сайтов помогает автоматизировать процессы сбора данных
                  о товарах, ценах и конкурентной информации, например интернет-магазинов, что позволяет
                  более точно настраивать ценообразование, следить за рыночными
                  тенденциями и принимать участие в динамичных бизнес-стратегиях.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card border="light">
              <Card.Body>
                <Card.Title>
                  <BiAnalyse className="mb-2" />
                  <h4 className="fw-bolder">
                    Маркетинговым агентствам и специалистам по SEO
                  </h4>
                </Card.Title>
                <Card.Text>
                  Pageover позволяет анализировать конкурентов, их
                  стратегии и ключевые слова, что помогает разработать более
                  эффективные маркетинговые кампании и оптимизировать
                  SEO-стратегии для улучшения видимости в поисковых системах.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card border="light">
              <Card.Body>
                <Card.Title>
                  <BiBeenHere className="mb-2" />
                  <h4 className="fw-bolder">
                    Исследователям и аналитикам данных
                  </h4>
                </Card.Title>
                <Card.Text>
                  Парсер предоставляет доступ к огромным объемам
                  информации, которую можно использовать для проведения
                  исследований, анализа трендов, изучения рынка, определения
                  пользовательского поведения и принятия стратегических решений.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}
