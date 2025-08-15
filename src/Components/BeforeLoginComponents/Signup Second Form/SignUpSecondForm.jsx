/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../../../firebase";
import { createDocumentWithId } from "../../../Network/Network";
import { useTranslation } from "react-i18next";
import { Timestamp } from 'firebase/firestore';
import CountrySelect from "react-bootstrap-country-select";
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  sendEmailVerification 
} from "firebase/auth";

export default function SignUpSecondForm() {
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [validate, setValidate] = useState({ firstName: "", lastName: "", password: "", terms: false });
  const terms = useRef(null);
  const [country, setCountry] = useState("");
  const userEmail = useSelector(state => state.signUpData.email);
  const navigate = useNavigate();

  const [usr, setUsr] = useState({
    authID: "",
    email: userEmail,
    firstName: "",
    lastName: "",
    password: "",
    userType: "client",
    createdAt: Timestamp.now(),
  });

  const getUserData = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    switch (name) {
      case "firstName":
        setUsr({ ...usr, firstName: val });
        setValidate({
          ...validate,
          firstName:
            val === ""
              ? t("First name is required")
              : val.length < 3
                ? t("First name must be more than 2")
                : null
        });
        break;

      case "lastName":
        setUsr({ ...usr, lastName: val });
        setValidate({
          ...validate,
          lastName:
            val === ""
              ? t("Last name is required")
              : val.length < 3
                ? t("Last name must be more than 2")
                : null
        });
        break;

      case "password":
        setUsr({ ...usr, password: val });
        setValidate({
          ...validate,
          password:
            val === ""
              ? t("This is Required")
              : val.length < 8
                ? t("Password Should be More 8 Character")
                : null
        });
        break;

      case "userType":
        setUsr({ ...usr, userType: val });
        break;

      case "terms":
        setValidate({
          ...validate,
          terms: terms.current.checked
        });
        break;

      default:
        break;
    }
  };

  const signUpComplete = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, usr.email, usr.password);
      const firebaseUser = userCredential.user;

      if (firebaseUser) {
        await updateProfile(firebaseUser, { displayName: usr.userType });
        await sendEmailVerification(firebaseUser);
        localStorage.setItem('userType', usr.userType);

        if (usr.userType === "talent") {
          await createDocumentWithId(
            usr.userType,
            {
              ...usr,
              authID: firebaseUser.uid,
              accepted: false,
              totalJobs: 0,
              totalEarnings: 0,
              totalHours: 0,
              availability: "",
              hourlyRate: 0,
              badge: {
                none: "",
                risingTalent: "Rising Talent",
                risingTalentAr: "موهبة صاعدة",
                topRated: "Top Rated",
                topRatedAr: "تقييم عالي",
                expert: "Expert-Vetted",
                expertAr: "خبير"
              },
              employmentHistory: [],
              education: { school: "", areaOfStudy: "", degree: "", gradYear: "" },
              portfolio: [],
              skills: [],
              connects: 20,
              connectsHistory: [],
              profileCompletion: 0,
              savedJobs: []
            },
            firebaseUser.uid
          );
        } else if (usr.userType === "client") {
          await createDocumentWithId(
            usr.userType,
            {
              ...usr,
              authID: firebaseUser.uid,
              paymentVerified: false,
              review: 0,
              spentMoney: 0,
              location: country.name,
              savedTalent: []
            },
            firebaseUser.uid
          );
        }

        navigate("/sign-up/please-verify");
        sessionStorage.setItem("searchArray", [' ']);
      }
    } catch (err) {
      setErrorMessage(err.message);
      console.error(err.message);
    }
  };

  return (
    <div className="col-sm-12 col-md-6 mx-auto">
      <div className="shadow-sm p-3 mb-5 bg-white rounded mx-auto mt-5 w-100 border">
        <form>
          <h5 className="text-danger text-center">{errorMessage}</h5>

          <div className="row pt-3">
            <div className="input-group col-6 w-50">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder={t("First Name")}
                onInput={getUserData}
              />
              <p className='text-danger'>{validate.firstName}</p>
            </div>
            <div className="input-group col-6 w-50">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder={t("Last Name")}
                onInput={getUserData}
              />
              <p className='text-danger'>{validate.lastName}</p>
            </div>
          </div>

          <div className="input-group pt-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder={t("Password")}
              onInput={getUserData}
            />
          </div>
          <p className='text-danger'>{validate.password}</p>

          <div>
            <h3 className="text-center mt-3">{t("i want to :")}</h3>
            <div className="btn-group d-flex border-gray rounded">
              <input
                type="radio"
                name="userType"
                className="btn-check"
                id="btnradio1"
                defaultChecked
                value="client"
                onInput={getUserData}
              />
              <label className="btn btn-outline-upwork" htmlFor="btnradio1">
                {t("Hire for a project")}
              </label>
              <input
                type="radio"
                name="userType"
                className="btn-check"
                id="btnradio2"
                value="talent"
                onInput={getUserData}
              />
              <label className="btn btn-outline-upwork" htmlFor="btnradio2">
                {t("Work as a freelancer")}
              </label>
            </div>
          </div>

          {usr.userType === "client" && (
            <div className="my-3 text-dark">
              <CountrySelect className="w-50" value={country} onChange={setCountry} />
            </div>
          )}

          <div className="form-check mt-3">
            <input
              ref={terms}
              name="terms"
              className="form-check-input"
              type="checkbox"
              onChange={getUserData}
            />
            <label className="form-check-label">
              {t("Yes I understand and agree to the")}{" "}
              <a href="https://www.upwork.com/legal#terms" target="_blank">Upwork Terms of Service</a>
            </label>
          </div>

          <div className="d-grid gap-2 col-8 mx-auto mt-3">
            <button
              className="btn bg-upwork"
              type="button"
              disabled={
                validate.password != null || validate.firstName || validate.lastName ||
                (usr.userType === "client" && !country) || !validate.terms
              }
              onClick={signUpComplete}
            >
              {t("Continue with Email")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
