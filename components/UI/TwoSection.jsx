import React, { useState } from "react";

const TwoSections = ({ title1, children1, title2, children2, backgroundImage="" }) => {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "100% 100%",
    height : "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="container-section py-10 my-5" style={containerStyle}>
      <div className="section-titles">
        <div
          className={`section-title chelseaFont px-10 mx-10 centerElement ${
            activeSection === 1 ? "colorPrimary" : "colorGrey"
          }`}
          onClick={() => handleSectionClick(1)}
        >
          {title1}
          <div className={`${activeSection === 1 ? "colorPrimary active" : ""}`}></div>
        </div>
        <div
          className={`section-title centerElement chelseaFont px-10 ${
            activeSection === 2 ? "colorPrimary " : "colorGrey"
          }`}
          onClick={() => handleSectionClick(2)}
        >
          {title2}
          <div className={`${activeSection === 2 ? "colorPrimary active" : ""}`}></div>
        </div>
      </div>
      <div className="section-content">
        {activeSection === 1 && <div className="section-info">{children1}</div>}
        {activeSection === 2 && <div className="section-info">{children2}</div>}
      </div>
    </div>
  );
};

export default TwoSections;
