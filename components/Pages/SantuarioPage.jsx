// SantuarioPage.js
import React from "react";
import Main from "../../Layout/Main/Main";
import SanctuarySection from "../Section/Santuario/SanctuarySection";
import RouteSection from "../Section/Santuario/RouteSection";
import RulesSection from "../Section/Santuario/RulesSection";
import SliderThree from "../UI/Slider/SliderThree";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";

const SantuarioPage = () => {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
  ];
  return (
    <Main titlePage={"Santuario"}>
      <div className="container">
        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"colorPrimary chelseaFont pt-10 mt-10 "}
          alignment="start"
        >
          Nuestro Santuario
        </HeaderComponets>
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
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              classNameContent={"fuentesParrafo py-10"}
            >
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sunt veniam quos. Nisi esse quae ullam ab, mollitia vero
                accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ducimus sunt veniam quos. Nisi esse quae ullam ab,
                mollitia vero accusantium. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus sunt veniam quos. Nisi
                esse quae ullam ab, mollitia vero accusantium.
              </p>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sunt veniam quos. Nisi esse quae ullam ab, mollitia vero
                accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sunt veniam quos. Nisi esse quae ullam ab, mollitia vero
                accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ducimus sunt veniam quos. Nisi esse quae ullam ab,
                mollitia vero accusantium. Lorem ipsum dolor sit amet
              </p>
            </BasicSection>
          </section>
        </section>
        <section className="container-section py-10 my-5">
          <section className="grid-2">
            <HeaderComponets
              src="/images/fondo1.png"
              classNameText={"colorPrimary chelseaFont pt-10 mt-10 "}
              alignment="start"
            >
              Nuestro Santuario
            </HeaderComponets>
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              classNameContent={"fuentesParrafo py-10"}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt quibusdam numquam obcaecati perspiciatis natus
                doloribus, et asperiores illo aliquam tempora quae laboriosam
                vero esse, harum impedit. Totam quo saepe aliquam placeat
                expedita eius adipisci error molestiae a reiciendis cumque ab
                tempora eos reprehenderit dolorum veritatis repellendus, velit
                praesentium?
              </p>
              <ButtonView
                className={" backgroundSecondary manropeFont my-10"}
                link={""}
              >
                Visitanos
              </ButtonView>
            </BasicSection>
          </section>
        </section>
        <SanctuarySection />
        <RouteSection />
        <RulesSection />
      </div>
    </Main>
  );
};

export default SantuarioPage;
