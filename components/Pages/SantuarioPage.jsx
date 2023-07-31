// SantuarioPage.js
import React from "react";
import Main from "../../Layout/Main/Main";
import SanctuarySection from "../Section/Santuario/SanctuarySection";
import RouteSection from "../Section/Santuario/RouteSection";
import RulesSection from "../Section/Santuario/RulesSection";


const SantuarioPage = () => {
  return (
    <Main titlePage={"Santuario"}>
      <div className="container">
        <SanctuarySection />
        <RouteSection />
        <RulesSection />
      </div>
    </Main>
  );
};

export default SantuarioPage;
