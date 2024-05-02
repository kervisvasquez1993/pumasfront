import React, { useState } from "react";
import Main from "../../Layout/Main/Main";
import BlogEntry from "../Section/BlogEntry";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import CardComponent from "../UI/Card/CardComponents";
import { useRouter } from "next/router";
import Link from "next/link";
import CardComponentHover from "../UI/Card/CardComponentHover";
import Head from "next/head";

const BlogPage = ({ data, blogData }) => {
  const router = useRouter();
  const { lang } = router.query
  const { componentDynamics } = data;
  const [firtElement] = componentDynamics
  const blogsInfo = blogData?.data

  const sectionBlogs = blogsInfo?.map((blog, index) => {
    const { TitleBlog, ContentBlog, imgBlog, slug } = blog?.attributes
    const resumen = ContentBlog.substring(0, 150)
    return (
      <div key={index}>
        <CardComponentHover url={`/${lang}/blog/${blog.id}`} description={resumen + " ...... "}
          title={TitleBlog}
          imageUrl={`${imgBlog?.data ? imgBlog?.data[0]?.attributes?.url : "/images/no-img.jpg"}`} />
      </div>

    )
  })

  const ComponentDynamicsRenderer = ({ componentDynamics }) => {

    const renderedComponents = componentDynamics.reduce((acc, elemento, index) => {  
      
      if(elemento?.typeSection === "section2"){
        //console.log(elemento, "component")
        const component = (<div className="container-program">
        <h3 className="program-title fuenteTitulo colorPrimary sm:mx-10 sm:px-10 p-5">
          {elemento?.title}
        </h3>
        <div className="grid-2 px-5">
          <div className="about-program_text fuentesParrafo lg:px-10 sm:py-5 saltoLinea2">
            <ReactMarkdown>{elemento?.content}</ReactMarkdown>
          </div>
        </div>
      </div>)
       return [...acc, component];
      }
      return acc;
    }, []);
    return <div>{renderedComponents}</div>;
  };  
  return (
    <Main titlePage={data.title}>
      <Head>
        <title> {data?.meta?.title}</title>
        <meta name="description" content={data?.meta?.description} />
        <meta name="keywords" content={data?.meta?.keywords} />
        <meta name="author" content={data?.meta?.authors} />
        <meta property="og:title" content={data?.meta?.ogTitle} />
        <meta property="og:description" content={data?.meta?.ogDescription} />
        <meta property="og:image" content={data?.meta?.ogImage?.data?.attributes?.url} />
        <meta property="og:url" content={data?.meta?.ogUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        {ComponentDynamicsRenderer(data)}
        <div className="blog">
          {sectionBlogs}
        </div>
      </div>
    </Main>
  );
};

export default BlogPage;
