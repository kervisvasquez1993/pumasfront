import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { obtenerFrase } from "../../lang/traducciones";
import { ToastContainer, toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const FormDonationSpecies = ({ filterSpecie, typeDonations, donaciones }) => {
  const dataInfo = typeDonations?.find(
    (donation) => donation.titulo == "ESPECIE" || donation.titulo == "SPECIES"
  );
  console.log(donaciones, "dataInfo");
  const [dateDonations, setDateDonations] = useState(null);
  const [typeDonation, setTypeDonation] = useState(null);
  const [dateDonationsInfo, setDateDonationsInfo] = useState(null);

  const [filterForTypeDonation, setFilterForTypeDonation] = useState(null); // Definición del estado
  const [monto, setMonto] = useState(null);

  const [especies, setEspecies] = useState(null);
  const [especieSeleccionada, setEspecieSeleccionada] = useState(null);
  const [especieSeleccionadaName, setEspecieSeleccionadaName] = useState(null);
  const [selectedElements, setSelectedElements] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [loadingForm, setLoadingForm] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
    setValue,
    getValues,
    watch,
  } = useForm();
  const router = useRouter();
  const { lang } = router.query;
  const formRef = useRef(null);

  const onSubmit = handleSubmit(async (value) => {
    setLoadingForm(true);
    const newElement = {
      type: "Donación",
      nombre: value.name,
      correo: value.email,
      monto: value.monto,
      categoriaPatrocinio: "value",
      donacion: "typeDonation",
      donacionesHuella: "dateDonations",
      typeSponsorship: "typeSponsorship",
      nombreEspecie: filterSpecie.titulo,
    };
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newElement),
      });

      const data = await res.json();

      // Reset the form after successful submission
      formRef.current.reset();
      setEspecies(null);
      setDateDonations(null);
      setDateDonationsInfo(null);
      setEspecieSeleccionada(null);
      setFilterForTypeDonation(null);
      setSelectedElements([]);
      setLoadingForm(false);
      toast.success(obtenerFrase(lang, "successMensaje"));
    } catch (error) {
      console.log(error, "error");
      setLoadingForm(false);
    }
  });

  return (
    <>
      <div>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <form onSubmit={onSubmit} className="styleForm" ref={formRef}>
        <div className="formInputs">
          <>
            <h2 className="colorPrimary fuenteTitulo text-center ">
              {obtenerFrase(lang, "detallesDeESpecie")}
            </h2>
            <figure className="lg:p-1 p-1 center">
              {filterSpecie[0]?.imagenes[0]?.url ? (
                <Image
                  src={filterSpecie[0]?.imagenes[0].url}
                  width={1000}
                  height={1000}
                />
              ) : (
                ""
              )}
            </figure>
            <div className="flex-title my-5">
              <h2 className="fuenteTitulo text-center ">
                {obtenerFrase(lang, "nombre")} : {filterSpecie[0]?.nombre}
              </h2>
              <h2 className="fuenteTitulo text-center ">
                {obtenerFrase(lang, "especie")} : {filterSpecie[0]?.especie}
              </h2>
            </div>

            <h2 className="fuentesParrafo text-center">
              {obtenerFrase(lang, "descripcionForm")} :{" "}
              {filterSpecie[0]?.descripcion}
            </h2>
            <h3 className="program-title fuenteTitulo colorPrimary sm:mx-10 sm:px-10">
              {obtenerFrase(lang, "ApoyarAnimal")}
            </h3>
            <div className="py-4 mx-10 block">
              {donaciones?.map((eleme, index) => {
                return (
                  <Link
                    className={
                      "backgroundVerde m-2 manropeFont p-5 btnPrimary py-2 block md:inline-block"
                    }
                    href={eleme?.url}
                    target="_blank"
                    key={index}
                  >
                    {eleme?.label}
                  </Link>
                );
              })}
            </div>
          </>
        </div>
        <div className="resumunForm">
          <figure className="lg:p-1 p-1 m-10 imagenResumen center">
            {dataInfo?.imagen?.data?.attributes?.url ? (
              <Image
                src={dataInfo.imagen.data.attributes.url}
                alt="imagen de donacion"
                width={1000}
                height={1000}
              />
            ) : (
              ""
            )}
          </figure>
          <h2 className="colorPrimary fuenteTitulo text-center ">
            {dataInfo?.titulo}
          </h2>
          <div className="inline">
            <ReactMarkdown className="fuentesParrafo text-center px-10">
              {dataInfo?.beneficio}
            </ReactMarkdown>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormDonationSpecies;
