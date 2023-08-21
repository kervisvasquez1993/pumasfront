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
const SelectedModels = ({ componentName }) => {
  // ...

  return (
    <CanvasModel intensity={1.6} positionX={4} positionY={4} positionZ={10}>
      {(() => {
        switch (componentName) {
          case "Puma":
            return <Puma />;
          case "Chucuyo":
            return <Chucuyo />;
          case "LoroCopeteRoja":
            return <LoroCopeteRojo />;
          default:
            return null
        }
      })()}
    </CanvasModel>
  );
};

export default SelectedModels;
