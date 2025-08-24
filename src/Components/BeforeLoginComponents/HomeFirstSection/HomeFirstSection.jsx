import React from 'react'
import './HomeFirstSection.css'
import img1 from '../../../assets/svg/Microsoft_logo.svg'
import img2 from '../../../assets/svg/Airbnb_Logo.svg'
import img3 from '../../../assets/svg/godaddy.d9459f1.svg'
import img4 from '../../../assets/svg/ge.svg'
import img5 from '../../../assets/svg/bissell.svg'
import img6 from '../../../assets/Img/susan-desktop.webp'
import img7 from '../../../assets/Img/john-desktop.webp'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux'

export default function HomeFirstSection() {
    let lang = useSelector(state => state.lang);
    const { t } = useTranslation();
    
    // Traductions personnalisées pour Yako
    const yakoTranslations = {
        title: "Yako: La plateforme d'emploi pour l'Afrique",
        subtitle: "Connectez-vous à des opportunités professionnelles rapides et simples partout en Afrique",
        findTalent: "Trouver un talent",
        findWork: "Trouver un travail rapide",
        trustedBy: "Fiable et utilisé par des milliers d'Africains"
    };

    return (
        <section className="yako-hero-section overflow-hidden">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="yako-hero-content">
                            <h1 className="yako-hero-title">{yakoTranslations.title}</h1>
                            <p className="yako-hero-subtitle">
                                {yakoTranslations.subtitle}
                            </p>
                            <div className="yako-hero-buttons">
                                <Link className="yako-btn yako-btn-primary" to="/freelance-jobs">
                                    {yakoTranslations.findTalent}
                                </Link>
                                <button className={`yako-btn yako-btn-secondary ${lang === 'ar' ? "yako-btn-rtl" : ""}`}>
                                    {yakoTranslations.findWork}
                                </button>
                            </div>
                            <div className="yako-trusted-by">
                                <p>{yakoTranslations.trustedBy}</p>
                                <ul className="yako-partners-list">
                                    <li><img src={img1} alt="Partenaire" className="yako-partner-logo" /></li>
                                    <li><img src={img2} alt="Partenaire" className="yako-partner-logo" /></li>
                                    <li><img src={img3} alt="Partenaire" className="yako-partner-logo" /></li>
                                    <li><img src={img4} alt="Partenaire" className="yako-partner-logo" /></li>
                                    <li><img src={img5} alt="Partenaire" className="yako-partner-logo" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="yako-hero-images">
                            <div className="yako-main-image">
                                <img src={img6} alt="Professionnelle africaine" />
                            </div>
                            <div className="yako-secondary-image">
                                <img src={img7} alt="Professionnel africain" />
                            </div>
                            <div className="yako-image-badge">
                                <div className="badge-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <div className="badge-text">
                                    <p className="badge-title">+10,000</p>
                                    <p className="badge-subtitle">Opportunités</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}