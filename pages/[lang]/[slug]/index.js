import React from "react";
import HomePage from "../../../components/Pages/HomePage";
import { useRouter } from "next/router";
import NosotrosPage from "../../../components/Pages/NosotrosPage";
const getPages = () => {
    const pages = [
      { code: "es", slug: "inicio", title: "Inicio", contentType: "component", content: "HomePage" },
      { code: "es", slug: "nosotros", title: "Nosotros", contentType: "component", content: "NosotrosPage" },
    ];
    return pages;
  };
  
  const Page = ({ page }) => {
    const router = useRouter();
    console.log(page.slug)
    if (router.isFallback) {
    
      return <div>Cargando...</div>;
    }
  
    if (!page) {
      return <div>Página no encontrada</div>;
    }
  

    const renderContent = () => {
      if (page.contentType === "component") {
        // Importar y renderizar el componente adecuado
        switch (page.content) {
          case "HomePage":
            return <HomePage />;
          case "NosotrosPage":
            return <NosotrosPage />;
          default:
            return null;
        }
      } else if (page.contentType === "text") {
        return <p>{page.content}</p>;
      } else {
        return null;
      }
    };
  
    return (
      <div>
        {renderContent()}
      </div>
    );
  };
  
  export const getStaticProps = async ({ params }) => {
    const { lang, slug } = params;
    const pages = getPages();
    const page = pages.find((page) => page.code === lang && page.slug === slug);
    if (!page) return { notFound: true };
    return {
      props: { page: { ...page } },
    };
  };
  
  export const getStaticPaths = async () => {
    const pages = getPages();
    const paths = pages.map((page) => ({
      params: { lang: page.code, slug: page.slug },
    }));
    return {
      paths,
      fallback: true,
    };
  };
  
  export default Page;