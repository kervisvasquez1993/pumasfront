import React from 'react';
import ReactMarkdown from 'react-markdown';

const BasicSectionFull = ({ title, content, imageUrl }) => {
  return (
    <div className="container-program">
      <h3 className="program-title fuenteTitulo colorPrimary mx-10 px-10 py-5">
        {title}
      </h3>
      <div className="grid-2">
        <div className="about-program_text fuentesParrafo px-10 py-5">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="program__imagen p-10">
          <img src={imageUrl} alt="imagen santuario" />
        </div>
      </div>
    </div>
  );
};

export default BasicSectionFull;
