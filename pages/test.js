import Head from "next/head";
import React from "react";

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

const Test = ({ metadata }) => {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="og:title" content={meta.ogTitle} />
        <meta name="og:description" content={meta.ogDescription} />
        <meta name="og:image" content={meta.ogImage} />
        <meta name="og:url" content={meta.ogUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>hola desde about us</h2>
    </div>
  );
};

export default Test;
