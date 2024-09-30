import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import Pin from "../Pin/Pin";
import { useContext } from "react";
import { postContext } from "../../Context/PostContext";

const Map = (props) => {
  const posts = useContext(postContext);
  return (
    <MapContainer
      center={props.center}
      zoom={7}
      scrollWheelZoom={true}
      className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.children
        ? props.children
        : posts.map((item) => (
            <Pin
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              bedroom={item.bedroom}
              latitude={item.latitude}
              longitude={item.longitude}
            />
          ))}
    </MapContainer>
  );
};

export default Map;
