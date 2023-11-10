import React from 'react'
import { getBlog, langAll } from '../../../apis/ApiBackend'
import { useRouter } from 'next/router';
import Main from '../../../Layout/Main/Main';
import HeaderComponents from '../../../components/UI/HeaderComponents/HeaderComponets';
import useScreenSize from '../../../hooks/useScreenSize';
import SliderThree from '../../../components/UI/Slider/SliderThree';
import ReactMarkdown from 'react-markdown';
import BasicSection from '../../../components/Section/Basic/BasicSection';
import SliderSingle from '../../../components/UI/Slider/SliderSingle';

const BlogInfo = ({
  blog
}) => {
  const { screenSize } = useScreenSize()
  const { TitleBlog="", ContentBlog="", imgBlog= "" } = blog.attributes
  return (
    <Main titlePage={TitleBlog}>
      <HeaderComponents
        classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-10 mx-10 "}
        alignment={`${screenSize <= 1024 ? "center" : "start"}`}
      >
        {TitleBlog}
      </HeaderComponents>

      <section className="container-section py-10 my-5">
        <section className={`${imgBlog?.data  ? "flex-2" : "" }`}>
          <SliderSingle slidesData={imgBlog?.data} />
          <section>
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo px-10"}
              title={""}
              alignItems={"center"}
              justifyContent={"center"}
              width={`${screenSize <= 1024 ? "100%" : "100%"}`}
              classNameContent={`${screenSize <= 1024 ? "align-vertical-center-horizontal-center" : "align-vertical-center-horizontal-start"} fuentesParrafo  p-10 m-10`}

            >
              <ReactMarkdown className="contentBlog">{ContentBlog}</ReactMarkdown>
            </BasicSection>
          </section>
        </section>
      </section>
    </Main>
  )
}

export default BlogInfo

export const getStaticProps = async ({ params }) => {
  const { lang, slug } = params
  const blogAllResponse = await getBlog(lang);
  const blogAll = blogAllResponse.data.data
  
  const blog = blogAll.find(e => e.attributes.slug == slug)

  return {
    props: {
      blog
    },
  };
}

export const getStaticPaths = async () => {
  
  const blogs = [];
  const locales = await langAll();
  const languages = locales;
  for (const language of languages) {
    const blogAllResponse = await getBlog(language.code);
    const blogAll = blogAllResponse.data
    blogAll.data.forEach(element => {
      return blogs.push({ params: { id: element.id.toString(), body: element, lang: language.code } })
    })
  }
  return {
    paths: blogs,
    fallback: true,
  };
};