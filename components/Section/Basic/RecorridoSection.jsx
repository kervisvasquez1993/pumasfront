const RecorridoSection = ({ title, content }) => {
  return (
    <div className="container-rout">
      <div className="grid-2">
        <h3 className="rout-title">{title}</h3>
        <div className="rout_text">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecorridoSection;
