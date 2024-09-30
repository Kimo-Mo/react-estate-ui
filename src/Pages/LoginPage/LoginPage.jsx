import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";

const LoginPage = ({ setUser }) => {
  const [forgotPassword, setForgotPassword] = useState(true);
  return (
    <div className="loginPage d-flex container">
      <div className="loginForm pb-3 pb-lg-2">
        <h2 className="text-capitalize">welcome back to FC-Estate</h2>
        <form
          className="d-flex flex-column gap-4 pe-0 pe-lg-5 mt-3 mt-lg-4"
          onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">
            <p className="text-capitalize">email</p>
            <input
              className="p-2 p-md-3"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
          </label>
          {forgotPassword ? (
            <label htmlFor="password">
              <p className="text-capitalize">password</p>
              <input
                className="p-2 p-md-3"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                required
              />
            </label>
          ) : (
            <></>
          )}
          <button className="mainBtn text-capitalize p-2 p-md-3">
            {forgotPassword ? "log in" : "send"}
          </button>
          <p
            className="forgotPassword mb-0"
            onClick={() => setForgotPassword((prev) => !prev)}>
            {forgotPassword
              ? "Forgot your password?"
              : "Know your password? Log In"}
          </p>
          <p className="text-secondary">
            By submitting, I accept <span className="link">terms of use</span>
          </p>
        </form>
        <p>
          you do not have account?{" "}
          <Link to="/SignUp" className="link">
            new account
          </Link>
        </p>
        <Link
          to="/Home"
          className="btn btn-danger"
          onClick={() => setUser((prev) => !prev)}>
          skip login
        </Link>

      </div>
      <div className="loginImg d-none d-lg-flex">
        <img src="/Login.png" alt="login image" className="mw-100" />
      </div>
    </div>
  );
};

export default LoginPage;
