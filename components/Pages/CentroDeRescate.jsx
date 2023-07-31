import React from "react";
import Main from "../../Layout/Main/Main";
import Section from "../Section/Basic/Section";
import SectionReverse from "../Section/Basic/SectionReverse";
// import Section from "./Section";
// import SectionReverse from "./SectionReverse";

const CentroDeRescate = () => {
  return (
    <Main titlePage={"Centro de Rescate"}>
      <div className="container">
        <Section
          title="Ingreso de animal"
          imageSrc="/images/imgsantuario.png"
          content="Nuestro Centro de Rescate está abierto al público. Aquí es donde se encuentran los animales que no pueden ser liberados nuevamente en la naturaleza por diversas razones, como lesiones físicas que les impiden valerse por sí mismos o porque fueron mantenidos ilegalmente como mascotas y se acostumbraron a vivir con las personas."
        />
        <SectionReverse
          title="Proceso de Rescate"
          imageSrc="/images/imgsantuario.png"
          content="El proceso de rescate es crucial para salvar a los animales en peligro y brindarles un lugar seguro donde puedan recuperarse y recibir atención médica y rehabilitación. Nuestro equipo de expertos trabaja incansablemente para garantizar que cada animal reciba el cuidado adecuado y, cuando sea posible, se les devuelva a su hábitat natural."
        />
        <Section
          title="Adopciones Responsables"
          imageSrc="/images/imgsantuario.png"
          content="Fomentamos la adopción responsable de animales que no pueden regresar a la naturaleza. Cada adopción se realiza después de un cuidadoso proceso de evaluación para garantizar que el animal vaya a un hogar amoroso y adecuado para sus necesidades. ¡Adopta a un nuevo amigo y cambia su vida para siempre!"
        />
        <SectionReverse
          title="Educación y Concientización"
          imageSrc="/images/imgsantuario.png"
          content="La educación y la concientización son fundamentales para proteger la vida silvestre y su hábitat. Nuestro Centro de Rescate ofrece programas educativos para estudiantes y visitantes para aumentar la comprensión y el respeto por los animales y la importancia de su conservación. Juntos, podemos marcar la diferencia."
        />
      </div>
    </Main>
  );
};

export default CentroDeRescate;
