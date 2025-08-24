import React from "react";
import "./BrowseBuyProject.css";
import talentMainSectionBuyProjectByDevIT from "../../../assets/img/talent-main-section-buy-project-by-Dev-IT.png";
import talentMainSectionBuyProjectDevIT from "../../../assets/img/talent-main-section-buy-project-Dev-IT.png";

export default function BrowseBuyProjects() {
  return (
    <section className="project-catalog">
      <div className="container">
        <div className="project-catalog-header">
          <div className="project-catalog-intro">
            <div className="section-title">
              <div className="title-line"></div>
              <h2>Catalogue Yako</h2>
            </div>
            <h1>Trouve et réserve des services rapides près de chez toi</h1>
          </div>
        </div>
        
        <div className="project-catalog-content">
          <div className="project-categories">
            <ul className="category-list">
              <li className="category-item active">Cours et soutien scolaire</li>
              <li className="category-item">Garde d'enfant</li>
              <li className="category-item">Dépannage Rapides</li>
              <li className="category-item">Ménagère</li>
              <li className="category-item">Vente et animations</li>
              <li className="category-item">Jardinage</li>
            </ul>
          </div>
          
          <div className="project-showcase">
            <div className="project-image-container">
              <img src={talentMainSectionBuyProjectDevIT} alt="Exemples de services" />
            </div>
            
            <div className="project-creator">
              <div className="creator-avatar">
                <img src={talentMainSectionBuyProjectByDevIT} alt="Creator" />
              </div>
              <div className="creator-info">
                <p className="creator-label">Service proposé par </p>
                <p className="creator-name">Moise.S.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="project-catalog-footer">
          <div className="project-description">
            <p>Avec <strong>Yako</strong>, trouve rapidement quelqu’un pour t’aider : 
              ménage, baby-sitting, petits travaux, ou même cours particuliers. 
              Simple, rapide et sécurisé.</p>
          </div>
          <div className="project-cta">
            <button className="btn-learn-more">Découvrir</button>
          </div>
        </div>
      </div>
    </section>
  );
}