import React from 'react'
import './HeaderForDevItTalent.css'
import talentHeaderDevIT from '../../../assets/img/talent-header-Dev-IT.png'
import talentHeaderBgSvg1DevIT from "../../../assets/img/talent-header-bg-svg1-Dev-IT.svg"
import talentHeaderBgSvg2DevIT from "../../../assets/img/talent-header-bg-svg2-Dev-IT.svg"
import { Link } from 'react-router-dom'

export default function HeaderForDevItTalent() {
    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Bienvenue sur <span className="highlight">Yako</span>, 
                                la plateforme qui connecte la jeunesse africaine aux opportunités.
                            </h1>
                            <p className="hero-description">
                                Que tu sois à la recherche d'un emploi, d'une mission freelance ou 
                                d'un nouveau talent pour ton business, Yako est ton allié.  
                                Ici, chaque profil compte. Chaque compétence a sa place.  
                                Chaque rêve a une chance.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/login" className="btn btn-primary">
                                    Trouver un emploi
                                </Link>
                                <button className="btn btn-secondary">
                                    Publier une offre d'emploi
                                </button>
                            </div>
                        </div>
                        <div className="hero-image-container">
                            <img src={talentHeaderDevIT} className="hero-image" alt="Talent professionnel" />
                            <img src={talentHeaderBgSvg1DevIT} className="hero-bg-svg svg-1" alt="" />
                            <img src={talentHeaderBgSvg2DevIT} className="hero-bg-svg svg-2" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}