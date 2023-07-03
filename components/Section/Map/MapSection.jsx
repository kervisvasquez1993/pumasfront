import React from "react";
import Map from "../../UI/Map";
import style from "./style.module.css";

const MapSection = () => {
 
  return (
    <section className={`${style.sectionMap}`}>
      <section className={style.map}>
        <Map />
      </section>
      <section className={`flex flex-col ${style.sectionContent}`}>
        <section className="">
          <h2 className="font-title text-4xl">HORARIO</h2>
          <p>Lunes a Domingo</p>
          <p>
            <span> De 8:00 AM A 4:00 PM</span> Incluidos los festivos
          </p>
        </section>
        <section className="flex flex-col">
          <h2 className="font-title text-4xl">DIRECCIÓN</h2>
          <p>Cañas, Guacaste</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            officiis quam sapiente quas reiciendis non omnis tempore in
            aspernatur deleniti.
          </p>
        </section>
        <section className="">
          <h2 className="font-title text-4xl">PRECIO</h2>
          <p>
            <span>Nacionales:</span>
          </p>
          <p>
            <span> De 8:00 AM A 4:00 PM</span> Incluidos los festivos
          </p>
        </section>
      </section>
    </section>
  );
};

export default MapSection;
