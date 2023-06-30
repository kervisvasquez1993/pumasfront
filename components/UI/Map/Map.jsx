
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import style from "./style.module.css"

const Map = () => {
  return (
    <MapContainer center={[52.02, 0.90]} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
    </MapContainer>
  );
};

export default Map;
