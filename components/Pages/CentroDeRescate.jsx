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
import usePages from "../../hooks/usePages";
import { cookies } from "next/dist/client/components/headers";
import SlidetWithContent from "../Section/Slider/SliderWithContent";

const CentroDeRescate = () => {
  const { dynamicsComponent } = usePages()
  if (!dynamicsComponent) {
    return "cargando...";
  }
  const [firstSection, secondSection, thirdSection, fourthSection] = dynamicsComponent;
  console.log(thirdSection, "thri section")
  const { imagenes } = firstSection
  const imgSlider = imagenes.data.map(img => {
    return {
      url: `http://localhost:1337${img.attributes.url}`
    }
  })

  return (
    <Main titlePage={"Centro de Rescate"}>
      <div className="container">
        <SlidetWithContent images={imgSlider} content={firstSection.Content} title={firstSection.title}/>
        <h3 className="program-title fuenteTitulo colorPrimary py-10 my-10">
          {secondSection.Titulo}
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
