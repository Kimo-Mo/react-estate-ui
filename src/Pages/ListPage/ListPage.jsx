import { useContext } from "react";
import CardItem from "../../components/CardItem/CardItem";
import Filter from "../../components/Filter/Filter";
import { PostContext } from "../../Context/PostContext";
import "./ListPage.css";
import Map from "../../components/Map/Map";
import Loading from "../../components/Loading/Loading";

const ListPage = () => {
  const { listData, setMenuActive } = useContext(PostContext);
  return listData.length > 0 ? (
    <div
      className="listPage container d-flex"
      onClick={() => setMenuActive(false)}>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <div className="list">
            {listData?.map((item) => {
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
  ) : (
    <Loading />
  );
};

export default ListPage;
