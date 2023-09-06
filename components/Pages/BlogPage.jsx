import React from "react";
import Main from "../../Layout/Main/Main";
import BlogEntry from "../Section/BlogEntry";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import CardComponent from "../UI/Card/CardComponents";
// import BlogEntry from "./BlogEntry";

const BlogPage = ({ data, blogData }) => {
  console.log(blogData.blog.data, "blogData");
  const { componentDynamics } = data;
  const [firtElement] = componentDynamics
  const blogsInfo = blogData?.blog?.data

  const sectionBlogs = blogsInfo?.map((blog, index) => {
    const { TitleBlog, ContentBlog, imgBlog } = blog?.attributes
    const resumen = ContentBlog.substring(0,150)
    console.log(imgBlog.data[0].attributes.url, "image")
    return (<CardComponent key={index}
      description={resumen+" ...... "}
      title={TitleBlog}
      imageUrl={imgBlog?.data[0]?.attributes?.url}
    />)
  })
  return (
    <Main titlePage={data.title}>
      <div className="container">
        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"p-10 m-10 colorPrimary chelseaFont"}
          alignment="start"
        >
          {firtElement?.Titulo}
        </HeaderComponets>
        <div className="blog">
          {sectionBlogs}
        </div>
      </div>
    </Main>
  );
};

export default BlogPage;
