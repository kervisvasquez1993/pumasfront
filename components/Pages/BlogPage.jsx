import React from "react";
import Main from "../../Layout/Main/Main";
import BlogEntry from "../Section/BlogEntry";
// import BlogEntry from "./BlogEntry";


const BlogPage = () => {
  return (
    <Main>
      <div className="blog">
        <BlogEntry
          title="Yaguarundi en Preliberación"
          imageSrc="/images/img.png"
          content="Recordá que nuestra zona de Preliberación es completamente cerrada al público, pues acá están en rehabilitación y crianza los animales que pronto regresarán al bosque y por tanto no deben ..."
        />
        <BlogEntry
          title="Título de otra entrada"
          imageSrc="/images/other-image.png"
          content="Contenido de otra entrada del blog..."
        />
        {/* Agrega más instancias de BlogEntry con diferentes props según sea necesario */}
      </div>
    </Main>
  );
};

export default BlogPage;
