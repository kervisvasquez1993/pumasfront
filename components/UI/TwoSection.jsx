import React, { useState } from "react";

const TwoSections = ({ title1, children1, title2, childre2 }) => {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <div className="container-section py-10 my-5">
      <div className="section-titles">
        <div
          className={`section-title chelseaFont px-10 mx-10 ${activeSection === 1 ? "colorPrimary" : "colorGrey"}`}
          onClick={() => handleSectionClick(1)}
        >
          {title1}
        </div>
        <div
          className={`section-title chelseaFont px-10 ${activeSection === 2 ? "colorPrimary" : "colorGrey"}`}
          onClick={() => handleSectionClick(2)}
        >
          {title2}
        </div>
      </div>
      <div className="section-content">
        {activeSection === 1 && <div className="section-info">{children1}</div>}
        {activeSection === 2 && <div className="section-info">{childre2}</div>}
      </div>
    </div>
  );
};

export default TwoSections;
