import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../../../firebase";
import { createDocumentWithId } from "../../../Network/Network";
import { Timestamp } from 'firebase/firestore';
import CountrySelect from "react-bootstrap-country-select";
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  sendEmailVerification 
} from "firebase/auth";

export default function SignUpSecondForm() {
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
              ? "Le prénom est requis"
              : val.length < 3
                ? "Le prénom doit contenir au moins 3 caractères"
                : null
        });
        break;
      case "lastName":
        setUsr({ ...usr, lastName: val });
        setValidate({
          ...validate,
          lastName:
            val === ""
              ? "Le nom est requis"
              : val.length < 3
                ? "Le nom doit contenir au moins 3 caractères"
                : null
        });
        break;
      case "password":
        setUsr({ ...usr, password: val });
        setValidate({
          ...validate,
          password:
            val === ""
              ? "Le mot de passe est requis"
              : val.length < 8
                ? "Le mot de passe doit contenir au moins 8 caractères"
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
                risingTalent: "Talent Émergent",
                risingTalentAr: "موهبة صاعدة",
                topRated: "Très Bien Noté",
                topRatedAr: "تقييم عالي",
                expert: "Expert-Vérifié",
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
    <>
      <style>
        {`
        .yako-signup-container {
          background-color: #f9f9f9;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
        }
        
        .yako-signup-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          padding: 40px;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .yako-error-message {
          color: #e53e3e;
          text-align: center;
          margin-bottom: 20px;
          font-size: 14px;
        }
        
        .yako-form-row {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .yako-form-group {
          flex: 1;
        }
        
        .yako-form-control {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 16px;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .yako-form-control:focus {
          border-color: #2e8b57;
          box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
          outline: none;
        }
        
        .yako-error-text {
          color: #e53e3e;
          font-size: 14px;
          margin-top: 5px;
        }
        
        .yako-user-type-title {
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          color: #1a5c1a;
          margin: 25px 0 15px;
        }
        
        .yako-user-type-options {
          display: flex;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        
        .yako-user-type-option {
          flex: 1;
          position: relative;
        }
        
        .yako-user-type-option input[type="radio"] {
          position: absolute;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        
        .yako-user-type-option label {
          display: block;
          padding: 12px 15px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .yako-user-type-option input[type="radio"]:checked + label {
          background-color: #2e8b57;
          color: white;
        }
        
        .yako-country-select {
          margin-bottom: 20px;
        }
        
        .yako-country-select select {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 16px;
          background-color: white;
          transition: all 0.3s ease;
        }
        
        .yako-country-select select:focus {
          border-color: #2e8b57;
          box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
          outline: none;
        }
        
        .yako-terms {
          margin-bottom: 25px;
        }
        
        .yako-terms-input {
          margin-right: 10px;
        }
        
        .yako-terms-label {
          font-size: 14px;
          color: #4a5568;
        }
        
        .yako-terms-link {
          color: #2e8b57;
          text-decoration: none;
          font-weight: 500;
        }
        
        .yako-terms-link:hover {
          text-decoration: underline;
        }
        
        .yako-btn-container {
          text-align: center;
        }
        
        .yako-btn {
          background-color: #2e8b57;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          max-width: 300px;
        }
        
        .yako-btn:hover {
          background-color: #1a5c1a;
        }
        
        .yako-btn:disabled {
          background-color: #a0aec0;
          cursor: not-allowed;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .yako-signup-card {
            padding: 30px 20px;
          }
          
          .yako-form-row {
            flex-direction: column;
            gap: 0;
          }
          
          .yako-form-group {
            margin-bottom: 15px;
          }
        }
        
        @media (max-width: 576px) {
          .yako-signup-card {
            padding: 25px 15px;
          }
          
          .yako-user-type-title {
            font-size: 16px;
          }
          
          .yako-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
        `}
      </style>
      
      <div className="yako-signup-container">
        <div className="yako-signup-card">
          {errorMessage && <div className="yako-error-message">{errorMessage}</div>}
          
          <form>
            <div className="yako-form-row">
              <div className="yako-form-group">
                <input
                  type="text"
                  name="firstName"
                  className="yako-form-control"
                  placeholder="Prénom"
                  onInput={getUserData}
                />
                {validate.firstName && <div className="yako-error-text">{validate.firstName}</div>}
              </div>
              <div className="yako-form-group">
                <input
                  type="text"
                  name="lastName"
                  className="yako-form-control"
                  placeholder="Nom"
                  onInput={getUserData}
                />
                {validate.lastName && <div className="yako-error-text">{validate.lastName}</div>}
              </div>
            </div>
            
            <div className="yako-form-group">
              <input
                type="password"
                name="password"
                className="yako-form-control"
                placeholder="Mot de passe"
                onInput={getUserData}
              />
              {validate.password && <div className="yako-error-text">{validate.password}</div>}
            </div>
            
            <div className="yako-user-type-title">Je souhaite :</div>
            <div className="yako-user-type-options">
              <div className="yako-user-type-option">
                <input
                  type="radio"
                  name="userType"
                  id="client"
                  defaultChecked
                  value="client"
                  onInput={getUserData}
                />
                <label htmlFor="client">Embaucher pour un projet</label>
              </div>
              <div className="yako-user-type-option">
                <input
                  type="radio"
                  name="userType"
                  id="talent"
                  value="talent"
                  onInput={getUserData}
                />
                <label htmlFor="talent">Travailler comme indépendant</label>
              </div>
            </div>
            
            {usr.userType === "client" && (
              <div className="yako-country-select">
                <CountrySelect 
                  value={country} 
                  onChange={setCountry} 
                  className="yako-form-control"
                />
              </div>
            )}
            
            <div className="yako-terms">
              <input
                ref={terms}
                name="terms"
                className="yako-terms-input"
                type="checkbox"
                onChange={getUserData}
              />
              <label className="yako-terms-label">
                J'accepte les{" "}
                <a href="#" className="yako-terms-link">
                  Conditions d'utilisation de Yako
                </a>
              </label>
            </div>
            
            <div className="yako-btn-container">
              <button
                className="yako-btn"
                type="button"
                disabled={
                  validate.password != null || 
                  validate.firstName || 
                  validate.lastName ||
                  (usr.userType === "client" && !country) || 
                  !validate.terms
                }
                onClick={signUpComplete}
              >
                Créer mon compte
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}