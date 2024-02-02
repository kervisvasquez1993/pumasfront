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
import Loader from "../UI/Loader";
import { Venado } from "./Venado";
import { Tucan } from "./Tucan";
import { TortugaOrejaAmarilla } from "./TortugaOrejaAmarilla";
import { Caucel } from "./Caucel";

const SelectedModels = ({ componentName, modelo, modelX = 0, modelY = 0, modelZ = 0, intensity = 0 }) => {
  const [models, setModel] = useState(modelo);
  useEffect(() => {
    setModel(modelo);
  }, [modelo]);
  let selectedComponent = null;
  // //console.log(modelX, modelY, modelZ)
  switch (componentName) {
    case "Puma":
      selectedComponent = <Puma />;
      break;
    case "Caucel":
      selectedComponent = <Caucel />;
      break;
    case "Chucuyo":
      selectedComponent = <Chucuyo />;
      break;
    case "LoroCopeteRoja":
      selectedComponent = <LoroCopeteRojo />;
      break;
    case "Grison":
      selectedComponent = <Grison />;
      break;
    case "Jaguar":
      selectedComponent = <Jaguar />;
      break;
    case "LapaRoja":
      selectedComponent = <LapaRoja />;
      break;
    case "LoroCopeteNegro":
      selectedComponent = <LoroCopeteNegro />;
      break;
    case "LoroNucaAmarilla":
      selectedComponent = <LoroNucaAmarilla />;
      break;
    case "Manigordo":
      selectedComponent = <Manigordo />;
      break;
    case "MonoArana":
      selectedComponent = <MonoArana />;
      break;
    case "ManoCaraBlanca":
      selectedComponent = <ManoCaraBlanca />;
      break;
    case "OsoPerezosoDeDedos":
      selectedComponent = <OsoPerezosoDeDedos />;
      break;
    case "Saino":
      selectedComponent = <Saino />;
      break;
    case "TortugaCandado":
      selectedComponent = <TortugaCandado />;
      break;
    case "TortugaResbaladora":
      selectedComponent = <TortugaResbaladora />;
      break;
    case "TortugaRoja":
      selectedComponent = <TortugaRoja />;
      break;
    case "TortugaOrejaAmarilla":
      selectedComponent = <TortugaOrejaAmarilla />;
      break;
    case "Yagurandi":
      selectedComponent = <Yagurandi />;
      break;
    case "TortugaNegra":
      selectedComponent = <TortugaNegra />;
      break;
    case "MonoCaraBlanca":
      selectedComponent = <MonoCaraBlanca />;
      break;
    case "Venado":
      selectedComponent = <Venado />;
      break;
    case "Tucan":
      selectedComponent = <Tucan />;
      break;
    default:
      selectedComponent = null;
  }

  return (
    <CanvasModel intensity={intensity} positionX={modelX} positionY={modelY} positionZ={modelZ}>
      {selectedComponent ? selectedComponent : <Loader />}
    </CanvasModel>
  );
};

export default SelectedModels;
