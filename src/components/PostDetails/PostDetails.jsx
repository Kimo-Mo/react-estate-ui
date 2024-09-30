import "./PostDetails.css";
import NotFound from "../../Pages/NotFound/NotFound";
import { useContext, useState } from "react";
import { postContext } from "../../Context/PostContext";
import { useParams } from "react-router-dom";
import { userData } from "../../lib/dummydata";
import Map from "./../Map/Map";
import Pin from "../Pin/Pin";

const PostDetails = () => {
  const posts = useContext(postContext);
  const { ItemId } = useParams();
  const post = posts.find((p) => {
    return p.id == ItemId;
  });
  const [mainImgSrc, setMainImgSrc] = useState(post.img);
  const smallImgs = [
    "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6510967/pexels-photo-6510967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  if (post) {
    return (
      <div className="postDetails container d-flex">
        <div className="textContainer">
          <div className="wrapper">
            <div className="preview">
              <div className="mainImgContainer">
                <img className="main-img" src={mainImgSrc} alt="main image" />
              </div>
              <div className="smallImgs">
                <img
                  src={post.img}
                  alt="apartment image"
                  onClick={() => setMainImgSrc(post.img)}
                />
                <img
                  src={smallImgs[0]}
                  alt="apartment image"
                  onClick={() => setMainImgSrc(smallImgs[0])}
                />
                <img
                  src={smallImgs[1]}
                  alt="apartment image"
                  onClick={() => setMainImgSrc(smallImgs[1])}
                />
              </div>
            </div>
            <div className="head d-flex justify-content-between flex-column flex-md-row gap-5">
              <div className="left d-flex justify-content-between flex-column">
                <h3>{post.title}</h3>
                <p className="location">
                  <img
                    src="/pin.png"
                    alt="location image"
                    className="iconImg"
                  />
                  {post.address}
                </p>
                <span className="price">$ {post.price}</span>
              </div>
              <div className="right p-3 text-center d-flex justify-content-center flex-column align-items-center">
                <img className="userImg" src={userData.img} alt="user image" />
                <p>{userData.name}</p>
              </div>
            </div>
            <div className="description pb-4">{post.description}</div>
          </div>
        </div>
        <div className="infoContainer">
          <div className="wrapper">
            <div className="general">
              <h3 className="title">general</h3>
              <div className="box">
                <div className="item">
                  <img src="/utility.png" alt="utility" />
                  <div>
                    <p>utilities</p>
                    <p className="">renter is responsible</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/pet.png" alt="pet" />
                  <div>
                    <p>pet policy</p>
                    <p className="">pets Allowed</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/fee.png" alt="fee" />
                  <div>
                    <p>property fees</p>
                    <p className="">
                      must have 3x the rent in total household income
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="room">
              <h3 className="title">room sizes</h3>
              <div className="item">
                <div className="box flex-row">
                  <img src="/size.png" alt="size" />
                  <p>{post.size}sqm</p>
                </div>
                <div className="box flex-row">
                  <img src="/bed.png" alt="bed" />
                  <p>{post.bedroom} bed</p>
                </div>
                <div className="box flex-row">
                  <img src="/bath.png" alt="bathroom" />
                  <div>
                    <p>
                      {post.bathroom} <span>bathroom</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="places">
              <h3 className="title">nearby places</h3>
              <div className="box">
                <div className="item">
                  <img src="/school.png" alt="school" />
                  <div>
                    <p>school</p>
                    <p>{post.school}</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/bus.png" alt="bus" />
                  <div>
                    <p>bus</p>
                    <p>{post.bus}</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/restaurant.png" alt="restaurant" />
                  <div>
                    <p>restaurant</p>
                    <p>{post.restaurant}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="location">
              <h3 className="title">location</h3>
              <div className="mapContainer">
                <Map center={[post.latitude, post.longitude]}>
                  <Pin
                    id={post.id}
                    title={post.title}
                    img={post.img}
                    price={post.price}
                    bedroom={post.bedroom}
                    latitude={post.latitude}
                    longitude={post.longitude}
                  />
                </Map>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default PostDetails;
