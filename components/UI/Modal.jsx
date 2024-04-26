import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import NavigationSlider from "./Slider/NavigationSlider";
import CloseIcon from "../Icons/CloseIcon";
import ButtonView from "../../views/ButtonView";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import CanvasModel from "../Canvas/CanvasModel";
import { Puma } from "../Models/Puma";
import SelectedModels from "../Models/SelectedModels";
import { useRouter } from "next/router";
import useScreenSize from "../../hooks/useScreenSize";
import { obtenerFrase } from "../../lang/traducciones";

export default function Modal({ showModal, setShowModal, data }) {
  const [showModel, setShowModel] = useState(false); // Nuevo estado para controlar si se muestra el modelo

  const handleCloseModal = () => {
    setShowModal(false);
    setShowModel(false);
  };

  const handleShowModel = () => {
    setShowModel(true);
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };
  const router = useRouter();
  const { slug, lang } = router.query;
  const { screenSize } = useScreenSize();
  return (
    <>
      {showModal && (
        <>
          <div
            onClick={handleBackgroundClick}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <section className="container-section mask-background ">
              <section className="modelShowItem  py-5">
                {/* esto en dispositivos mobiles esta oculto esto es lo que necesito que se muestre en este caso con la clase wrapperModel */}
                <section className={`wrapperModel ${showModel ? "show" : ""}`}>
                  <button
                    type="button"
                    className={`btnClose blockMobile colorPrimary  box-content  rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none absolute  right-4`}
                    data-te-modal-dismiss={true}
                    aria-label="Close"
                    onClick={handleCloseModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <SelectedModels
                    modelX={data?.modelX}
                    modelY={data?.modelY}
                    modelZ={data?.modelZ}
                    intensity={data?.modelIntensity}
                    modelo={data?.modelo3d}
                    componentName={data?.componente}
                  />
                </section>
                <div
                  className={`relative w-auto my-6 mx-auto max-w-3xl modelShowItem ${
                    showModel ? "hide" : ""
                  }`}
                >
                  <button
                    type="button"
                    className={`btnClose colorPrimary   box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none absolute top-0 right-0`}
                    data-te-modal-dismiss={true}
                    aria-label="Close"
                    onClick={handleCloseModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="conte border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-[600px] w-[400px] overflow-y-auto flex-col">
                    <div className="flex-grow overflow-y-auto">
                      <NavigationSlider slides={data?.imagenes} />
                    </div>
                    <div className="relative p-6 flex-auto overflow-y-auto">
                      <div className="conte1 headeModal">
                        <section className="w-full">
                          <h2 className="chelseaFont colorPrimary fontSize24">
                            {data?.nombre}
                          </h2>
                          <div className="flex flex-col sm:flex-row my-2">
                            <p className="fontSize24">{data?.especie}</p>{" "}
                            <span className="fontSize24 px-1 mx-1 blockDestok">|</span>
                            <p className="fontSize24 curvisa">
                              {data?.nombreCientifico}
                            </p>
                          </div>
                        </section>
                        <ButtonView
                          className={"backgroundPrimary m-0 manropeFont p-5"}
                          link={`${lang}/donations?params=` + data?.slug}
                          blank={true}
                        >
                          {obtenerFrase(lang, "ApoyarAnimal")}
                        </ButtonView>
                        <span
                          className="blockMobile btnPrimary py-2 backgroundPrimary my-2 manropeFont"
                          onClick={handleShowModel}
                        >
                           {obtenerFrase(lang, "verModelo")}
                        </span>
                      </div>
                      <ReactMarkdown>{data?.descripcion}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
