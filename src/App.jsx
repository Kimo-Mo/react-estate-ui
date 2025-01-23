import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ListPage from "./Pages/ListPage/ListPage";
import PostDetails from "./components/PostDetails/PostDetails";
import { PostContext } from "./Context/PostContext";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Auth from "./Pages/AuthPage/Auth";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const { user } = useContext(PostContext);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ToastContainer stacked limit={3} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="List">
          <Route index element={<ListPage />} />
          <Route path=":ItemId" element={<PostDetails />} />
        </Route>

        {user.name === "" ? (
          <Route path="/Auth" element={<Auth />} />
        ) : (
          <Route path="/Profile" element={<ProfilePage />} />
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
