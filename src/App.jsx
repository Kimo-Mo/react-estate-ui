import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ListPage from "./Pages/ListPage/ListPage";
import PostDetails from "./components/PostDetails/PostDetails";
import { postContext } from "./Context/PostContext";
import { listData } from "./lib/dummydata";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  return (
    <postContext.Provider value={listData}>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="List">
          <Route index element={<ListPage />} />
          <Route path=":ItemId" element={<PostDetails />} />
        </Route>
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Login" element={<LoginPage setUser={setUser} />} />
        <Route path="/SignUp" element={<SignUpPage setUser={setUser} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </postContext.Provider>
  );
}

export default App;
