import React from "react";
import Main from "../../Layout/Main/Main";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";
import SliderThree from "../UI/Slider/SliderThree";
const ApoyanosPage = () => {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
  ];
  return (
    <Main>
      <div className="container">
        <section className="container-section py-10 my-5">
          <section className="grid-2">
            <section>
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
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus sunt veniam quos. Nisi esse quae ullam ab, mollitia
                  vero accusantium. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ducimus sunt veniam quos. Nisi esse quae
                  ullam ab, mollitia vero accusantium. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ducimus sunt veniam quos.
                  Nisi esse quae ullam ab, mollitia vero accusantium.
                </p>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus sunt veniam quos. Nisi esse quae ullam ab, mollitia
                  vero accusantium. Lorem ipsum dolor sit amet consectetur
                  adipisicing
                </p>
                <ButtonView
                  className={" backgroundPrimary m-0 manropeFont p-5"}
                  link={""}
                >
                  Entra al Programa
                </ButtonView>
              </BasicSection>
            </section>
            <section>
              <HeaderComponets
                src="/images/fondo1.png"
                classNameText={"colorSecondary chelseaFont pt-10 mt-10 "}
                alignment="start"
              >
                ¡TAMBIÉN PUEDES DONAR ACÀ!
              </HeaderComponets>
              <section className="grid-2">
                <section>
                  <h3 className="colorSecondary chelseaFont">
                    DEPÓSITO BANCARIO
                  </h3>
                  <section>
                    <h5>Fundación Hagnauer</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, veniam!
                    </p>
                  </section>
                  <section>
                    <h5>Title Banco</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, veniam!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, veniam!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, veniam!
                    </p>
                  </section>
                </section>
                <section>
                  <h3 className="colorSecondary chelseaFont">SINPE MÓVIL</h3>
                  <section>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, veniam!
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className="container-section py-10 my-5">
          <section className="grid-2">
            <section>
              <HeaderComponets
                src="/images/fondo1.png"
                classNameText={"colorVerde chelseaFont pt-10 mt-10 "}
                alignment="start"
              >
                OTRAS AYUDAS
              </HeaderComponets>
              <BasicSection
                classNameTitle={""}
                classNameWrapper={"setionStyleTwo"}
                title={""}
                classNameContent={"fuentesParrafo py-10"}
              >
                <h3 className="colorVerde chelseaFont">AMAZON WISH LIST</h3>
                <p className="py-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum amet repellat exercitationem aliquid quae totam, id,
                  labore cumque sapiente dicta dolore neque cupiditate debitis
                  voluptatem consequatur aut, mollitia saepe esse excepturi
                  iusto quas beatae! Repudiandae dignissimos aspernatur labore
                  obcaecati iure perspiciatis, aperiam fugiat est nobis hic quae
                  vero expedita iusto, fuga consectetur quibusdam ut pariatur
                  assumenda quos. Cupiditate, magnam voluptas?
                </p>
                <ButtonView
                  className={" backgroundVerde m-0 manropeFont p-5"}
                  link={""}
                >
                  Amazon Wishlist
                </ButtonView>
              </BasicSection>
            </section>
            <section></section>
          </section>
        </section>
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
              <ButtonView
                className={" backgroundPrimary m-0 px-10 manropeFont py-10"}
                link={""}
              >
               Descargar PDF
              </ButtonView>
            </BasicSection>
          </section>
        </section>
      </div>
    </Main>
  );
};

export default ApoyanosPage;
