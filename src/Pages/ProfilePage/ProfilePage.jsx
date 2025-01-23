import "./ProfilePage.css";
import { useContext } from "react";
import CardItem from "../../components/CardItem/CardItem";
import { PostContext } from "../../Context/PostContext";
import Loading from "./../../components/Loading/Loading";
const ProfilePage = () => {
  const { listData, setMenuActive, userData, user } = useContext(PostContext);
  let myList =
    listData.length > 0 &&
    listData?.filter((item) => {
      return item.id < 4;
    });
  return listData.length > 0 ? (
    <div
      className="profilePage container d-flex flex-column flex-lg-row"
      onClick={() => setMenuActive(false)}>
      <div className="userInfo">
        <div className="wrapper pe-lg-4 pe-0">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
            <h2 className="fw-normal">user information</h2>
            <button className="mainBtn text-capitalize">upload photo</button>
          </div>
          <div>
            <p>
              avatar:{" "}
              <img src={userData.img} alt="userImg" className="userImg" />
            </p>
            <p>
              userName: <span className="ms-3 fw-bold">{user.name}</span>
            </p>
            <p>
              email:{" "}
              <span className="ms-3 fw-bold text-lowercase">{user.email}</span>
            </p>
          </div>
          <div className="myList mt-4 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h3>my list</h3>
              <button className="mainBtn text-capitalize">add new post</button>
            </div>
          </div>
          <div className="list">
            {myList?.map((item) => {
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
      <div className="messages">
        <div className="wrapper px-2 px-lg-4 py-3 py-lg-0">
          <h2 className="fw-normal mb-5">messages</h2>
          <div className="d-flex flex-column gap-3">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

const Message = () => {
  const { userData } = useContext(PostContext);
  return (
    <div className="message p-3 rounded-3 bg-white">
      <img src={userData.img} alt="userImg" className="userImg" />
      <span className="fw-bold mx-4">{userData.name}</span>
      <span>Lorem ipsum dolor sit.</span>
    </div>
  );
};

export default ProfilePage;
