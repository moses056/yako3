/* eslint-disable */
import { Link } from "react-router-dom";
import { auth, googleProvider, appleProvider } from "../../../firebase";
import apple from "../../../assets/svg/apple.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function LoginTemp() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [emailError, setEmailErorr] = useState("");
  const [PasswordError, setPasswordErrorr] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getUserData = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    switch (name) {
      case "email":
        setUser({ ...user, email: val });
        setEmailErorr(
          val === ""
            ? t("Email required")
            : !val.match(
                /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
              )
            ? t("Please enter a valid Email")
            : null
        );
        break;
      case "password":
        setUser({ ...user, password: val });
        setPasswordErrorr(
          val === ""
            ? t("This is Required")
            : val.length < 8
            ? t("Password Should be More 8 Characters")
            : null
        );
        break;
      default:
        break;
    }
  };

  const login = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
      const firebaseUser = userCredential.user;

      if (!firebaseUser.emailVerified) {
        setErrorMessage("Please verify your email before logging in.");
        return;
      }

      localStorage.setItem("userType", firebaseUser.displayName);
      firebaseUser.displayName === "talent"
        ? navigate("/find-work")
        : navigate("/home");

    } catch (error) {
      setErrorMessage(error.message);
      console.log(error.message);
    }
  };

  const googleLogin = async () => {
    setErrorMessage("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      if (!firebaseUser.emailVerified) {
        setErrorMessage("Please verify your email before logging in.");
        return;
      }

      localStorage.setItem("userType", firebaseUser.displayName);
      firebaseUser.displayName === "talent"
        ? navigate("/find-work")
        : navigate("/home");

    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const appleLogin = async () => {
    setErrorMessage("");
    try {
      const result = await signInWithPopup(auth, appleProvider);
      const firebaseUser = result.user;

      if (!firebaseUser.emailVerified) {
        setErrorMessage("Please verify your email before logging in.");
        return;
      }

      localStorage.setItem("userType", firebaseUser.displayName);
      firebaseUser.displayName === "talent"
        ? navigate("/find-work")
        : navigate("/home");

    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-5 mx-auto">
            <div className="shadow-sm p-5 mb-5 bg-white rounded mx-auto mt-5 w-100 border">
              <h5 className="text-center m-0">
                <span>{t("Login and get to work")}</span>
              </h5>
              <form>
                <span className="text-danger text-center">{errorMessage}</span>

                <div className="form-group col-8 mx-auto mt-3">
                  <span className="text-danger">{emailError}</span>
                  <input
                    type="email"
                    name="email"
                    className={`form-control shadow-none ${emailError ? "border-danger" : ""}`}
                    placeholder={t("User name or Email")}
                    onInput={getUserData}
                  />
                </div>

                <div className="form-group col-8 mx-auto mt-3">
                  <span className="text-danger">{PasswordError}</span>
                  <input
                    type="password"
                    name="password"
                    className={`form-control shadow-none ${PasswordError ? "border-danger" : ""}`}
                    placeholder={t("Password")}
                    onInput={getUserData}
                  />
                </div>

                <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-className loginpcolor">
                  <button
                    className="btn bg-upwork"
                    onClick={login}
                    disabled={PasswordError != null || emailError != null}
                  >
                    {t("Log in")}
                  </button>
                </div>

                <div className="separator mt-4 col-8 mx-auto">or</div>

                <div
                  className="google-btn gap-2 mx-auto mt-3 rounded hitbtn-className col-sm-12"
                  style={{ height: "40px" }}
                  onClick={googleLogin}
                >
                  <div className="google-icon-wrapper me-2">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p className="text-center text-white pt-2">{t("Sign in with google")}</p>
                </div>

                <div
                  className="mb-5 d-grid gap-2 col-8 mx-auto mt-3 border border-dark rounded"
                  onClick={appleLogin}
                >
                  <button className="btn bg-light w-100">
                    <img src={apple} className="apple-icon me-2" />
                    {t("Sign in with apple")}
                  </button>
                </div>

                <hr />
                <div>
                  <div className="separator mt-4 col-8 mx-auto">{t("New To Upwork")}</div>
                  <div className="d-grid gap-2 col-md-5 col-sm-10 mx-auto mt-3 rounded mb-5">
                    <Link className="btn signup" to="/sign-up">
                      {t("Sign Up")}
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
