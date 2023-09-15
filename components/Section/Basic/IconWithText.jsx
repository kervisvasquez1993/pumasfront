const IconWithText = ({ imageSrc, text }) => {
  return (
    <div className="flex-2">
      <div className="icons__imagen">
        <img src={imageSrc} alt={`imagen santuario`} />
      </div>
      <div className="icons_text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default IconWithText