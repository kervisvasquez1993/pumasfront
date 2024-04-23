import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { obtenerFrase } from "../../lang/traducciones";
import { ToastContainer, toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

const FormDonationSpecies = ({ filterSpecie, typeDonations }) => {

    const dataInfo = typeDonations?.find(donation => donation.titulo == 'ESPECIE' || donation.titulo == 'SPECIES')

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
            categoriaPatrocinio: 'value',
            donacion: 'typeDonation',
            donacionesHuella: 'dateDonations',
            typeSponsorship: 'typeSponsorship',
            nombreEspecie: filterSpecie.titulo
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
            setSelectedElements([])
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
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold mb-1">
                            {obtenerFrase(lang, "inputNombre")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder={obtenerFrase(lang, "inputNombre").toLowerCase()}
                            className={`w-full p-2 rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "The Name field is required",
                                },
                            })}
                        />
                        {errors.name && <div className="text-red-500">{errors.name.message}</div>}
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
                            className={`w-full p-2 rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "The Email field is required",
                                },
                            })}
                        />
                        {errors.email && <div className="text-red-500">{errors.email.message}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="monto" className="block font-semibold mb-1">
                            Monto
                        </label>
                        <input
                            type="number"
                            id="monto"
                            name="monto"
                            placeholder="20$"
                            className={`w-full p-2 rounded ${errors.monto ? 'border-red-500' : 'border-gray-300'}`}
                            {...register("monto", {
                                required: {
                                    value: true,
                                    message: "The Monto field is required",
                                },
                            })}
                        />
                        {errors.email && <div className="text-red-500">{errors.monto.message}</div>}
                    </div>
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
                                Nombre : {filterSpecie[0]?.nombre}
                            </h2>
                            <h2 className="fuenteTitulo text-center ">
                                Especie : {filterSpecie[0]?.especie}
                            </h2>
                        </div>

                        <h2 className="fuentesParrafo text-center">
                            Descripción : {filterSpecie[0]?.descripcion}
                        </h2>

                    </>
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

                        {loadingForm ? "Loading" : obtenerFrase(lang, 'enviarMensaje')}
                    </button>
                </div>
            </form>
        </>
    );
};


export default FormDonationSpecies;
