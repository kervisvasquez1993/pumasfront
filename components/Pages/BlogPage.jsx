import React from "react";
import Main from "../../Layout/Main/Main";
import BlogEntry from "../Section/BlogEntry";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import CardComponent from "../UI/Card/CardComponents";
// import BlogEntry from "./BlogEntry";

const BlogPage = ({ data, dataBlog }) => {
  console.log(data, dataBlog);
  return (
    <Main titlePage={data.title}>
      <div className="container">
        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"p-10 m-10 colorPrimary chelseaFont"}
          alignment="start"
        >
          NOTICIAS Y BLOG
        </HeaderComponets>
        <div className="blog">
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
          {/* Agrega más instancias de BlogEntry con diferentes props según sea necesario */}
        </div>
      </div>
    </Main>
  );
};

export default BlogPage;
