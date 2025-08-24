import { Link } from "react-router-dom";
import { auth, googleProvider, appleProvider } from "../../../firebase";
import apple from "../../../assets/svg/apple.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function LoginTemp() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [emailError, setEmailErorr] = useState("");
  const [PasswordError, setPasswordErrorr] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  const getUserData = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    switch (name) {
      case "email":
        setUser({ ...user, email: val });
        setEmailErorr(
          val === ""
            ? "L'email est requis"
            : !val.match(
                /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
              )
            ? "Veuillez entrer un email valide"
            : null
        );
        break;
      case "password":
        setUser({ ...user, password: val });
        setPasswordErrorr(
          val === ""
            ? "Le mot de passe est requis"
            : val.length < 8
            ? "Le mot de passe doit contenir au moins 8 caractères"
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
        setErrorMessage("Veuillez vérifier votre email avant de vous connecter.");
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
        setErrorMessage("Veuillez vérifier votre email avant de vous connecter.");
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
        setErrorMessage("Veuillez vérifier votre email avant de vous connecter.");
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
    <>
      <style>
        {`
        .yako-login-container {
          background-color: #f9f9f9;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
        }
        
        .yako-login-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          padding: 40px;
          width: 100%;
          max-width: 450px;
          margin: 0 auto;
        }
        
        .yako-login-title {
          color: #1a5c1a;
          font-size: 24px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 30px;
        }
        
        .yako-error-message {
          color: #e53e3e;
          text-align: center;
          margin-bottom: 20px;
          font-size: 14px;
        }
        
        .yako-form-group {
          margin-bottom: 20px;
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
        
        .yako-form-control.border-danger {
          border-color: #e53e3e;
        }
        
        .yako-error-text {
          color: #e53e3e;
          font-size: 14px;
          margin-top: 5px;
        }
        
        .yako-btn {
          border-radius: 8px;
          padding: 12px 20px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          width: 100%;
        }
        
        .yako-btn-primary {
          background-color: #2e8b57;
          color: white;
        }
        
        .yako-btn-primary:hover {
          background-color: #1a5c1a;
        }
        
        .yako-btn-primary:disabled {
          background-color: #a0aec0;
          cursor: not-allowed;
        }
        
        .yako-separator {
          display: flex;
          align-items: center;
          margin: 25px 0;
          color: #718096;
        }
        
        .yako-separator::before,
        .yako-separator::after {
          content: "";
          flex: 1;
          height: 1px;
          background-color: #e2e8f0;
        }
        
        .yako-separator::before {
          margin-right: 15px;
        }
        
        .yako-separator::after {
          margin-left: 15px;
        }
        
        .yako-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          text-decoration: none;
          border: 1px solid #e2e8f0;
        }
        
        .yako-social-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .yako-google-btn {
          background-color: white;
          color: #333;
        }
        
        .yako-apple-btn {
          background-color: white;
          color: #333;
        }
        
        .yako-social-icon {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
        
        .yako-divider {
          height: 1px;
          background-color: #e2e8f0;
          margin: 25px 0;
        }
        
        .yako-signup-text {
          text-align: center;
          color: #4a5568;
          margin-bottom: 15px;
        }
        
        .yako-signup-link {
          display: block;
          width: 100%;
          text-align: center;
          background-color: transparent;
          color: #2e8b57;
          border: 1px solid #2e8b57;
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .yako-signup-link:hover {
          background-color: #2e8b57;
          color: white;
        }
        
        /* Responsive Design */
        @media (max-width: 576px) {
          .yako-login-card {
            padding: 30px 20px;
          }
        }
        `}
      </style>
      
      <div className="yako-login-container">
        <div className="yako-login-card">
          <h2 className="yako-login-title">Connectez-vous et commencez à travailler</h2>
          
          {errorMessage && <div className="yako-error-message">{errorMessage}</div>}
          
          <form>
            <div className="yako-form-group">
              {emailError && <div className="yako-error-text">{emailError}</div>}
              <input
                type="email"
                name="email"
                className={`yako-form-control ${emailError ? "border-danger" : ""}`}
                placeholder="Nom d'utilisateur ou Email"
                onInput={getUserData}
              />
            </div>
            
            <div className="yako-form-group">
              {PasswordError && <div className="yako-error-text">{PasswordError}</div>}
              <input
                type="password"
                name="password"
                className={`yako-form-control ${PasswordError ? "border-danger" : ""}`}
                placeholder="Mot de passe"
                onInput={getUserData}
              />
            </div>
            
            <div className="yako-form-group">
              <button
                className="yako-btn yako-btn-primary"
                onClick={login}
                disabled={PasswordError !== null || emailError !== null}
              >
                Se connecter
              </button>
            </div>
            
            <div className="yako-separator">ou</div>
            
            <div className="yako-form-group">
              <div className="yako-social-btn yako-google-btn" onClick={googleLogin}>
                <svg className="yako-social-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continuer avec Google
              </div>
            </div>
            
            <div className="yako-form-group">
              <div className="yako-social-btn yako-apple-btn" onClick={appleLogin}>
                <svg className="yako-social-icon" viewBox="0 0 24 24">
                  <path fill="#000" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 17.03 2 11.11 4.28 7.97c.98-1.4 2.25-2.15 3.82-2.3 1.45-.13 2.84.35 4.07.75 1.12.36 2.17.33 3.31-.03 1.49-.46 2.81-.32 3.98.54 1.56 1.19 2.43 3.03 2.56 5.38.03.55.03 1.1.03 1.97zm-5.03-17.2c-.72 1.03-1.97 1.78-3.17 1.66-.15-1.22.45-2.52 1.1-3.31.72-.85 2.02-1.4 3.1-1.45.13 1.26-.39 2.52-1.03 3.1z"/>
                </svg>
                Continuer avec Apple
              </div>
            </div>
            
            <div className="yako-divider"></div>
            
            <div className="yako-signup-text">Nouveau sur Yako ?</div>
            <Link className="yako-signup-link" to="/sign-up">
              Créer un compte
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}