import { createContext, useEffect, useState } from "react";

export let PostContext = createContext({});

const PostContextProvider = (props) => {
  const [currentState, setCurrentState] = useState("signUp"); // signUp, login
  const [forgotPassword, setForgotPassword] = useState(false); // { show\hide } forgot password link
  const [listData, setListData] = useState([]);
  const [menuActive, setMenuActive] = useState(false); // mobile menu activation
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({ name: "", email: "" }); // current user information
  useEffect(() => {
    fetch("https://api.npoint.io/4e08f7ea6586cb8a5ad2/posts")
      .then((res) => res.json())
      .then((data) => setListData(data));
    fetch("https://api.npoint.io/4e08f7ea6586cb8a5ad2/userData")
      .then((res) => res.json())
      .then((data) => setUserData(data));

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    } else {
      setUser({ name: "", email: "" });
    }
  }, []);

  const value = {
    listData,
    userData,
    menuActive,
    setMenuActive,
    user,
    setUser,
    currentState,
    setCurrentState,
    forgotPassword,
    setForgotPassword,
  };
  return (
    <PostContext.Provider value={value}>{props.children}</PostContext.Provider>
  );
};

export default PostContextProvider;
