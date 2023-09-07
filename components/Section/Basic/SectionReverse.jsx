const SectionReverse = ({
  title,
  positionTitle,
  imageSrc,
  content,
  titleClassName = "",
  contentClassName = "",
}) => {
  // Función para obtener la clase CSS de alineación del texto
  const getTextAlignClass = (position) => {
    switch (position) {
      case "start":
        return "text-align-start";
      case "center":
        return "text-align-center";
      case "end":
        return "text-align-end";
      default:
        return "";
    }
  };

  // Obtenemos la clase CSS de alineación del texto
  const textAlignClass = getTextAlignClass(positionTitle);

  return (
    <div className="container-section p-10 m-10">
      <div className={`grid-2 ${textAlignClass}`}>
        <div className={`about-section_text ${contentClassName}`}>
          <h3 className={`${titleClassName} section-title`}>{title}</h3>
          <p className="fuentesParrafo">{content}</p>
        </div>
        <div className="py-10">
          <img src={imageSrc} alt="Imagen de la sección" />
        </div>
      </div>
    </div>
  );
};

export default SectionReverse;
