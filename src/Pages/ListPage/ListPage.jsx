import { useContext } from "react";
import CardItem from "../../components/CardItem/CardItem";
import Filter from "../../components/Filter/Filter";
import { postContext } from "../../Context/PostContext";
import "./ListPage.css";
import Map from "../../components/Map/Map";

const ListPage = () => {  
  const posts = useContext(postContext);
  return (
    <div className="listPage container d-flex">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <div className="list">
            {posts.map((item) => {
              return (
                <CardItem
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  bedroom={item.bedroom}
                  bathroom={item.bathroom}
                  address={item.address}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="mapContainer d-none d-lg-flex">
        <Map center={[52.505, -1]} />
      </div>
    </div>
  );
};

export default ListPage;
