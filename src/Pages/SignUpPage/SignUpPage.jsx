import { Link } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = ({ setUser }) => {
  return (
    <div className="signUpPage d-flex container">
      <div className="signUpForm pb-3 pb-lg-2">
        <h2 className="text-capitalize">welcome to FC-Estate</h2>
        <form
          className="d-flex flex-column gap-4 pe-0 pe-lg-5 mt-3 mt-lg-4"
          onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">
            <p className="text-capitalize">name</p>
            <input
              className="p-2 p-md-3"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              required
            />
          </label>
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

          <button className="mainBtn text-capitalize p-2 p-md-3">Sign Up</button>
          <p className="text-secondary">
            By submitting, I accept <span className="link">terms of use</span>
          </p>
        </form>
        <p>
          You have an account?{" "}
          <Link to="/Login" className="link">
            Log in
          </Link>
        </p>
        <Link
          to="/Home"
          className="btn btn-danger"
          onClick={() => setUser((prev) => !prev)}>
          skip signUp
        </Link>
      </div>
      <div className="signUpImg d-none d-lg-flex">
        <img src="/SignUp.png" alt="login image" className="mw-100" />
      </div>
    </div>
  );
};

export default SignUpPage;
