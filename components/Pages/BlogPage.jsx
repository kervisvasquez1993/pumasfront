import React from "react";
import Main from "../../Layout/Main/Main";
import BlogEntry from "../Section/BlogEntry";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import CardComponent from "../UI/Card/CardComponents";
import { useRouter } from "next/router";
import Link from "next/link";
// import BlogEntry from "./BlogEntry";

const BlogPage = ({ data, blogData }) => {
  // console.log(blogData.data, "blogData");
  const router = useRouter();
  const { lang } = router.query
  const { componentDynamics } = data;
  const [firtElement] = componentDynamics
  const blogsInfo = blogData?.data

  const sectionBlogs = blogsInfo?.map((blog, index) => {
    const { TitleBlog, ContentBlog, imgBlog } = blog?.attributes
    const resumen = ContentBlog.substring(0, 150)
    return (<Link href={`/${lang}/blog/${blog.id}`}>  <CardComponent key={index}
      description={resumen + " ...... "}
      title={TitleBlog}
      imageUrl={`${imgBlog?.data ? imgBlog?.data[0]?.attributes?.url : "/images/no-img.jpg"}`}
    /> </Link>)
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
