const SectionWithImage = ({ title, imageSrc, content }) => {
  return (
    <div className="container-sactuary">
      <h3 className="sanctuary-title">{title}</h3>
      <div className="grid-2">
        <div className="sanctuary__imagen">
          <img src={imageSrc} alt={`imagen ${title}`} />
        </div>
        <div className="about-sanctuary_text">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SectionWithImage;
