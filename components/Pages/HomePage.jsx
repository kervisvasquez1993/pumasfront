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
import { slide as Menu } from 'react-burger-menu'
import MenuBurger from "../UI/MenuBurguer";
import useScreenSize from "../../hooks/useScreenSize";
import PaypalForm from "../Section/PaypalForm";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";


const HomePage = ({ data }) => {
  // console.log(data, "data desde home");
  const router = useRouter();
  const { lang } = router.query
  const {componentDynamics} = data
  console.log(componentDynamics, "component");
  const [primerElement, segundoElemento, tercerElemento, cuartoElemento, quintoElemento, sextoElemento, septiomoElemento, octavoElemento] = componentDynamics
  console.log(quintoElemento, "cuarto elemento")
  const { screenSize } = useScreenSize()

  return (
    <Main titlePage={"Inicio"}>
      {/* TODO:PASAR POR PROPS LOS PARAMETROS DEL BANNER */}
      <BannerComponents />


      <div className="container">



          <HeaderComponets
            classNameText={"p-5 colorPrimary chelseaFont"}
            alignment={`${screenSize <= 1200 ? "center" : "start"}`}
            width={`${screenSize <= 1200 ? "100%" : "70%"}`}
          >
           {primerElement.Titulo}
          </HeaderComponets>

          <TwoColumnGrid>
            <CardBasic
              showMask={true}
              maskSrc={"/images/mask.png"}
              iconSrc={"/images/modelo3d.png"}
              imgSrc={segundoElemento.imgBasicContent.data.attributes.url}
              title={segundoElemento.title}
              subtitle={segundoElemento.subTitle}
            />

            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyle"}
              title={""}
              classNameContent={
                ` fuentesParrafo  ${screenSize <= 1200 ? "align-vertical-center-horizontal-center" : "align-vertical-center-horizontal-start "} sm:p-10`
              }
              width={`${screenSize <= 1200 ? "100%" : "70%"}`}
              alignItems={"center"}
              justifyContent={"center"}
              styleWrapper={{ height: "100%" }}
            // styleContent={{height: "100%"}}
            >
              
              <ReactMarkdown className="py-5">{segundoElemento.content}</ReactMarkdown>
              <ButtonView
                className={" backgroundPrimary m-0 manropeFont p-5"}
                link={lang+"/"+segundoElemento.btn.url}
              >
                {segundoElemento.btn.label}
              </ButtonView>
            </BasicSection>
          </TwoColumnGrid>

          <HeaderComponets
            classNameText={" lg:py-10 py-5 colorSecondary chelseaFont"}
            alignment="end"
            width="100%"
          >
            {tercerElemento.title}
          </HeaderComponets>
          <TwoColumnGrid backgroundImage="/images/mask-background.png">
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyle "}
              title={""}
              classNameContent={
                ` fuentesParrafo  ${screenSize <= 1200 ? "align-vertical-center-horizontal-center" : "align-vertical-center-horizontal-start "} lg:p-10 lg:m-10 md:p-5 md:m-5 sm:p-5 sm:m-5`
              }
              width={"100%"}
              widthContent="100%"
              alignItems={"center"}
              alignment={`${screenSize <= 1200 ? "center" : "end"}`}
              styleWrapper={{ height: "100%" }}

            styleContent={{height: "100%"}}
            >
             
              <ReactMarkdown className="sm:m-lg:py-10 md:py-55 m-responsive">{tercerElemento.content}</ReactMarkdown>
              <ButtonView
                className={" backgroundGris m-0 mt-5 manropeFont py-10"}
                link={lang+"/"+tercerElemento.btn.url}
              >
                {tercerElemento.btn.label}
              </ButtonView>
            </BasicSection>

            <CardBasic imgSrc={tercerElemento.imgBasicContent.data.attributes.url} />
          </TwoColumnGrid>
        
        
          <HeaderComponets
            classNameText={"p-10 titleGreen chelseaFont"}
            alignment={`${screenSize <= 1200 ? "center" : "start"}`}
            width={`${screenSize <= 1200 ? "100%" : "40%"}`}
          >
            {cuartoElemento.Titulo}
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
                ` fuentesParrafo  ${screenSize <= 1200 ? "align-vertical-center-horizontal-center" : "align-vertical-center-horizontal-start "} p-5 sm:p-10 sm:m-10`
              }
              width={`${screenSize <= 1200 ? "100%" : "70%"}`}
              alignItems={"center"}
              justifyContent={"center"}
              styleWrapper={{ height: "100%" }}
            // styleContent={{height: "100%"}}
            >
              <p className="py-5">
                nio me sauesLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                amet repellat exercitationem aliquid quae totam, id, labore cumque
                sapiente dicta dolore neque cupiditate debitis voluptatem
                consequatur aut, mollitia saepe esse excepturi iusto quas beatae!
                Repudiandae dignissimos aspernatur labore obcaecati iure
                perspiciatis, aperiam fugiat est nobis hic quae vero expedita
                iusto, fuga consectetur quibusdam ut pariatur assumenda quos.
                Cupiditate, magnam voluptas?
              </p>
              <ButtonView
                className={" buttonGreen m-0 manropeFont p-5"}
                link={""}
              >
                Conoce Más
              </ButtonView>
            </BasicSection>
          </TwoColumnGrid>
          <HeaderComponets
            classNameText={"py-10 colorPrimary chelseaFont"}
            alignment={`${screenSize <= 1200 ? "center" : "start"}`}
            width={`${screenSize <= 1200 ? "100%" : "70%"}`}
          >
            NOTICIAS Y BLOG
          </HeaderComponets>


          <Slider />
        
       
          <TwoColumnGrid>
            <Map />
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyle"}
              title={""}
              classNameContent={
                ` fuentesParrafo  ${screenSize <= 1200 ? "align-vertical-center-horizontal-center" : "align-vertical-center-horizontal-start "}`
              }
              width={`${screenSize <= 1200 ? "100%" : "70%"}`}
              alignItems={"center"}
              justifyContent={"center"}
              styleWrapper={{ height: "100%" }}
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
            classNameText={"py-5 colorVerde chelseaFont font-responsive"}
            alignment={`${screenSize <= 1200 ? "center" : "start"}`}
          >
            PATROCINADORES
          </HeaderComponets>
          <SliderTwo />
        
      </div>
    </Main>
  );
};

export default HomePage;
