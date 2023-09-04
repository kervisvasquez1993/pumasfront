import React from "react";
import Main from "../../Layout/Main/Main";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import SliderTwo from "../UI/Slider/SliderTwo";
import MapSection from "../Section/Map/MapSection";
import Slider from "../UI/Slider/SliderComponts";
import BannerComponents from "../UI/Banner/BannerComponents";
import GeneralComponents from "../UI/GeneralComponet/GeneralComponents";
import BasicSection from "../Section/Basic/BasicSection";
import ButtonView from "../../views/ButtonView";
import CardBasic from "../Section/CardBasic";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import Map from "../UI/Map";

const HomePage = ({data}) => {
  console.log("hola")
  return (
    <Main titlePage={"Inicio"}>
      {/* TODO:PASAR POR PROPS LOS PARAMETROS DEL BANNER */}
      <BannerComponents />
      <div className="container">
        <HeaderComponets
          classNameText={"py-10 colorPrimary chelseaFont"}
          alignment="start"
          width="70%"
        >
          CENTRO DE RESCATE Y SANTUARIO LAS PUMAS
        </HeaderComponets>

        <TwoColumnGrid>
          <CardBasic
            showMask={true}
            maskSrc={"/images/mask.png"}
            iconSrc={"/images/modelo3d.png"}
            imgSrc={"/images/venado.png"}
            title={"esto es el titulo"}
            subtitle={"esto el el subtitulo"}
          />

          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyle"}
            title={""}
            classNameContent={
              "fuentesParrafo align-vertical-center-horizontal-start "
            }
            width={"70%"}
            alignItems={"center"}
            justifyContent={"center"}
            styleWrapper={{ height: "100%" }}
            // styleContent={{height: "100%"}}
          >
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              amet repellat exercitationem aliquid quae totam, id, labore cumque
              sapiente dicta dolore neque cupiditate debitis voluptatem
              consequatur aut, mollitia saepe esse excepturi iusto quas beatae!
              Repudiandae dignissimos aspernatur labore obcaecati iure
              perspiciatis, aperiam fugiat est nobis hic quae vero expedita
              iusto, fuga consectetur quibusdam ut pariatur assumenda quos.
              Cupiditate, magnam voluptas?
            </p>
            <ButtonView
              className={" backgroundPrimary m-0 manropeFont p-5"}
              link={""}
            >
              Conoce Más
            </ButtonView>
          </BasicSection>
        </TwoColumnGrid>

        <HeaderComponets
          classNameText={"py-10 colorSecondary chelseaFont"}
          alignment="end"
          width="100%"
        >
          ¡CONOCE NUESTRO SANTUARIO VIRTUAL!
        </HeaderComponets>
        <TwoColumnGrid backgroundImage="/images/mask-background.png">
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
              className={" backgroundGris m-0 manropeFont py-10"}
              link={""}
            >
              Conoce Más
            </ButtonView>
          </BasicSection>

          <CardBasic imgSrc={"/images/section2.png"} />
        </TwoColumnGrid>
        <HeaderComponets
          classNameText={"py-10 colorSecondary chelseaFont"}
          alignment="start"
          width="35%"
        >
          NO ME SAQUES DE MI HÁBITAD
        </HeaderComponets>
        <TwoColumnGrid>
          <CardBasic
            showMask={true}
            maskSrc={"/images/mask.png"}
            iconSrc={"/images/modelo3d.png"}
            imgSrc={"/images/nigre.png"}
            title={"esto es el titulo"}
            subtitle={"esto el el subtitulo"}
          />

          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyle"}
            title={""}
            classNameContent={
              "fuentesParrafo align-vertical-center-horizontal-start "
            }
            width={"70%"}
            alignItems={"center"}
            justifyContent={"center"}
            styleWrapper={{ height: "100%" }}
            // styleContent={{height: "100%"}}
          >
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              amet repellat exercitationem aliquid quae totam, id, labore cumque
              sapiente dicta dolore neque cupiditate debitis voluptatem
              consequatur aut, mollitia saepe esse excepturi iusto quas beatae!
              Repudiandae dignissimos aspernatur labore obcaecati iure
              perspiciatis, aperiam fugiat est nobis hic quae vero expedita
              iusto, fuga consectetur quibusdam ut pariatur assumenda quos.
              Cupiditate, magnam voluptas?
            </p>
            <ButtonView
              className={" backgroundPrimary m-0 manropeFont p-5"}
              link={""}
            >
              Conoce Más
            </ButtonView>
          </BasicSection>
        </TwoColumnGrid>
        <HeaderComponets
          classNameText={"py-10 colorPrimary chelseaFont"}
          alignment="start"
          width="35%"
        >
          NOTICIAS Y BLOG
        </HeaderComponets>
        <Slider srcBackgroundColor={"/images/fondo1.png"} />
        <TwoColumnGrid>
          <Map />
          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyle"}
            title={""}
            classNameContent={" align-vertical-center-horizontal-start "}
            width={"70%"}
            alignItems={"center"}
            justifyContent={"center"}
            styleWrapper={{ height: "100%" }}
            // styleContent={{height: "100%"}}
          >
            <section className="py-5">
              <h4 className="chelseaFont colorSecondary font-size-24">HORARIO</h4>
              <div>
                <p className="py-1">Luneas a Domingos</p>
                <p className="py-1">
                  De 8:00 AM A 4:00 PM Incluidos los festivos
                </p>
              </div>
            </section>
            <section className="py-5 ">
              <h4 className="chelseaFont colorSecondary font-size-24">DIRECCIÓN</h4>
              <div>
                <p className="py-1 fontBold">Luneas a Domingos</p>
                <p className="py-1">
                  <span className="fontBold">De 8:00 AM A 4:00 PM.</span>{" "}
                  Incluidos los festivos
                </p>
              </div>
            </section>
            <section className="py-5">
              <h4 className="chelseaFont colorSecondary font-size-24">PRECIOS</h4>
              <div>
                <p className="py-1 fontBold font-size-16">Nacionales</p>
                <p className="">
                  Niños(4 - 12 Años) : $1000
                </p>
                <p className="">
                  Estudiantes(Mayores De 12 Años) Y Adultos Mayores: $2000
                </p>
                <p className="">
                  Adultos: $3000
                </p>
              </div>
              <div className="py-5">
                <p className="py-1 fontBold">Extrangeros:</p>
                <p className="">
                  Niños(4 - 12 Años) : $8
                </p>
                <p className="">
                  Estudiantes(Mayores De 12 Años) Y Adultos Mayores: $8
                </p>
                <p className="">
                  Adultos: $12
                </p>
              </div>
            </section>
          </BasicSection>
        </TwoColumnGrid>
        
        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"py-5 colorVerde chelseaFont"}
          alignment="start"
        >
          PATROCINADORES
        </HeaderComponets>
        <SliderTwo />
      </div>
    </Main>
  );
};

export default HomePage;
