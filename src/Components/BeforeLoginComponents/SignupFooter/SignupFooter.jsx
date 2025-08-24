import React from "react";
import { useTranslation } from "react-i18next";  

export default function SignupFooter() {
    const { t } = useTranslation();
    
    return (
        <>
            <style>
                {`
                .yako-signup-footer {
                    background: linear-gradient(135deg, #1a5c1a 0%, #2e8b57 100%);
                    color: white;
                    padding: 60px 0 30px;
                    margin-top: auto;
                }
                
                .yako-footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                .yako-footer-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .yako-footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 30px;
                    margin-bottom: 30px;
                }
                
                .yako-footer-links li {
                    margin: 0;
                }
                
                .yako-footer-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 16px;
                    transition: color 0.3s ease;
                    display: inline-block;
                    padding: 5px 0;
                }
                
                .yako-footer-links a:hover {
                    color: #e6f7e6;
                    text-decoration: underline;
                }
                
                .yako-footer-copyright {
                    margin-top: 20px;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.8);
                    text-align: center;
                }
                
                .yako-footer-divider {
                    width: 60px;
                    height: 3px;
                    background-color: #4caf50;
                    margin: 15px auto 25px;
                    border-radius: 2px;
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                    .yako-signup-footer {
                        padding: 40px 0 20px;
                    }
                    
                    .yako-footer-links {
                        flex-direction: column;
                        gap: 15px;
                        align-items: center;
                    }
                    
                    .yako-footer-copyright {
                        margin-top: 15px;
                    }
                }
                
                @media (max-width: 576px) {
                    .yako-signup-footer {
                        padding: 30px 0 15px;
                    }
                    
                    .yako-footer-links a {
                        font-size: 14px;
                    }
                    
                    .yako-footer-copyright {
                        font-size: 12px;
                    }
                }
                `}
            </style>
            
            <footer className="yako-signup-footer">
                <div className="yako-footer-container">
                    <div className="yako-footer-content">
                        <ul className="yako-footer-links">
                            <li>
                                <a href="#">À propos de Yako</a>
                            </li>
                            <li>
                                <a href="#">Comment ça marche</a>
                            </li>
                            <li>
                                <a href="#">Sécurité</a>
                            </li>
                            <li>
                                <a href="#">Centre d'aide</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                        
                        <div className="yako-footer-divider"></div>
                        
                        <div className="yako-footer-copyright">
                            © 2025 Yako Global Inc. Tous droits réservés.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}