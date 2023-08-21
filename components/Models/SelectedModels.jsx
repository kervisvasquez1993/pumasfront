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
    case "Grison":
      selectedComponent = <Grison modelo={models} />;
      break;
    case "Jaguar":
      selectedComponent = <Jaguar modelo={models} />;
      break;
    case "LapaRoja":
      selectedComponent = <LapaRoja modelo={models} />;
      break;
    case "LoroCopeteNegro":
      selectedComponent = <LoroCopeteNegro modelo={models} />;
      break;
    case "LoroNucaAmarilla":
      selectedComponent = <LoroNucaAmarilla modelo={models} />;
      break;
    case "Manigordo":
      selectedComponent = <Manigordo modelo={models} />;
      break;
    case "MonoArana":
      selectedComponent = <MonoArana modelo={models} />;
      break;
    case "ManoCaraBlanca":
      selectedComponent = <ManoCaraBlanca modelo={models} />;
      break;
    case "OsoPerezosoDeDedos":
      selectedComponent = <OsoPerezosoDeDedos modelo={models} />;
      break;
    case "Saino":
      selectedComponent = <Saino modelo={models} />;
      break;
    case "TortugaCandado":
      selectedComponent = <TortugaCandado modelo={models} />;
      break;
    case "TortugaResbaladora":
      selectedComponent = <TortugaResbaladora modelo={models} />;
      break;
    case "TortugaRoja":
      selectedComponent = <TortugaRoja modelo={models} />;
      break;
    case "Yagurandi":
      selectedComponent = <Yagurandi modelo={models} />;
      break;
    case "TortugaNegra":
      selectedComponent = <Yagurandi modelo={models} />;
      break;
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
