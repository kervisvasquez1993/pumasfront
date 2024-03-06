import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { obtenerFrase } from '../../lang/traducciones'

const FormDonations = ({ typeDonations, result, modelos }) => {
  const [dateDonations, setDateDonations] = useState(null)
  const [typeDonation, setTypeDonation] = useState(null)
  const [dateDonationsInfo, setDateDonationsInfo] = useState(null)
  const [typeSponsorship, setTypeSponsorship] = useState(1)
  const [filterForTypeDonation, setFilterForTypeDonation] = useState(null) // Definición del estado
  const [monto, setMonto] = useState(null)
  const [especies, setEspecies] = useState(null)
  const [especieSeleccionada, setEspecieSeleccionada] = useState(null)
  const [especieSeleccionadaName, setEspecieSeleccionadaName] = useState(null)
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
    setValue,
    getValues,
    watch,
  } = useForm()
  const router = useRouter()
  const { lang } = router.query

  useEffect(() => {
    const selectedDonation = watch('donations')
    setDateDonations(
      typeDonations.find(
        (typeDonation) => typeDonation.titulo === selectedDonation
      )
    )
    
    const filterElements = result.filter(
      (element) =>
        element.tipo_de_donacions.data[0].attributes.titulo === selectedDonation
    )
    setFilterForTypeDonation(filterElements)
    setEspecieSeleccionada(null)
    // console.log()
    setEspecies(null)
  }, [watch('donations'), result, typeDonations])

  const handleRadioChange = (newValue) => {
    setMonto(newValue.monto * typeSponsorship)
    setDateDonationsInfo(newValue)
    setTypeDonation(newValue.donacion)
    setEspecies(newValue?.modelos?.data)
    setEspecieSeleccionada(null)
  }
  const handleRadioChangeEspecies = (newValue) => {
    const findModelo = modelos.data.find((modelo) => modelo.id == newValue.id)
    setEspecieSeleccionadaName(findModelo?.attributes.nombre)
    setEspecieSeleccionada(findModelo?.attributes)
  }

  const handleSponsorshipChange = (event) => {
    const selectedValue = event.target.value
    setTypeSponsorship(
      selectedValue === 'monthlySponsorship'
        ? 1
        : selectedValue === 'semiAnnualSponsorship'
        ? 6
        : 12
    )
    if (dateDonationsInfo) {
      setMonto(
        dateDonationsInfo.monto *
          (selectedValue === 'monthlySponsorship'
            ? 1
            : selectedValue === 'semiAnnualSponsorship'
            ? 6
            : 12)
      )
    }
  }

  const onSubmit = handleSubmit(async (value) => {
    const newElement = {
      type: 'Donación',
      nombre: value.name,
      correo: value.email,
      monto: monto,
      donacion: typeDonation,
      typeSponsorship : value.typeSponsorship,
      nombreEspecie : (especieSeleccionadaName)? especieSeleccionadaName :"no Asignado"
    }
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newElement),
      });

      const data = await res.json();
      console.log(data, "data")
    } catch (error) {
      console.log(error, 'error')
    }
  })

  return (
    <form onSubmit={onSubmit} className='styleForm'>
      <div className='formInputs'>
        <div className='mb-4'>
          <label htmlFor='name' className='block font-semibold mb-1'>
            {obtenerFrase(lang, 'inputNombre')}
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder={obtenerFrase(lang, 'inputNombre').toLowerCase()}
            className={`w-full border p-2 rounded`}
            {...register('name', {
              required: {
                value: true,
                message: 'The Name field is required',
              },
            })}
          />
          {errors.name && <div>{errors.name.message}</div>}
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block font-semibold mb-1'>
            email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='example@example.com'
            className={`w-full border p-2 rounded`}
            {...register('email', {
              required: {
                value: true,
                message: 'The Email field is required',
              },
            })}
          />
          {errors.name && <div>{errors.name.message}</div>}
        </div>

        <div className='mb-4'>
          <label htmlFor='donations' className='block font-semibold mb-1'>
            Categoria de Patrocinio:
          </label>
          <select
            id='requiereGuia'
            name='requiereGuia'
            {...register('donations')}
            className={`w-full border p-2 rounded ${
              errors.requiereGuia ? 'border-red-500' : ''
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

        <div className='mb-4'>
          <label htmlFor='typeSponsorship' className='block font-semibold mb-1'>
            Tipo de patrocinio :
          </label>
          <select
            id='requiereGuia'
            name='requiereGuia'
            {...register('typeSponsorship')}
            onChange={handleSponsorshipChange}
            className={`w-full border p-2 rounded ${
              errors.requiereGuia ? 'border-red-500' : ''
            }`}
          >
            <option value='monthlySponsorship'>Patrocinio Mensual</option>
            <option value='semiAnnualSponsorship'>Patrocinio Semestral</option>
            <option value='annualSponsorship'>Patrocinio Anual</option>
          </select>
        </div>

        {(watch('donations') === 'HUELLA' ||
          watch('donations') === 'ECOSISTEMA' ||
          watch('donations') === 'ESPECIE' ||
          watch('donations') === 'HÁBITAT') && (
          <>
            <label
              htmlFor='typeSponsorship'
              className='block font-semibold mb-1'
            >
              Tipo de Donacion
            </label>
            {filterForTypeDonation?.map((element) => (
              <>
                <div
                  className='inline-flex items-center'
                  key={element.donacion}
                >
                  <label
                    className='relative flex items-center p-3 rounded-full cursor-pointer'
                    htmlFor={element.donacion}
                  >
                    <input
                      {...register('donation', {
                        required: {
                          value: true,
                          message: 'Donation is required',
                        },
                      })}
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                      type='radio'
                      name='color'
                      value={JSON.stringify(element)}
                      id={element.donacion}
                      onChange={() => handleRadioChange(element)}
                    />
                    <span className='absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3.5 w-3.5'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                      >
                        <circle
                          data-name='ellipse'
                          cx='8'
                          cy='8'
                          r='8'
                        ></circle>
                      </svg>
                    </span>
                  </label>
                  <label
                    className='mt-px font-light text-gray-700 cursor-pointer select-none'
                    htmlFor='html'
                  >
                    {element.donacion} ({element.monto}$)
                  </label>
                </div>
              </>
            ))}
          </>
        )}

        {especies && (
          <label htmlFor='typeSponsorship' className='block font-semibold mb-1'>
            Especies
          </label>
        )}
        {especies?.map((especie) => (
          <>
            <div key={especie.id} className='inline-flex items-center'>
              <label
                className='relative flex items-center p-3 rounded-full cursor-pointer'
                htmlFor={especie?.attributes?.nombre}
              >
                <input
                  {...register('especie', {
                    required: { value: true, message: 'Donation is required' },
                  })}
                  type='radio'
                  name='especie'
                  value={JSON.stringify(especie)}
                  onChange={() => handleRadioChangeEspecies(especie)}
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id={especie?.attributes?.nombre}
                />
                <span className='absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                  >
                    <circle data-name='ellipse' cx='8' cy='8' r='8'></circle>
                  </svg>
                </span>
              </label>
              <label
                className='mt-px font-light text-gray-700 cursor-pointer select-none'
                htmlFor='html'
              >
                {especie?.attributes?.especie} ({especie?.attributes?.nombre})
              </label>
            </div>
          </>
        ))}
        {/* {} */}
        <button
          type='submit'
          style={{
            background: '#e86641',
            color: 'White',
            padding: '10px 15px',
            paddingRight: '15px',
            fontWeight: 'bold',
            borderRadius: '5px',
            marginTop: '10px',
          }}
          className='block w-full md:w-auto'
        >
          Submit
        </button>
      </div>
      <div className='resumunForm'>
        <figure className='lg:p-1 p-1 m-10 imagenResumen center'>
          {dateDonations?.imagen?.data?.attributes?.url ? (
            <Image
              src={dateDonations?.imagen?.data?.attributes?.url}
              width={1000}
              height={1000}
            />
          ) : (
            ''
          )}
        </figure>
        <h2 className='colorPrimary fuenteTitulo text-center '>
          {dateDonations?.titulo}
        </h2>

        <div className='inline'>
          <ReactMarkdown className='fuentesParrafo text-center'>
            {dateDonations?.beneficio}
          </ReactMarkdown>
        </div>
        {dateDonationsInfo?.donacion && (
          <h2 className='fuenteTitulo text-center my-5'>
            Donacion : {dateDonationsInfo?.donacion}
          </h2>
        )}

        {especieSeleccionada && (
          <>
            <h2 className='colorPrimary fuenteTitulo text-center '>
              Detalle de Especie
            </h2>
            <figure className='lg:p-1 p-1 center'>
              {especieSeleccionada?.imagenes.data[0].attributes.url ? (
                <Image
                  src={especieSeleccionada?.imagenes.data[0].attributes.url}
                  width={1000}
                  height={1000}
                />
              ) : (
                ''
              )}
            </figure>
            <div className='flex-title my-5'>
              <h2 className='fuenteTitulo text-center '>
                Nombre : {especieSeleccionada?.nombre}
              </h2>
              <h2 className='fuenteTitulo text-center '>
                Especie : {especieSeleccionada?.especie}
              </h2>
            </div>

            <h2 className='fuentesParrafo text-center'>
              Descripcion : {especieSeleccionada?.descripcion}
            </h2>
            {/* {console.log(
              especieSeleccionada?.imagenes.data[0].attributes.url,
              "descripcion"
            )} */}
          </>
        )}
        {dateDonationsInfo && (
          <h2 className='fuenteTitulo text-center '>Monto : {monto}$</h2>
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
    </form>
  )
}

export default FormDonations
