import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
          name="og:title"
          content={"Título OG por defecto"}
        />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
