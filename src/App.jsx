import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ListPage from "./Pages/ListPage/ListPage";
import PostDetails from "./components/PostDetails/PostDetails";
import { postContext } from "./Context/PostContext";
import { listData } from "./lib/dummydata";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Auth from "./Pages/AuthPage/Auth";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [menuActive, setMenuActive] = useState(false); // mobile menu activation
  const [currentState, setCurrentState] = useState("signUp"); // signUp, login
  const [forgotPassword, setForgotPassword] = useState(false); // { show\hide } forgot password link
  const [user, setUser] = useState({ name: "", email: "" });
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    } else {
      setUser({ name: "", email: "" });
    }
  }, []);
  return (
    <postContext.Provider value={{ listData, setMenuActive }}>
      <ToastContainer stacked limit={3} />
      <NavBar
        user={user}
        setUser={setUser}
        setCurrentState={setCurrentState}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        setForgotPassword={setForgotPassword}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="List">
          <Route index element={<ListPage />} />
          <Route path=":ItemId" element={<PostDetails />} />
        </Route>

        {user.name !== "" ? (
          <Route path="/Profile" element={<ProfilePage user={user} />} />
        ) : (
          <Route
            path="/Auth"
            element={
              <Auth
                currentState={currentState}
                setCurrentState={setCurrentState}
                setUser={setUser}
                forgotPassword={forgotPassword}
                setForgotPassword={setForgotPassword}
              />
            }
          />
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </postContext.Provider>
  );
}

export default App;
