import * as React from "react";

import Layout from "../components/layouts/Layout";
import MainBanner from "../components/MainBanner";
import Features from "../components/Features";
import Section from "../components/Section";
import Block2Parts from "../components/Block2Parts";
import { Container } from "react-bootstrap";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <MainBanner />
        <Features />
        <Section
          header="Парсите сайты просто и быстро"
          text="Приложение Pageover разработано для извлечения данных веб-страниц с последующим сохранением результата в формат csv."
        />

        <Block2Parts
          order="text-left"
          header="Неограниченное количество проектов"
          text="С нашим парсером, вы сможете легко настраивать проекты для сбора данных с различных источников – от веб-страниц и онлайн-магазинов до новостных порталов и социальных сетей. Все, что вам нужно – это указать нужные параметры, и парсер возьмет на себя тяжелую работу, чтобы предоставить вам всю необходимую информацию."
          image="/400-300.jpg"
        />

        <Block2Parts
          order="text-right"
          header="Простой удобный интерфейс"
          text="Pageover предоставляет Вам удобный интуитивный интерфейс. Вам достаточно создать проект, которых может быть несколько, указать логические группы парсинга контента (извлечение данных из HTML и XML документов), затем просто добавить к каждой группе неограниченное число ссылок на необходимые страницы и настроить правила анализа html-страниц."
          image="https://fakeimg.pl/400x300/"
        />

        <Block2Parts
          order="text-left"
          header="Гибкие настройки парсера"
          text="Настраивайте правила анализа кода страницы, исходя из ваших предпочтений и результата рендера страницы конкретного ресурса: текстовый анализ (bitween), анализ на основе элементов DOM или используйте регулярные выражения."
          image="https://fakeimg.pl/400x300/"
        />

        <Section
          header="Экспорт результатов в один клик"
          text="Сохранив результаты парсинга в csv-файл, вы можете работать с ними как с обычной таблицей в любом табличном редакторе, и конечно же, использовать в качестве данных для импорта."
        />
        <Container style={{ marginBottom: "6rem" }}>
          <div
            className="d-flex flex-column rounded"
            style={{ background: "#e9ecef", fontSize: "12px" }}
          >
            <p className="fw-lighter text-center p-3">
              В настоящее время приложение находится в стадии тестирования и
              может содержать ошибки. Мы работаем над его усовершенствованием.
              Будем признательны за обратную связь, указание на ошибки,
              предложения по функционалу. Следите за обновлениями.
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <title>Pageover - Приложение для парсинга открытых данных веб-сайтов</title>
);
