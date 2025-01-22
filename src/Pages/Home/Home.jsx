import { useContext } from "react";
import Header from "../../components/Header/Header";
import { postContext } from "../../Context/PostContext";
const Home = () => {
  const { setMenuActive } = useContext(postContext);
  return (
    <div onClick={() => setMenuActive(false)}>
      <Header />
    </div>
  );
};

export default Home;
