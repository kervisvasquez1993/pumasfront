import React from 'react';
import ReactMarkdown from 'react-markdown';

const BasicSectionFull = ({ title, content, imageUrl }) => {
  return (
    <div className="container-program">
      <h3 className="program-title fuenteTitulo colorPrimary my-10 py-10">
        {title}
      </h3>
      <div className="grid-2">
        <div className="about-program_text fuentesParrafo py-10">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="program__imagen">
          <img src={imageUrl} alt="imagen santuario" />
        </div>
      </div>
    </div>
  );
};

export default BasicSectionFull;
