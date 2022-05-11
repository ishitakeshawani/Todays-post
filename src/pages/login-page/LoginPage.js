import { React, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

export function LoginPage() {
  const [type, setType] = useState("password");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  //   const { setUser, setIsLoggedIn } = useAuth();
  //   const { dispatch } = useCart();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <div className="login-page">
      {/* <ToastContainer /> */}
      <form>
        <div className="login">
          <h4 className="login-title">Login</h4>
          <div className="login-label">
            <label for="" id="email">
              Email address
            </label>
          </div>
          <input
            type="text"
            className="login-input"
            value={userData.email}
            placeholder="xyz@gmail.com"
            required
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <label for="" class="login-label" id="password">
              Password
            </label>
          </div>
          <div className="login-password">
            <input
              type={type}
              className="login-password-input"
              value={userData.password}
              placeholder="password"
              required
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
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
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <button
            type="submit"
            className="btn btn-login"
            onClick={(e) => onSubmitHandler(e)}
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-login"
            onClick={(e) => testLogin(e)}
          >
            Login with test credentials
          </button>
          <Link to="/signup" className="link-no-style signup-link">
            Create new account{" "}
            <i
              className="fa-solid fa-angle-right login-icon"
              onClick={() => setType("text")}
            ></i>
          </Link>
        </div>
      </form>
    </div>
  );
}
