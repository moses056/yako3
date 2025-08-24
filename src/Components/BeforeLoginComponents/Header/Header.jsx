import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LanguageList from '../../SharedComponents/LanguageBtn/LanguageList'
import './Header.css'

export default function Header() {
    let lang = useSelector(state => state.lang)
    const { t } = useTranslation()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    
    // Fonction pour faire défiler vers une section spécifique
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsDropdownOpen(false) // Fermer le menu après sélection
        }
    }

    // Gérer l'ouverture/fermeture du menu déroulant
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <header className="modern-header">
            <div className="header-top">
                <div className="container">
                    <div className="header-content">
                        {/* Logo */}
                        <div className="logo-container">
                            <Link to="/" className="logo-link">
                                <div className="logo">
                                    <span className="logo-text">Yako</span>
                                    <span className="logo-dot"></span>
                                </div>
                            </Link>
                        </div>

                        {/* Navigation principale */}
                        <nav className="main-nav">
                            <button className="mobile-menu-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            
                            <div className="nav-menu">
                                <div className="nav-item dropdown">
                                    <button className="nav-link" onClick={toggleDropdown}>
                                        {t("Pourquoi Yako?")}
                                        <i className={`fas fa-chevron-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
                                    </button>
                                    
                                    <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                        <div className="dropdown-content">
                                            <div className="dropdown-section">
                                                <h4>{t("Avantages")}</h4>
                                                <button 
                                                    className="dropdown-item" 
                                                    onClick={() => scrollToSection('discover-yako')}
                                                >
                                                                                    <li><Link className="dropdown-item" to="dev-it">{t("Découvrir Yako")}</Link></li>
              
                                                </button>
                                            </div>
                                            
                                            <div className="dropdown-section">
                                                <h4>{t("Trouve un job en quelques clics")}</h4>
                                                <div className="hire-options">
                                                    <div className="hire-option">
                                                        <button 
                                                            className="hire-option-btn"
                                                            onClick={() => scrollToSection('talent-marketplace')}
                                                        >
                                                            <h5>{t("Petits boulots rapides")}</h5>
                                                            <p>{t("Defile les offres d'emploi et trouve celles qui te correspondent le mieux")}</p>
                                                        </button>
                                                    </div>
                                                    <div className="hire-option">
                                                        <button className="hire-option-btn">
                                                            <h5>{t("Poste une offre d'emploi")}</h5>
                                                            <p>{t("Selectionne le prestataire qui te correspond ")}</p>
                                                        </button>
                                                        </div>
                                                    <div className="hire-option">
 
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="dropdown-footer">
                                                <button 
                                                    className="learn-more-btn"
                                                    onClick={() => scrollToSection('learn-hire')}
                                                >
                                                     <a href="#">{t("Trouver un emploi gratuitement maintenant")}
                                                            <i className={`fa ${lang === 'ar' ? "fa-arrow-left pe-3 " : "fa-arrow-right"} ms-3 text-success `}></i></a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Search and Actions */}
                        <div className="header-actions">
                            <div className="search-container">
                                <button className="search-btn">
                                    <i className="fas fa-search"></i>
                                </button>
                                <input 
                                    type="text" 
                                    className="search-input" 
                                    placeholder={t("Rechercher un job...")} 
                                />
                            </div>
                            
                            <div className="auth-buttons">
                                <Link to="/login" className="btn login-btn">{t("Connexion")}</Link>
                                <Link to="/sign-up" className="btn signup-btn">{t("Créer un compte")}</Link>
                                <LanguageList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </header>
    )
}