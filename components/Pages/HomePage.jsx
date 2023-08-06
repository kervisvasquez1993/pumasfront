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

const HomePage = () => {
  return (
    <Main titlePage={"Inicio"}>
      {/* TODO:PASAR POR PROPS LOS PARAMETROS DEL BANNER */}
      <BannerComponents />
      <div className="container">
        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"py-5 colorPrimary chelseaFont"}
          alignment="start"
        >
          CENTRO DE RESCATE Y SANTUARIO LAS PUMAS
        </HeaderComponets>
        <section className="container-section">
          <section className="grid-2">
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
              classNameContent={"fuentesParrafo align-vertical-center-horizontal-start "}
              width={"70%"}
              alignItems={"center"}
              justifyContent={"center"}
              styleWrapper={{ height: "100%" }}
              // styleContent={{height: "100%"}}
            >
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                amet repellat exercitationem aliquid quae totam, id, labore
                cumque sapiente dicta dolore neque cupiditate debitis voluptatem
                consequatur aut, mollitia saepe esse excepturi iusto quas
                beatae! Repudiandae dignissimos aspernatur labore obcaecati iure
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
          </section>
        </section>

        <HeaderComponets
          src=""
          classNameText={"py-5 colorSecondary chelseaFont"}
          alignment="end"
        >
          ¡CONOCE NUESTRO SANTUARIO VIRTUAL!
        </HeaderComponets>

        
      
        <Slider srcBackgroundColor={"/images/fondo1.png"} />
        <MapSection />
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
