import React from "react";

const SlugPage = () => {
    return <div>SlugPage</div>;
};

export default SlugPage;

export const getStaticProps = ({ params }) => {
    const paramId = params.slug;
    const pages = getPages();
    const page = pages.find((page) => page.slug === paramId);
    if (!page) return { notFound: true };
    return {
        props: { page },
    };
};

export const getStaticPaths = () => {
    const pages = getPages();
    const page = pages.map((page) => page.slug);
    const paths = page.map((path) => ({ params: { slug: path } }));
    return {
        paths,
        fallback: true,
    };
};

const getPages = () => {
    const pages = [
        { code: "es", slug: "inicio", title: "Inicio" },
        { code: "es", slug: "nosotros", title: "Nosotros" },
    ];
    return pages;
};
