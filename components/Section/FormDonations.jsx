import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

const FormDonations = ({ typeDonations, result }) => {
  const [dateDonations, setDateDonations] = useState(null);
  const [dateDonationsInfo, setDateDonationsInfo] = useState(null);
  const [typeSponsorship, setTypeSponsorship] = useState(1);
  const [filterForTypeDonation, setFilterForTypeDonation] = useState(null); // Definición del estado
  const [monto, setMonto] = useState(null);
  const [especies, setEspecies] = useState(null);
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

  useEffect(() => {
    const selectedDonation = watch("donations");
    setDateDonations(
      typeDonations.find(
        (typeDonation) => typeDonation.titulo === selectedDonation
      )
    );

    const filterElements = result.filter(
      (element) =>
        element.tipo_de_donacions.data[0].attributes.titulo === selectedDonation
    );
    setFilterForTypeDonation(filterElements);
    setEspecies(null);
  }, [watch("donations"), result, typeDonations]);

  const handleRadioChange = (newValue) => {
    setMonto(newValue.monto * typeSponsorship);
    setDateDonationsInfo(newValue);
    setEspecies(newValue?.modelos?.data);
  };

  const handleSponsorshipChange = (event) => {
    const selectedValue = event.target.value;
    setTypeSponsorship(
      selectedValue === "monthlySponsorship"
        ? 1
        : selectedValue === "semiAnnualSponsorship"
        ? 6
        : 12
    );
    if (dateDonationsInfo) {
      setMonto(
        dateDonationsInfo.monto *
          (selectedValue === "monthlySponsorship"
            ? 1
            : selectedValue === "semiAnnualSponsorship"
            ? 6
            : 12)
      );
    }
  };

  const onSubmit = handleSubmit(async (value) => {
    console.log(value.name);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newElement),
      });
      console.log(response, "responses");
      if (response.status === 201) {
        const data = response.data;
        // toast.success("Reservation successfully");
        reset();
        // router.push("/");
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.log(error, "error");
    }
  });

  return (
    <form onSubmit={onSubmit} className="styleForm">
      <div className="formInputs">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className={`w-full border p-2 rounded`}
            {...register("name", {
              required: {
                value: true,
                message: "The Name field is required",
              },
            })}
          />
          {errors.name && <div>{errors.name.message}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            className={`w-full border p-2 rounded`}
            {...register("email", {
              required: {
                value: true,
                message: "The Email field is required",
              },
            })}
          />
          {errors.name && <div>{errors.name.message}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="donations" className="block font-semibold mb-1">
            Tipo de Donacion :
          </label>
          <select
            id="requiereGuia"
            name="requiereGuia"
            {...register("donations")}
            className={`w-full border p-2 rounded ${
              errors.requiereGuia ? "border-red-500" : ""
            }`}
          >
            <option>Selecccione una opcion</option>
            {typeDonations.map((nameDonation) => (
              <option key={nameDonation.titulo} value={nameDonation.titulo}>
                {nameDonation.titulo}
              </option>
            ))}
          </select>
        </div>
      
        <div className="mb-4">
          <label htmlFor="typeSponsorship" className="block font-semibold mb-1">
            Tipo de Donacion :
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
            <option value="monthlySponsorship">Patrocinio Mensual</option>
            <option value="semiAnnualSponsorship">
            Patrocinio Semestral
            </option>
            <option value="annualSponsorship">Patrocinio Anual</option>
          </select>
        </div>

        {(watch("donations") === "HUELLA" ||
          watch("donations") === "ECOSISTEMA" ||
          watch("donations") === "ESPECIE" ||
          watch("donations") === "HÁBITAT") && (
          <>
            {filterForTypeDonation?.map((element) => (
              <>
                <div class="inline-flex items-center" key={element.donacion}>
                  <label
                    class="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlFor={element.donacion}
                  >
                    <input
                      {...register("donation", {
                        required: {
                          value: true,
                          message: "Donation is required",
                        },
                      })}
                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                      type="radio"
                      name="color"
                      value={JSON.stringify(element)}
                      id={element.donacion}
                      onChange={() => handleRadioChange(element)}
                    />
                    <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
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
                    class="mt-px font-light text-gray-700 cursor-pointer select-none"
                    htmlFor="html"
                  >
                    {element.donacion} ({element.monto}$)
                  </label>
                </div>
              </>
            ))}
          </>
        )}

        {especies?.map((especie) => (
          <>
            <div key={especie.id} class="inline-flex items-center">
              <label
                class="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor={especie?.attributes?.nombre}
              >
                <input
                  {...register("especie", {
                    required: { value: true, message: "Donation is required" },
                  })}
                  type="radio"
                  name="especie"
                  value={JSON.stringify(especie)}
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id={especie?.attributes?.nombre}
                />
                <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                class="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor="html"
              >
                {especie?.attributes.especie} ({especie?.attributes.nombre})
              </label>
            </div>
          </>
        ))}
        {dateDonationsInfo && <p>{monto} $</p>}
        <button
          type="submit"
          style={{
            background: "#6BFF95",
            color: "Black",
            padding: "10px 15px",
            paddingRight: "15px",
            fontWeight: "bold",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </div>
      <div className="resumunForm">
        <h2>Resumen</h2>
        <h2 className="colorPrimary fuenteTitulo ">
        {dateDonations?.titulo}
        </h2>
        <div className="inline">
                      <span className="fontBold">Beneficios </span> :
                      <ReactMarkdown className="fuentesParrafo">
                      {dateDonations?.beneficio}
                      </ReactMarkdown>
                    </div>
        
      </div>
    </form>
  );
};

export default FormDonations;
