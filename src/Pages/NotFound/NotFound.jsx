import { useContext } from "react";
import "./NotFound.css";
import { PostContext } from "../../Context/PostContext";
const NotFound = () => {
  const { setMenuActive } = useContext(PostContext);
  return (
    <div
      className="notFound text-center container "
      onClick={() => setMenuActive(false)}>
      <h1 className="text-capitalize fw-bold">page not found</h1>
      <div className="notFoundImg">
        <img src="/notFound.png" alt="not found" />
      </div>
    </div>
  );
};

export default NotFound;
