import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { userData } from "../../lib/dummydata";
const NavBar = ({user}) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="container">
      <nav className="nav text-capitalize">
        <div className="left gap-lg-5">
          <Link to="/Home">
            <div className="logo">
              <img className="logoImg" src="/logo.png" alt="logo img" />
              <span className="fw-bold">FC-Estate</span>
            </div>
          </Link>
          <div className="links d-none d-md-flex gap-lg-5">
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Agents">Agents</Link>
          </div>
        </div>
        <div className="right d-none d-md-flex gap-lg-5">
          {user ? (
            <>
              <div>
                <img
                  className="userImg me-4"
                  src={userData.img}
                  alt="user image"
                />
                <span>{userData.name}</span>
              </div>
              <Link to="/Profile" className="mainBtn">
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login">Log in</Link>
              <Link to="/SignUp" className="mainBtn">
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
          <Link onClick={() => setMenuActive((prev) => !prev)} to="/Home">
            Home
          </Link>
          <Link to="/About" onClick={() => setMenuActive((prev) => !prev)}>
            About
          </Link>
          <Link to="/Contact" onClick={() => setMenuActive((prev) => !prev)}>
            Contact
          </Link>
          <Link to="/Agents" onClick={() => setMenuActive((prev) => !prev)}>
            Agents
          </Link>
          {user ? (
            <>
              <img className="userImg" src={userData.img} alt="user image" />
              <span>{userData.name}</span>
              <Link
                to="/Profile"
                className="mainBtn"
                onClick={() => setMenuActive((prev) => !prev)}>
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login" onClick={() => setMenuActive((prev) => !prev)}>
                Log in
              </Link>
              <Link
                to="/SignUp"
                onClick={() => setMenuActive((prev) => !prev)}
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
