/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable */
import React from "react";
import "./HomeFourthSection.css";
import img1 from "../../../assets/Img/cara.webp";
import img2 from "../../../assets/Img/sam.webp";
import img3 from "../../../assets/svg/clearly-rated.e51d653.svg";
import { useTranslation } from "react-i18next";  
import { useSelector } from "react-redux";

export default function HomeFourthSection() {
  let lang = useSelector(state => state.lang);
  const { t } = useTranslation();
  
  // Traductions personnalisées pour Yako - Marché africain
  const yakoTranslations = {
    whatTheySay: "CE QU'ILS DISENT DE YAKO",
    theFreelancerTalent: "Grâce à Yako, j'ai trouvé le talent local dont j'avais besoin pour mon entreprise. La qualité du travail et la rapidité d'exécution ont dépassé mes attentes.",
    clientName1: "Aminata Diop",
    clientRole1: "Propriétaire de Restaurant, Dakar",
    myRelationshipWith: "Yako a transformé ma carrière. Je peux maintenant trouver des missions régulièrement et être payé rapidement. C'est la plateforme qu'il manquait en Afrique.",
    talentName1: "Kwame Nkrumah",
    talentRole1: "Électricien, Accra",
    reviews: "AVIS",
    topSkills: "COMPÉTENCES POPULAIRES",
    dataEntrySpecialists: "Saisie de données",
    videoEditors: "Monteurs vidéo",
    dataAnalyst: "Analyste de données",
    shopifyDeveloper: "Développeur Shopify",
    rubyOnRailsDeveloper: "Développeur Ruby on Rails",
    androidDeveloper: "Développeur Android",
    bookkeeper: "Comptable",
    contentWriter: "Rédacteur de contenu",
    copywriter: "Copywriter",
    databaseAdministrator: "Administrateur de base de données",
    dataScientist: "Data scientist",
    frontEndDeveloper: "Développeur frontend",
    seeMore: "Voir plus",
    browseAll: "Parcourir toutes les compétences",
    // Compétences populaires en Afrique
    plumbing: "Plomberie",
    electricalWork: "Électricité",
    homeCleaning: "Ménage",
    childcare: "Garde d'enfants",
    cooking: "Cuisine",
    tutoring: "Soutien scolaire",
    driving: "Conduite",
    hairdressing: "Coiffure",
    gardening: "Jardinage",
    carpentry: "Menuiserie",
    photography: "Photographie",
    eventPlanning: "Organisation d'événements",
    phoneRepair: "Réparation téléphones",
    tailoring: "Couture",
    deliveryServices: "Livraison",
    massageTherapy: "Massage bien-être"
  };

  return (
    <section className="yako-testimonials-section">
      <div className="container">
        <div className="text-center yako-section-header">
          <p className={`yako-section-subtitle ${lang==='ar' ? "yako-rtl-text" : ""}`}>
            {yakoTranslations.whatTheySay}
          </p>
        </div>
        
        <div className="row yako-testimonials">
          <div className="col-md-6">
            <div className="yako-testimonial-card">
              <div className="yako-testimonial-content">
                <p className="yako-testimonial-text">
                  {yakoTranslations.theFreelancerTalent}
                </p>
                <div className="yako-testimonial-author">
                  <strong>{yakoTranslations.clientName1}</strong>
                  <p>{yakoTranslations.clientRole1}</p>
                </div>
              </div>
              <div className="yako-testimonial-image">
                <img src={img1} alt={yakoTranslations.clientName1} />
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="yako-testimonial-card">
              <div className="yako-testimonial-content">
                <p className="yako-testimonial-text">
                  {yakoTranslations.myRelationshipWith}
                </p>
                <div className="yako-testimonial-author">
                  <strong>{yakoTranslations.talentName1}</strong>
                  <p>{yakoTranslations.talentRole1}</p>
                </div>
              </div>
              <div className="yako-testimonial-image">
                <img src={img2} alt={yakoTranslations.talentName1} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="yako-rating-section text-center">
          <div className="yako-rating">
            <span className="yako-rating-score">4.8 / 5</span>
            <div className="yako-rating-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="yako-rating-label">{yakoTranslations.reviews}</span>
            <img src={img3} alt="Certification" className="yako-rating-badge" />
          </div>
        </div>
        
        <div className="yako-skills-section">
          <div className="text-center">
            <p className={`yako-section-subtitle ${lang==='ar' ? "yako-rtl-text" : ""}`}>
              {yakoTranslations.topSkills}
            </p>
          </div>
          
          <div className="yako-skills-container">
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.plumbing}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.electricalWork}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.homeCleaning}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.childcare}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.cooking}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.tutoring}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.driving}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.hairdressing}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.gardening}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.carpentry}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.photography}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.eventPlanning}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.phoneRepair}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.tailoring}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.deliveryServices}
            </a>
            <a href="#" className="yako-skill-tag">
              {yakoTranslations.massageTherapy}
            </a>
            <a href="#" className="yako-skill-tag yako-highlight">
              {yakoTranslations.seeMore}
            </a>
          </div>
          
          <div className="text-center yako-skills-cta">
            <button className="yako-btn yako-btn-outline">
              {yakoTranslations.browseAll}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}