import React from "react";

const ReglasRecomendaciones = ({ rules, recommendations }) => {
  return (
    <div className="container-rules">
      <h3 className="rules-title">Reglas y recomendaciones</h3>

      <div className="rules_text">
        {rules.map((rule, index) => (
          <p key={index}>{rule}</p>
        ))}
      </div>
      <div className="icons-container">
        {/* Icons code here */}
      </div>
      <div className="rules_text">
        {recommendations.map((recommendation, index) => (
          <p key={index}>{recommendation}</p>
        ))}
      </div>
    </div>
  );
};

export default ReglasRecomendaciones;
