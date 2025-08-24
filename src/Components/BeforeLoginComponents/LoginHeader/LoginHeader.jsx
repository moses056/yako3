import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../SharedComponents/Logo/Logo';

export default function LoginHeader() {
    const { pathname } = useLocation();
    
    return (
        <>
            <style>
                {`
                .yako-login-header {
                    background: linear-gradient(135deg, #1a5c1a 0%, #2e8b57 100%);
                    padding: 15px 0;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                
                .yako-header-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .yako-header-text {
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: 500;
                    margin: 0;
                }
                
                .yako-header-link {
                    color: #a7f3d0;
                    text-decoration: none;
                    font-weight: 600;
                    margin-left: 8px;
                    transition: color 0.3s ease;
                }
                
                .yako-header-link:hover {
                    color: #ffffff;
                    text-decoration: underline;
                }
                
                /* Animation au chargement */
                .yako-login-header {
                    animation: slideDown 0.5s ease-out;
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                    .yako-header-text {
                        font-size: 14px;
                    }
                }
                
                @media (max-width: 576px) {
                    .yako-header-container {
                        flex-direction: column;
                        gap: 10px;
                    }
                }
                `}
            </style>
            
            <header className="yako-login-header">
                <div className="yako-header-container">
                    <Logo />
                    <div>
                        {
                            pathname === "/sign-up" &&
                            <p className="yako-header-text">
                                Vous avez déjà un compte ?
                                <Link to="/login" className="yako-header-link">
                                    {" "}Connectez-vous
                                </Link>
                            </p>
                        }
                    </div>
                </div>
            </header>
        </>
    );
}