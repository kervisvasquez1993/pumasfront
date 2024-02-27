import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const FormDonations = ({ typeDonations, filtro }) => {
  console.log(typeDonations, "typeDonations");
  const [dateDonations, setDateDonations] = useState(null);
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
  const selectedDonation = watch("donations");
  // console.log(selectedDonation, "selectedDonation");
  useEffect(() => {
    // console.log(selectedDonation, "selectedDonation");
    setDateDonations(
      typeDonations.find(
        (typeDonation) => typeDonation.titulo === selectedDonation
      )
    );
    console.log(dateDonations?.titulo, "dateDonations");
  }, [selectedDonation]);
  return (
    <>
      <label htmlFor="donations">Type Donation</label>
      <select {...register("donations")}>
        {typeDonations.map((nameDonation) => (
          <option value={nameDonation.titulo}>{nameDonation.titulo}</option>
        ))}
      </select>
      {watch("donations") === "HUELLA" || watch("donations") === "ECOSISTEMA" ||  watch("donations") === "HÁBITAT" &&(
        <select {...register("donation")}>
          {dateDonations?.donaciones?.data.map((element) => (
            <option value={element.attributes.donacion}>
              {element.attributes.donacion}
            </option>
          ))}
          <label>{dateDonations.titulo}</label>
        </select>
      )}
    </>
  );
};

export default FormDonations;
