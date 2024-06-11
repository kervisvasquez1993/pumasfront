import Head from "next/head";
import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";

export const MainLayout= ({
  children,
  title,
  pageDescription,
  imageFullUrl,
  applyStyles = true,
}) => {
  const sectionClasses = applyStyles
    ? "container border rounded-lg shadow-lg"
    : "container";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <main className={`margin-center overflowY`}>
        <section className={sectionClasses}>{children}</section>
      </main>
    </>
  );
};
