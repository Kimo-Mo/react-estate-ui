import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { PostContext } from "../../Context/PostContext";
const NavBar = () => {
  const {
    menuActive,
    setMenuActive,
    userData,
    user,
    setUser,
    setCurrentState,
    setForgotPassword,
  } = useContext(PostContext);
  return (
    <div className="container">
      <nav className="nav text-capitalize">
        <div className="left gap-lg-5">
          <Link to="/">
            <div className="logo">
              <img className="logoImg" src="/logo.png" alt="logo img" />
              <span className="fw-bold">FC-Estate</span>
            </div>
          </Link>
          <div className="links d-none d-md-flex gap-lg-5">
            <Link to="/">Home</Link>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Agents</a>
          </div>
        </div>
        <div className="right d-none d-md-flex gap-lg-5">
          {user.name !== "" ? (
            <>
              <div>
                <img
                  className="userImg me-4"
                  src={userData.img}
                  alt="user image"
                />
                <Link to="/Profile">Profile</Link>
              </div>
              <Link
                to="/"
                replace
                onClick={() => {
                  setUser({ name: "", email: "" });
                  localStorage.removeItem("user");
                }}
                className="mainBtn">
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/Auth"
                replace
                onClick={() => {
                  setCurrentState("login");
                  setForgotPassword(false);
                }}>
                Log in
              </Link>
              <Link
                to="/Auth"
                replace
                onClick={() => {
                  setCurrentState("signUp");
                  setForgotPassword(false);
                }}
                className="mainBtn">
                Sign Up
              </Link>
            </>
          )}
        </div>
        <label className="menuButton d-flex d-md-none">
          <input
            type="checkbox"
            name="menuButton"
            checked={menuActive}
            onChange={() => setMenuActive((prev) => !prev)}
          />
          <span className="top"></span>
          <span className="mid"></span>
          <span className="bot"></span>
        </label>
        <div className={menuActive ? "mobileMenu active" : "mobileMenu"}>
          <Link onClick={() => setMenuActive((prev) => !prev)} to="/">
            Home
          </Link>
          <a href="#" onClick={() => setMenuActive((prev) => !prev)}>
            About
          </a>
          <a href="#" onClick={() => setMenuActive((prev) => !prev)}>
            Contact
          </a>
          <a href="#" onClick={() => setMenuActive((prev) => !prev)}>
            Agents
          </a>
          {user.name ? (
            <>
              <img className="userImg" src={userData.img} alt="user image" />
              <Link
                to="/Profile"
                onClick={() => setMenuActive((prev) => !prev)}>
                Profile
              </Link>
              <Link
                to="/"
                replace
                onClick={() => {
                  setMenuActive((prev) => !prev);
                  setUser({ name: "", email: "" });
                  localStorage.removeItem("user");
                }}
                className="mainBtn">
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/Auth"
                replace
                onClick={() => {
                  setMenuActive((prev) => !prev);
                  setCurrentState("login");
                  setForgotPassword(false);
                }}>
                Log in
              </Link>
              <Link
                to="/Auth"
                onClick={() => {
                  setMenuActive((prev) => !prev);
                  setCurrentState("signUp");
                  setForgotPassword(false);
                }}
                className="mainBtn">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
