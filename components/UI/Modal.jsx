import React from "react";
import NavigationSlider from "./Slider/NavigationSlider";
import CloseIcon from "../Icons/CloseIcon";
import ButtonView from "../../views/ButtonView";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import CanvasModel from "../Canvas/CanvasModel";
import { Puma } from "../Models/Puma";
import SelectedModels from "../Models/SelectedModels";

export default function Modal({ showModal, setShowModal, data }) {
  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(data?.componente, "data desde modal");
  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <TwoColumnGrid>
              <section className="wrapperModel">
                
                  <SelectedModels modelo={data.modelo3d} componentName={data?.componente} />
              
              </section>
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <button
                  type="button"
                  className="btnClose color-white box-content  rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none absolute  right-4"
                  data-te-modal-dismiss
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <NavigationSlider slides={data?.imagenes} />
                  <div className="relative p-6 flex-auto">
                    <div className="headeModal">
                      <section>
                        <h2 className="chelseaFont colorPrimary fontSize24">
                          {data?.nombre}
                        </h2>
                        <div className="flex my-2">
                          <p className="fontSize24">{data?.especie}</p>{" "}
                          <span className="fontSize24 px-1 mx-1">|</span>
                          <p className="fontSize24">{data?.nombreCientifico}</p>
                        </div>
                      </section>
                      <ButtonView
                        className={" backgroundPrimary m-0 manropeFont p-5"}
                        link={"/es/donations?params=" + data?.slug}
                      >
                        Apoyar Animal
                      </ButtonView>
                    </div>
                    {data?.descripcion}
                  </div>
                </div>
              </div>
            </TwoColumnGrid>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
