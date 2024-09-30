import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./Pin.css";

const Pin = ({ id, title, img, bedroom, price, latitude, longitude }) => {
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <div className="popupContainer d-flex align-items-center gap-3">
          <img className="popupImg" src={img} alt="popup img" />
          <div className="d-flex flex-column align-items-start">
            <Link to={`/List/${id}`}>{title}</Link>
            <span className="bed">{bedroom} bedroom</span>
            <b className="price">$ {price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
