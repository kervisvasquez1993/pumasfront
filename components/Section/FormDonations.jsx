import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

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
    console.log(value.name)
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
    <form onSubmit={onSubmit}>
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
      <label htmlFor="donations">Type Donation</label>
      <select {...register("donations")}>
        <option>Selecccione una opcion</option>
        {typeDonations.map((nameDonation) => (
          <option key={nameDonation.titulo} value={nameDonation.titulo}>
            {nameDonation.titulo}
          </option>
        ))}
      </select>
      <select
        {...register("typeSponsorship")}
        onChange={handleSponsorshipChange}
      >
        <option value="monthlySponsorship">Monthly Sponsorship</option>
        <option value="semiAnnualSponsorship">Semi-Annual Sponsorship</option>
        <option value="annualSponsorship">Annual Sponsorship</option>
      </select>

      {(watch("donations") === "HUELLA" ||
        watch("donations") === "ECOSISTEMA" ||
        watch("donations") === "ESPECIE" ||
        watch("donations") === "HÁBITAT") && (
        <>
          <p>{dateDonations?.titulo}</p>
          <p>{dateDonations?.beneficio}</p>
          {filterForTypeDonation?.map((element) => (
            <div key={element.donacion} style={{ padding: "10px" }}>
              <label htmlFor={element.donacion}>
                <input
                  {...register("donation", {
                    required: { value: true, message: "Donation is required" },
                  })}
                  type="radio"
                  name="color"
                  value={JSON.stringify(element)}
                  id={element.donacion}
                  onChange={() => handleRadioChange(element)}
                />
                {element.donacion} - {element.monto}
              </label>
            </div>
          ))}
        </>
      )}

      {dateDonationsInfo && <p>{monto}</p>}
      {especies?.map((especie) => (
        <div key={especie.id} style={{ padding: "10px" }}>
          <label htmlFor={especie?.attributes?.nombre}>
            <input
              {...register("especie", {
                required: { value: true, message: "Donation is required" },
              })}
              type="radio"
              name="especie"
              value={JSON.stringify(especie)}
              id={especie?.attributes?.nombre}
            />
            {especie?.attributes.nombre} - {especie?.attributes.especie}
          </label>
        </div>
      ))}
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
    </form>
  );
};

export default FormDonations;
