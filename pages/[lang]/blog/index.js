import React from 'react'
import { getBlog, langAll } from '../../../apis/ApiBackend';
import { useRouter } from 'next/router';
import BlogPage from '../../../components/Pages/BlogPage';
import CardComponentHover from '../../../components/UI/Card/CardComponentHover';
import Main from '../../../Layout/Main/Main';
import HeaderComponents from '../../../components/UI/HeaderComponents/HeaderComponets';

const index = ({blogsPage}) => {
    const router = useRouter();
    const { lang } = router.query
    const blogs = blogsPage?.data
    const sectionBlogs = blogs?.map((blog, index) => {
        const { TitleBlog, ContentBlog, imgBlog } = blog?.attributes
        const resumen = ContentBlog.substring(0, 150)
        return (
          <div key={index}>
            <CardComponentHover url={`/${lang}/blog/${blog.id}`} description={resumen + " ...... "}
              title={TitleBlog}
              imageUrl={`${imgBlog?.data ? imgBlog?.data[0]?.attributes?.url : "/images/no-img.jpg"}`} />
          </div>
    
        )
      })
  return (
    <Main titlePage={"Blog"}>
      <div className="container">
        <HeaderComponents
          src="/images/fondo1.png"
          classNameText={"p-10 m-10 colorPrimary chelseaFont"}
          alignment="start"
        >
            Blogs
        </HeaderComponents>
        <div className="blog">
          {sectionBlogs}
        </div>
      </div>
    </Main>
  )
}

export default index

export const getStaticProps = async ({ params }) => {
    const { lang } = params;
    const blog = await getBlog(lang);
    const blogsPage = blog.data;
    return {
      props: { blogsPage},
    };
  
  };
  

  export const getStaticPaths = async () => {
    const locales = await langAll();
    const languages = locales;
    const lang = [];
    for (const language of languages) {
      lang.push({ params: { lang: language.attributes.code } });
    }
    return {
      paths: lang,
      fallback: true,
    };
  };