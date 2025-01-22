import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { postContext } from "../../Context/PostContext";

const Auth = ({
  currentState,
  setCurrentState,
  setUser,
  forgotPassword,
  setForgotPassword,
}) => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setMenuActive } = useContext(postContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formInputs;
    if (
      currentState === "login" ||
      (currentState === "login" && forgotPassword)
    ) {
      toast.error("Register first!");
      return;
    }
    if (currentState === "signUp" && !forgotPassword) {
      if (!name) {
        toast.error("Name is required");
        return;
      }
      if (name.length < 3) {
        toast.error("Name must be at least 3 characters");
        return;
      }
      if (!email) {
        toast.error("Email is required");
        return;
      }
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        toast.error("Invalid email address");
        return;
      }
      if (!password) {
        toast.error("Password is required");
        return;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }
      setUser({ name, email });
      localStorage.setItem("user", JSON.stringify({ name, email }));
      navigate("/Profile", { replace: true });
    }
  };
  return (
    <div
      className="authPage d-flex container"
      onClick={() => setMenuActive(false)}>
      <div className="authForm pb-3 pb-lg-2">
        <h2 className="text-capitalize">
          welcome {currentState === "signUp" ? "to" : "back"} FC-Estate
        </h2>
        <form
          className="d-flex flex-column gap-4 pe-0 pe-lg-5 mt-3 mt-lg-4"
          onSubmit={(e) => e.preventDefault()}>
          {currentState === "signUp" && (
            <label htmlFor="name">
              <p className="text-capitalize">name</p>
              <input
                className="p-2 p-md-3"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={formInputs.name}
                onChange={(e) =>
                  setFormInputs({ ...formInputs, name: e.target.value })
                }
              />
            </label>
          )}
          <label htmlFor="email">
            <p className="text-capitalize">email</p>
            <input
              className="p-2 p-md-3"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={formInputs.email}
              onChange={(e) =>
                setFormInputs({ ...formInputs, email: e.target.value })
              }
            />
          </label>

          {!forgotPassword && (
            <label htmlFor="password">
              <p className="text-capitalize">password</p>
              <input
                className="p-2 p-md-3"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={formInputs.password}
                onChange={(e) =>
                  setFormInputs({ ...formInputs, password: e.target.value })
                }
              />
            </label>
          )}

          {forgotPassword ? (
            <button
              className="mainBtn text-capitalize p-2 p-md-3"
              onClick={handleSubmit}>
              send
            </button>
          ) : (
            <button
              className="mainBtn text-capitalize p-2 p-md-3"
              onClick={handleSubmit}>
              {currentState === "signUp" ? "sign up" : "log in"}
            </button>
          )}
          {currentState === "login" && (
            <p
              className="forgotPassword mb-0"
              onClick={() => setForgotPassword((prev) => !prev)}>
              {forgotPassword
                ? "Know your password? Log In"
                : "Forgot your password?"}
            </p>
          )}
          <p className="text-secondary">
            By submitting, I accept <span className="link">terms of use</span>
          </p>
        </form>

        {currentState === "signUp" ? (
          <p className="text-secondary">
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrentState("login");
                setForgotPassword(false);
              }}
              className="link">
              log in
            </span>
          </p>
        ) : (
          <p className="text-secondary">
            Don&apos;t have an account?{" "}
            <span
              onClick={() => {
                setCurrentState("signUp");
                setForgotPassword(false);
              }}
              className="link">
              sign up
            </span>
          </p>
        )}
      </div>
      <div className="authImg d-none d-lg-flex">
        <img
          src={currentState === "signUp" ? "/SignUp.png" : "/Login.png"}
          alt={currentState === "signUp" ? "sign up img" : "login img"}
          className="mw-100"
        />
      </div>
    </div>
  );
};

export default Auth;
