import { React, useState } from "react";
import "./signuppage.css";
import "../login-page/loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useAuth, useCart } from "contexts";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export function SignUpPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState("");
  //   const { setUser, setIsLoggedIn } = useAuth();
  //   const { dispatch } = useCart();
  let navigate = useNavigate();
  const [type, setType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordError, setPasswordError] = useState("");
  return (
    <form>
      {/* <ToastContainer /> */}
      <div className="login-page">
        <div className="signup">
          <h4 className="login-title">Signup</h4>

          <div className="login-label">
            <label for="" id="firstname">
              First Name
            </label>
          </div>
          <input
            type="text"
            className="login-input"
            placeholder="Ishita"
            value={userData.firstName}
            required
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />
          <div className="login-label">
            <label for="" id="lastname">
              Last Name
            </label>
          </div>
          <input
            type="text"
            class="login-input"
            value={userData.lastName}
            placeholder="Keshawani"
            required
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
          />

          <div className="login-label">
            <label for="" id="email">
              Email address
            </label>
          </div>
          <input
            type="text"
            className="login-input"
            placeholder="ishitakeshawani@gmail.com"
            value={userData.email}
            required
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <label for="" className="login-label" id="password">
              Password
            </label>
          </div>
          <div class="login-password">
            <input
              type={type}
              className="login-password-input"
              placeholder="password"
              value={userData.password}
              required
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <button className="login-icon button-style-none">
              <i
                className="fa-regular fa-eye password-icon"
                onClick={(e) => {
                  e.preventDefault();
                  setType("text");
                }}
              ></i>
            </button>
          </div>

          <div>
            <label for="" className="login-label" id="confirmpassword">
              Confirm Password
            </label>
          </div>
          <div className="login-password">
            <input
              type={confirmPasswordType}
              className="login-password-input"
              placeholder="password"
              value={userData.confirmPassword}
              required
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
            <button className="login-icon button-style-none">
              <i
                className="fa-regular fa-eye password-icon"
                onClick={(e) => {
                  e.preventDefault();
                  setConfirmPasswordType("text");
                }}
              ></i>
            </button>
          </div>
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <div className="flex">
            <div>
              <input type="checkbox" name="remember" id="" required />
              <label for="" className="remember-label" id="tersm">
                I accept all Terms & Conditions
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-login"
            onClick={(e) => onHandleSubmit(e)}
          >
            Signup
          </button>
          <Link to="/login" className="link-no-style signup-link">
            Already have an account
            <i className="fa-solid fa-angle-right login-icon"></i>
          </Link>
        </div>
      </div>
    </form>
  );
}
