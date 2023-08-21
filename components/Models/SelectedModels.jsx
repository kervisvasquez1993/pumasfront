import CanvasModel from "../Canvas/CanvasModel";
import { Puma } from "./Puma";
import { Chucuyo } from "./Chucuyo";
import { MonoCaraBlanca } from "./MonoCaraBlanca";
import { LoroCopeteNegro } from "./LoroCopeteNegro";
import { LoroCopeteRojo } from "./LoroCopeteRojo";
import { MonoArana } from "./MonoArana";
import { LoroNucaAmarilla } from "./LoroNucaAmarilla";
import { Jaguar } from "./Jaguar";
import { Manigordo } from "./Manigordo";
import { Yagurandi } from "./Yagurandi";
import { LapaRoja } from "./LapaRoja";
import { TortugaRoja } from "./TortugaRoja";
import { TortugaNegra } from "./TortigaNegra";
import { TortugaResbaladora } from "./TortugaResbaladora";
import { TortugaCandado } from "./TortugaCandado";
import { Grison } from "./Grison";
import { Saino } from "./Saino";
import { OsoPerezosoDeDedos } from "./OsoPerezosoDeDedos";
import { useEffect, useState } from "react";
const SelectedModels = ({ componentName, modelo }) => {
  const [models, setModel] = useState(modelo);
  useEffect(() => {
    setModel(modelo);
  }, [modelo]);
  let selectedComponent = null;
  console.log(modelo, "lllamando");
  switch (componentName) {
    case "Puma":
      selectedComponent = <Puma modelo={models} />;
      break;
    case "Chucuyo":
      selectedComponent = <Chucuyo />;
      break;
    case "LoroCopeteRoja":
      selectedComponent = <LoroCopeteRojo modelo={models} />;
      break;
    // Agrega los demás casos aquí...
    default:
      selectedComponent = null;
  }

  return (
    <CanvasModel intensity={1.6} positionX={4} positionY={4} positionZ={10}>
      {selectedComponent}
    </CanvasModel>
  );
};

export default SelectedModels;
