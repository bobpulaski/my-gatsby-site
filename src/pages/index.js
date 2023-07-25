import * as React from "react";

import Layout from "../components/layout";
import MainBanner from "../components/MainBanner";
import Features from "../components/Features";
import Section from "../components/Section";
import Block2Parts from "../components/Block2Parts";

import dictionary from "../i18/dictionary";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <MainBanner />
        <Features />
        <Section
          header="Desktop development made easy"
          text="Electron takes care of the hard parts so you can focus on the core
              of your application."
        />

        <Block2Parts
          order="text-left"
          header="Native graphical user interfaces"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ducimus in numquam, delectus vel quo corporis sapiente perspiciatis
            autem ea debitis rerum, id nemo laudantium mollitia animi, magnam
            ipsa beatae? vel quo corporis sapiente perspiciatis
            autem ea debitis rerum, id nemo laudantium mollitia animi, magnam
            ipsa beatae? lorem"
          image="https://fakeimg.pl/400x300/"
        />
        <Block2Parts
          order="text-right"
          header="Automatic software updates"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ducimus in numquam, delectus vel quo corporis sapiente perspiciatis
            autem ea debitis rerum, id nemo laudantium mollitia animi, magnam
            ipsa beatae? vel quo corporis sapiente perspiciatis
            autem ea debitis rerum, id nemo laudantium mollitia animi, magnam
            ipsa beatae? lorem"
          image="https://fakeimg.pl/400x300/?text=Hello 400/300"
        />
        <Block2Parts
          order="text-left"
          header="App store distribution"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ducimus in numquam, delectus vel quo corporis sapiente perspiciatis
            autem ea debitis rerum, id nemo laudantium mollitia animi, magnam
            ipsa beatae? vel quo corporis sapiente perspiciatis
            autem ea debitis rerum, id nemo laudantium mollitia animi, magnam
            ipsa beatae? lorem"
          image="https://fakeimg.pl/400x300/"
        />

        <Section
          header="Use the tools you love"
          text="With the power of modern Chromium, Electron gives you an unopinionated blank slate to build your app. Choose to integrate your favourite libraries and frameworks from the front-end ecosystem, or carve your own path with bespoke HTML code."
        />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <title>Pageover - программа для парсинга сайтов</title>
);
