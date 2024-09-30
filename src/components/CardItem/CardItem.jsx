import { Link } from "react-router-dom";
import "./CardItem.css";
const CardItem = ({
  id,
  title,
  img,
  bedroom,
  bathroom,
  price,
  address,
}) => {
  return (
    <div className="cardItem">
      <div className="left">
        <Link to={`/List/${id}`}>
          <img src={img} alt="card img" />
        </Link>
      </div>
      <div className="right">
        <Link to={`/List/${id}`}>
          <h5>{title}</h5>
        </Link>
        <p>
          <img className="cardIcon" src="/pin.png" alt="pin" />
          {address}
        </p>
        <p className="price">$ {price}</p>
        <div className="bottom ">
          <div className="features d-flex gap-3">
            <div className="d-flex align-items-center">
              <img className="cardIcon" src="/bed.png" alt="bed" />
              {bedroom} bedroom
            </div>
            <div className="d-flex align-items-center">
              <img className="cardIcon" src="/bath.png" alt="bath" />
              {bathroom} bathroom
            </div>
          </div>
          <div className="icons">
            <img src="/save.png" alt="save" className="cardIcon" />
            <img src="/chat.png" alt="chat" className="cardIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
