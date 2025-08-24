import React from "react";
import "./HomeSecondSection.css";
import { useTranslation } from "react-i18next";  
import { useSelector } from "react-redux";

export default function HomeSecondSection() {
  let lang = useSelector(state => state.lang);
  const { t } = useTranslation();
  
  // Traductions personnalisées pour Yako - Marché africain
  const yakoTranslations = {
    forClients: "POUR LES CLIENTS",
    findTalentYourWay: "Trouvez le talent qu'il vous faut, rapidement",
    developTrustedRelationships: "Connectez-vous avec des professionnels qualifiés pour tous vos besoins du quotidien",
    postAJobAndHireAPro: "Publiez une offre et trouvez votre expert",
    talentMarketplace: "Place de Marché",
    browseAndBuyProjects: "Choisissez parmi nos services prêts à l'emploi",
    projectCatalog: "Services Instantanés",
    letUsFindTheRightTalent: "Laissez-nous vous recommander le meilleur profil",
    talentScout: "Sélection Yako",
    needASolutionForLargeOrganizations: "Vous représentez une entreprise ou une organisation ?",
    enterpriseSuiteHasYouCovered: "Découvrez Yako Pro",
    
    // Catégories principales adaptées au marché africain
    domesticServices: "Services Domestiques",
    constructionRenovation: "Construction & Rénovation",
    educationTutoring: "Éducation & Soutien Scolaire",
    beautyWellness: "Beauté & Bien-être",
    transportationLogistics: "Transport & Livraison",
    eventsEntertainment: "Événements & Divertissement",
    seeAllCategories: "Voir toutes les catégories",
    
    // Services populaires en Afrique
    childcare: "Garde d'enfants",
    homeCleaning: "Ménage à domicile",
    plumbing: "Plomberie",
    electricalWork: "Électricité",
    carpentry: "Menuiserie",
    cooking: "Cuisine & Traiteur",
    gardening: "Jardinage",
    personalDriver: "Chauffeur privé",
    hairdressing: "Coiffure",
    massageTherapy: "Massage & Bien-être",
    homeTutoring: "Cours particuliers",
    eventPlanning: "Organisation d'événements",
    photography: "Photographie",
    deliveryServices: "Services de livraison",
    phoneRepair: "Réparation téléphones",
    sewingTailoring: "Couture & Retouches"
  };

  return (
    <section className="yako-services-section">
      <div className="container">
        <div className="row">
          <div className="text-center yako-section-header">
            <div className="yako-scroll-indicator">
              <i className="fas fa-chevron-down"></i>
            </div>
            <p className={`yako-section-subtitle ${lang==='ar' ? "yako-rtl-text" : ""}`}>
              {yakoTranslations.forClients}
            </p>
            <h2 className="yako-section-title">{yakoTranslations.findTalentYourWay}</h2>
            <p className={`yako-section-description ${lang==='ar' ? "yako-rtl-text" : ""}`}>
              {yakoTranslations.developTrustedRelationships}
            </p>
          </div>
        </div>
        
        <div className="row yako-services-cards">
          <div className="col-md-4 col-sm-12">
            <div className="yako-service-card">
              <a href="#" className="yako-card-link">
                <div className="yako-card-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3>{yakoTranslations.postAJobAndHireAPro}</h3>
                <p>{yakoTranslations.talentMarketplace}</p>
                <div className="yako-card-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          
          <div className="col-md-4 col-sm-12">
            <div className="yako-service-card">
              <a href="#" className="yako-card-link">
                <div className="yako-card-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h3>{yakoTranslations.browseAndBuyProjects}</h3>
                <p>{yakoTranslations.projectCatalog}</p>
                <div className="yako-card-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
          
          <div className="col-md-4 col-sm-12">
            <div className="yako-service-card">
              <a href="#" className="yako-card-link">
                <div className="yako-card-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>{yakoTranslations.letUsFindTheRightTalent}</h3>
                <p>{yakoTranslations.talentScout}</p>
                <div className="yako-card-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 text-center yako-enterprise-cta">
            <p className={`yako-enterprise-text ${lang==='ar' ? "yako-rtl-text" : ""}`}>
              {yakoTranslations.needASolutionForLargeOrganizations}{" "}
              <a href="#" className="yako-enterprise-link">
                {yakoTranslations.enterpriseSuiteHasYouCovered}
              </a>
            </p>
          </div>
        </div>
        
        <div className="row yako-categories-section">
          <div className="col-md-6 col-sm-12">
            <ul className="yako-categories-list">
              <li>
                <a href="#" className="yako-category-link yako-highlight">
                  {yakoTranslations.domesticServices}
                </a>
              </li>
              <li>
                <a href="#" className="yako-category-link">
                  {yakoTranslations.constructionRenovation}
                </a>
              </li>
              <li>
                <a href="#" className="yako-category-link">
                  {yakoTranslations.educationTutoring}
                </a>
              </li>
              <li>
                <a href="#" className="yako-category-link">
                  {yakoTranslations.beautyWellness}
                </a>
              </li>
              <li>
                <a href="#" className="yako-category-link">
                  {yakoTranslations.transportationLogistics}
                </a>
              </li>
              <li>
                <a href="#" className="yako-category-link">
                  {yakoTranslations.eventsEntertainment}
                </a>
              </li>
              <li>
                <a href="#" className="yako-category-link yako-highlight">
                  {yakoTranslations.seeAllCategories}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-md-6 col-sm-12">
            <div className="yako-skills-container">
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.childcare}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.homeCleaning}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.plumbing}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.electricalWork}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.carpentry}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.cooking}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.gardening}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.personalDriver}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.hairdressing}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.massageTherapy}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.homeTutoring}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.eventPlanning}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.photography}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.deliveryServices}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.phoneRepair}
              </a>
              <a href="#" className="yako-skill-tag">
                {yakoTranslations.sewingTailoring}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}