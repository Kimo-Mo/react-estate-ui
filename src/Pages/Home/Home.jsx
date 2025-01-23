import { useContext } from "react";
import Header from "../../components/Header/Header";
import { PostContext } from "../../Context/PostContext";
import Loading from "../../components/Loading/Loading";
const Home = () => {
  const { setMenuActive, userData } = useContext(PostContext);
  return userData ? (
    <div onClick={() => setMenuActive(false)}>
      <Header />
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
