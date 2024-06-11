import React from "react";
import { MainLayout } from "../Layout/Main/MainLayout";

export async function getStaticProps() {
  const meta = {
    title: "Título por defecto",
    keywords: "sdsd",
    author: "ssdsd",
    ogTitle: "Título por defecto",
    ogDescription: "ssdsds",
    ogImage: "sdsd",
    ogUrl: "sdsds",
  };
  return { props: { meta } };
}

const Test = ({ meta }) => {
  return (
      <MainLayout  title="hola mundo" pageDescription="descriptions">
        <h2>test</h2>
      </MainLayout>
  
  );
};

export default Test;
