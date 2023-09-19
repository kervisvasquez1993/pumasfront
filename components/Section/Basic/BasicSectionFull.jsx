import React from 'react';
import ReactMarkdown from 'react-markdown';

const BasicSectionFull = ({ title, content, imageUrl }) => {
  return (
    <div className="container-program">
      <h3 className="program-title fuenteTitulo colorPrimary sm:mx-10 sm:px-10 p-5">
        {title}
      </h3>
      <div className="grid-2 px-5">
        <div className="about-program_text fuentesParrafo lg:px-10 sm:py-5 ">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="program__imagen lg:p-10">
          <img src={imageUrl} alt="imagen santuario" />
        </div>
      </div>
    </div>
  );
};

export default BasicSectionFull;
