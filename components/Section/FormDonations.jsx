import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { obtenerFrase } from "../../lang/traducciones";
import ItemDonations from "../UI/Donations/ItemDonations";
import { ToastContainer, toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

const FormDonations = ({ typeDonations, result, modelos }) => {
  const [dateDonations, setDateDonations] = useState(null);
  const [typeDonation, setTypeDonation] = useState(null);
  const [dateDonationsInfo, setDateDonationsInfo] = useState(null);
  const [typeSponsorship, setTypeSponsorship] = useState(1);
  const [filterForTypeDonation, setFilterForTypeDonation] = useState(null); // Definición del estado
  const [monto, setMonto] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [especies, setEspecies] = useState(null);
  const [especieSeleccionada, setEspecieSeleccionada] = useState(null);
  const [especieSeleccionadaName, setEspecieSeleccionadaName] = useState(null);
  const [selectedElements, setSelectedElements] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [preciosHabitad, setPreciosHabitad] = useState([]);
  const [preciosHabitadSeleccionada, setPreciosHabitadSeleccionada]  = useState("");
  const [loadingForm, setLoadingForm] = useState(false);
  const [sponsorship, seSponsorship] = useState("");
  // console.log(result,"result")
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

  useEffect(() => {
    const selectedDonation = watch("donations");
    setDateDonations(
      typeDonations.find(
        (typeDonation) => typeDonation.titulo === selectedDonation
      )
    );

    const filterElements = result.filter(
      (element) =>
        element?.tipo_de_donacions?.data[0]?.attributes?.titulo ===
        selectedDonation
    );
    

    setFilterForTypeDonation(filterElements);
    setEspecieSeleccionada(null);

    setEspecies(null);
    setMonto(null);
    setSelectedNames([]);
    setDateDonationsInfo(null);
    setSelectedItems([]);
    setPreciosHabitadSeleccionada("")
    setPreciosHabitad([])
  }, [watch("donations"), result, typeDonations]);


  const handleSelectionPrecioChange = (event) => {
    setPreciosHabitadSeleccionada(event.target.value);
  };

  const handleItemToggle = (itemId) => {
    let newSelectedItems;
    if (selectedItems.includes(itemId)) {
      newSelectedItems = selectedItems.filter((id) => id !== itemId);
    } else {
      newSelectedItems = [...selectedItems, itemId];
    }
    setSelectedItems(newSelectedItems);

    const newSelectedElements = filterForTypeDonation.filter((item) =>
      newSelectedItems.includes(item.id)
    );
    setSelectedElements(newSelectedElements);
  };

  useEffect(() => {
    const totalMonto = selectedElements.reduce(
      (total, item) => total + Number(item.monto),
      0
    );
    setMonto(totalMonto);

    const names = selectedElements.map((item) => item.donacion);
    setSelectedNames(names);
  }, [selectedElements]);

  const handleRadioChange = (newValue) => {
    setMonto(getDonationAmount(newValue, sponsorship))
    console.log(newValue);
    setPreciosHabitadSeleccionada("")
    setPreciosHabitad([])
    setPreciosHabitad(newValue?.precios);
    setDateDonationsInfo(newValue);
    setTypeDonation(newValue.donacion);
    setEspecies(newValue?.modelos?.data);
    setEspecieSeleccionada(null);
  };
  const handleRadioChangeEspecies = (newValue) => {
    setPreciosHabitadSeleccionada("")
    const findModelo = modelos.data.find((modelo) => modelo.id == newValue.id);
    console.log(findModelo, "findModelo");
    setEspecieSeleccionadaName(findModelo?.attributes.nombre);
    

    setEspecieSeleccionada(findModelo?.attributes);
  };

  const handleSponsorshipChange = (event) => {
    seSponsorship(event.target.value);
  };

  const onSubmit = handleSubmit(async (value) => {
    setLoadingForm(true);
    const newElement = {
      type: "Donación",
      nombre: value.name,
      correo: value.email,
      monto: monto,
      categoriaPatrocinio: value.donations,
      donacion: typeDonation,
      donacionesHuella: selectedElements?.map((elemento) => elemento?.donacion),
      typeSponsorship: value.typeSponsorship,
      nombreEspecie: especieSeleccionadaName
        ? especieSeleccionadaName
        : "no Asignado",
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
  const getDonationAmount = (element, sponsorshipType) => {
    switch (sponsorshipType) {
      case "monthlySponsorship":
        return element.monto;
      case "semiAnnualSponsorship":
        return element.monto_semestral;
      case "annualSponsorship":
        return element.monto_anual;
      default:
        return element.monto;
    }
  };
  

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
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              {obtenerFrase(lang, "inputNombre")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={obtenerFrase(lang, "inputNombre").toLowerCase()}
              className={`w-full p-2 rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", {
                required: {
                  value: true,
                  message: "The Name field is required",
                },
              })}
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              {obtenerFrase(lang, "email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              className={`w-full p-2 rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: {
                  value: true,
                  message: "The Email field is required",
                },
              })}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="donations" className="block font-semibold mb-1">
              {obtenerFrase(lang, "categoriaPatrocinadores")}
            </label>
            <select
              id="donations"
              name="donations"
              {...register("donations", {
                required: {
                  value: true,
                  message: "El campo de categoría de patrocinio es requerido",
                },
                validate: (value) =>
                  value !== "" ||
                  "El campo de categoría de patrocinio es requerido",
              })}
              className={`w-full p-2 rounded ${
                errors.donations ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Selecccione una opcion</option>
              {typeDonations.map((nameDonation) => (
                <option key={nameDonation.titulo} value={nameDonation.titulo}>
                  {nameDonation.titulo}
                </option>
              ))}
            </select>
            {errors.donations && (
              <div className="text-red-500">{errors.donations.message}</div>
            )}
          </div>
          {(watch("donations") != "HUELLA" ||
            watch("donations") != "FOOTPRINT") && (
            <div className="mb-4">
              <label
                htmlFor="typeSponsorship"
                className="block font-semibold mb-1"
              >
                {obtenerFrase(lang, "tipoPatrocinadores")}:
              </label>
              <select
                id="requiereGuia"
                name="requiereGuia"
                {...register("typeSponsorship")}
                onChange={handleSponsorshipChange}
                className={`w-full border p-2 rounded ${
                  errors.requiereGuia ? "border-red-500" : ""
                }`}
              >
                <option value="monthlySponsorship">
                  {obtenerFrase(lang, "patrocinioMensual")}
                </option>
                <option value="semiAnnualSponsorship">
                  {obtenerFrase(lang, "patrocinioSemestral")}
                </option>
                <option value="annualSponsorship">
                  {" "}
                  {obtenerFrase(lang, "patrocinioAnual")}
                </option>
              </select>
            </div>
          )}

          {(watch("donations") === "HUELLA" ||
            watch("donations") === "ECOSISTEMA" ||
            watch("donations") === "ESPECIE" ||
            watch("donations") === "HÁBITAT" ||
            watch("donations") === "FOOTPRINT" ||
            watch("donations") === "ECOSYSTEM" ||
            watch("donations") === "SPECIES" ||
            watch("donations") === "HABITAT") && (
            <>
              <label
                htmlFor="typeSponsorship"
                className="block font-semibold mb-1"
              >
                {obtenerFrase(lang, "tipoDeDonacion")}
                {console.log(
                  filterForTypeDonation,
                  "filterForTypeDonation desde "
                )}
              </label>
              {watch("donations") === "HUELLA" ||
               watch("donations") === "FOOTPRINT" ? (
                <section className="flex flex-wrap">
                  {filterForTypeDonation &&
                    Object.entries(
                      filterForTypeDonation
                        .sort((a, b) => Number(b.monto) - Number(a.monto))
                        .reduce((acc, curr) => {
                          if (!acc[curr.monto]) {
                            acc[curr.monto] = [];
                          }
                          acc[curr.monto].push(curr);
                          return acc;
                        }, {})
                    ).map(([monto, items], index) => (
                      <div key={index} className="monto-group">
                        <h2 className="monto-title text-3xl font-bold colorPrimary fuenteTitulo text-center px-10">
                          {monto}$
                        </h2>
                        <div className="items-container">
                          {items.map((element, index) => (
                            <div key={index} className="item">
                              <ItemDonations
                                data={element}
                                selected={selectedItems.includes(element.id)}
                                onClick={() => handleItemToggle(element.id)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </section>
              ) : (
                ""
              )}

              {watch("donations") === "ESPECIE" &&
                filterForTypeDonation?.map((element) => (
                  <div
                    className="inline-flex items-center"
                    key={element.donacion}
                  >
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor={element.donacion}
                    >
                      <input
                        {...register("donation", {
                          required: {
                            value: true,
                            message: "Donation is required",
                          },
                        })}
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        type="radio"
                        name="color"
                        value={JSON.stringify(element)}
                        id={element.donacion}
                        onChange={() => handleRadioChange(element)}
                      />
                      <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px font-light text-gray-700 cursor-pointer select-none"
                      htmlFor="html"
                    >
                      {element.donacion} ({getDonationAmount(element, sponsorship)}$)
                    </label>
                  </div>
                ))}

              {watch("donations") === "HÁBITAT" &&
                filterForTypeDonation?.map((element) => (
                  <div
                    className="inline-flex items-center"
                    key={element.donacion}
                  >
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor={element.donacion}
                    >
                      <input
                        {...register("donation", {
                          required: {
                            value: true,
                            message: "Donation is required",
                          },
                        })}
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        type="radio"
                        name="color"
                        value={JSON.stringify(element)}
                        id={element.donacion}
                        onChange={() => handleRadioChange(element)}
                      />
                      <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px font-light text-gray-700 cursor-pointer select-none"
                      htmlFor="html"
                    >
                      {element.donacion} 
                    </label>
                  </div>
                ))}
            </>
          )}

          {especies && (
            <label
              htmlFor="typeSponsorship"
              className="block font-semibold mb-1"
            >
              {obtenerFrase(lang, "Especies")}
            </label>
          )}
          {especies?.map((especie) => (
            <>
              <div key={especie.id} className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor={especie?.attributes?.nombre}
                >
                  <input
                    {...register("especie", {
                      required: {
                        value: true,
                        message: "Donation is required",
                      },
                    })}
                    type="radio"
                    name="especie"
                    value={JSON.stringify(especie)}
                    onChange={() => handleRadioChangeEspecies(especie)}
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id={especie?.attributes?.nombre}
                  />
                  <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px font-light text-gray-700 cursor-pointer select-none"
                  htmlFor="html"
                >
                  {especie?.attributes?.nombre}
                  {console.log(especie)}
                </label>
              </div>
            </>
          ))}
          {preciosHabitad.length > 0 && (
            <>   
              <label
                htmlFor="typeSponsorship"
                className="block font-semibold mb-1"
              >
                Tipo de donacion
              </label>
         
            <select
              id="requiereGuia"
              name="requiereGuia"
              {...register("typeSponsorship")}
              onChange={handleSelectionPrecioChange}
              value={preciosHabitadSeleccionada}
              className={`w-full border p-2 rounded ${
                errors.requiereGuia ? "border-red-500" : ""
              }`}
            >
              {preciosHabitad.map((option) => (
                <option key={option.id} value={option.monto}>
                  {option.label} - {option.monto}
                </option>
              ))}
            </select>
            </>
          )}
        </div>
        <div className="resumunForm">
          <figure className="lg:p-1 p-1 m-10 imagenResumen center">
            {dateDonations?.imagen?.data?.attributes?.url ? (
              <Image
                src={dateDonations?.imagen?.data?.attributes?.url}
                alt="imagen de donacion"
                width={1000}
                height={1000}
              />
            ) : (
              ""
            )}
          </figure>
          <h2 className="colorPrimary fuenteTitulo text-center ">
            {dateDonations?.titulo}
          </h2>

          <div className="inline">
            <ReactMarkdown className="fuentesParrafo text-center px-10">
              {dateDonations?.beneficio}
            </ReactMarkdown>
          </div>
          {dateDonationsInfo?.donacion && (
            <h2 className="fuenteTitulo text-center my-5">
              {obtenerFrase(lang, "donacion")} : {dateDonationsInfo?.donacion}
            </h2>
          )}

          {selectedNames &&
            selectedNames?.map((donacion, index) => {
              return (
                <h2 key={index} className="fuenteTitulo text-center py-1 ">
                  {obtenerFrase(lang, "donacion")} : {donacion}
                </h2>
              );
            })}

          {especieSeleccionada && (
            <>
              <h2 className="colorPrimary fuenteTitulo text-center ">
                {obtenerFrase(lang, "detallesDeESpecie")}
              </h2>
              <figure className="lg:p-1 p-1 center">
                {especieSeleccionada?.imagenes?.data[0]?.attributes.url ? (
                  <Image
                    src={especieSeleccionada?.imagenes?.data[0]?.attributes.url}
                    width={1000}
                    height={1000}
                    alt="imagen de especie"
                  />
                ) : (
                  ""
                )}
              </figure>
              <div className="flex-title my-5">
                <h2 className="fuenteTitulo text-center ">
                  Nombre : {especieSeleccionada?.nombre}
                </h2>
                <h2 className="fuenteTitulo text-center ">
                  Especie : {especieSeleccionada?.especie}
                </h2>
              </div>

              <h2 className="fuentesParrafo text-center">
                Descripcion : {especieSeleccionada?.descripcion}
              </h2>
            </>
          )}
          {monto ? (
            <h2 className="fuenteTitulo text-center ">
              {obtenerFrase(lang, "monto")} : {monto}$
            </h2>
          ) : (
            ""
          )}

          {/* <figure className="lg:p-1 p-1 m-10 imagenResumen center">
          {dateDonationsInfo?.imgSrc?.data?.attributes?.url ? (
            <Image
              src={dateDonationsInfo?.imgSrc?.data?.attributes?.url}
              width={1000}
              height={1000}
            />
          ) : 
            ""}
        </figure> */}
        </div>
        <div className="submit-button-container">
          <button
            type="submit"
            style={{
              background: "#e86641",
              color: "White",
              padding: "10px 15px",
              paddingRight: "15px",
              fontWeight: "bold",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            className="block w-full md:w-auto"
          >
            {loadingForm ? "Loading" : obtenerFrase(lang, "enviarMensaje")}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormDonations;
