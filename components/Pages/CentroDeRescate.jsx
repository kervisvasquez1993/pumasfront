import React from "react";
import Main from "../../Layout/Main/Main";
import Section from "../Section/Basic/Section";
import SectionReverse from "../Section/Basic/SectionReverse";
import SliderThree from "../UI/Slider/SliderThree";
import BasicSection from "../Section/Basic/BasicSection";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import ButtonView from "../../views/ButtonView";
import CardBasic from "../Section/CardBasic";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";

const CentroDeRescate = () => {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
  ];
  return (
    <Main titlePage={"Centro de Rescate"}>
      <div className="container">
        <section className="container-section py-10 my-5">
          <section className="grid-2">
            <SliderThree>
              {images.map((image) => {
                return (
                  <div key={image}>
                    <img src={image} alt={"natural"} />
                  </div>
                );
              })}
            </SliderThree>
            <BasicSection
              classNameTitle={"program-title fuenteTitulo colorPrimary"}
              classNameWrapper={"setionStyleOne"}
              title={"Centro de Rescate"}
              classNameContent={"fuentesParrafo py-10"}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sunt veniam quos. Nisi esse quae ullam ab, mollitia vero
                accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ducimus sunt veniam quos. Nisi esse quae ullam ab,
                mollitia vero accusantium. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus sunt veniam quos. Nisi
                esse quae ullam ab, mollitia vero accusantium.
              </p>
            </BasicSection>
          </section>
        </section>
        <h3 className="program-title fuenteTitulo colorPrimary py-10 my-10">
          PROCESO DE RESCATE
        </h3>
        <SectionReverse
          positionTitle="start"
          titleClassName={"program-title fuenteTitulo colorPrimary py-10 my-10"}
          title="1. INGRESO DEL ANIMAL"
          imageSrc="/images/imgsantuario.png"
          contentClassName={"contentSectionReserveEnd"}
          content="El proceso de rescate es crucial para salvar a los animales en peligro y brindarles un lugar seguro donde puedan recuperarse y recibir atención médica y rehabilitación. Nuestro equipo de expertos trabaja incansablemente para garantizar que cada animal reciba el cuidado adecuado y, cuando sea posible, se les devuelva a su hábitat natural."
        />
        <Section
          positionTitle={"end"}
          contentClassName="contentSectionEnd px-10 px-10"
          titleClassName={"program-title fuenteTitulo colorVerde py-10 my-10"}
          title="2. VALORACIÓN POR DRA. VETERINARIO"
          imageSrc="/images/imgsantuario.png"
          content="Nuestro Centro de Rescate está abierto al público. Aquí es donde se encuentran los animales que no pueden ser liberados nuevamente en la naturaleza por diversas razones, como lesiones físicas que les impiden valerse por sí mismos o porque fueron mantenidos ilegalmente como mascotas y se acostumbraron a vivir con las personas."
        />
        <SectionReverse
          positionTitle="start"
          titleClassName={"program-title fuenteTitulo colorPrimary py-10 my-10"}
          title="3. TRATAMIENTO O CRIANZA"
          imageSrc="/images/imgsantuario.png"
          contentClassName={"contentSectionReserveEnd"}
          content="El proceso de rescate es crucial para salvar a los animales en peligro y brindarles un lugar seguro donde puedan recuperarse y recibir atención médica y rehabilitación. Nuestro equipo de expertos trabaja incansablemente para garantizar que cada animal reciba el cuidado adecuado y, cuando sea posible, se les devuelva a su hábitat natural."
        />
        <Section
          positionTitle={"end"}
          contentClassName="contentSectionEnd px-10 px-10"
          titleClassName={"program-title fuenteTitulo colorVerde py-10 my-10"}
          title="4.REABILITACION"
          imageSrc="/images/imgsantuario.png"
          content="Nuestro Centro de Rescate está abierto al público. Aquí es donde se encuentran los animales que no pueden ser liberados nuevamente en la naturaleza por diversas razones, como lesiones físicas que les impiden valerse por sí mismos o porque fueron mantenidos ilegalmente como mascotas y se acostumbraron a vivir con las personas."
        />

        <SectionReverse
          positionTitle="start"
          titleClassName={"program-title fuenteTitulo colorPrimary py-10 my-10"}
          title="5. LIBERACION"
          imageSrc="/images/imgsantuario.png"
          contentClassName={"contentSectionReserveEnd"}
          content="El proceso de rescate es crucial para salvar a los animales en peligro y brindarles un lugar seguro donde puedan recuperarse y recibir atención médica y rehabilitación. Nuestro equipo de expertos trabaja incansablemente para garantizar que cada animal reciba el cuidado adecuado y, cuando sea posible, se les devuelva a su hábitat natural."
        />
         <TwoColumnGrid backgroundImage="/images/mask-secundario.png">
          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyle "}
            title={""}
            classNameContent={
              "fuentesParrafo align-vertical-center-horizontal-start py-10 my-10"
            }
            width={"100%"}
            widthContent="50%"
            alignItems={"center"}
            justifyContent={"center"}
            styleWrapper={{ height: "100%" }}

            // styleContent={{height: "100%"}}
          >
            <p className="py-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              aliquam dicta maxime perferendis ducimus, temporibus quae impedit
              sequi deserunt quasi fuga, rerum omnis odio saepe harum aperiam
              officia quod! Nulla.
            </p>
            <ButtonView
              className={" backgroundSecondary m-0 manropeFont py-10"}
              link={""}
            >
              Conoce Más
            </ButtonView>
          </BasicSection>
          <section>
          <HeaderComponets
          classNameText={" colorSecondary chelseaFont"}
          alignment="end"
          width="100%"
        >
          NO ME SAQUES DE MI HÁBITAD
        </HeaderComponets>
          <CardBasic imgSrc={"/images/section2.png"} />
          </section>
        </TwoColumnGrid>
      </div>
    </Main>
  );
};

export default CentroDeRescate;
