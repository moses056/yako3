import React from 'react'
import '../HomeSecondSection/HomeSecondSection.css'
import { useTranslation } from "react-i18next";  
import { useSelector } from 'react-redux';

export default function HomeThirdSection() {
    let lang = useSelector(state => state.lang);
    const { t } = useTranslation();
    
    // Traductions personnalisées pour Yako - Marché africain
    const yakoTranslations = {
        forTalent: "POUR LES TALENTS",
        workYourWay: "Travaillez selon vos conditions",
        chooseHowYouWork: "Choisissez la formule qui vous convient le mieux pour gagner votre vie",
        findAProjectToWorkOn: "Trouvez des missions correspondant à vos compétences",
        talentMarketplace: "Place de Marché",
        sellAPredefinedProject: "Proposez vos services prêts à l'emploi",
        projectCatalog: "Services Instantanés",
        findWorkAs: "Trouver du travail en tant que",
        domesticWorker: "Employé(e) de maison",
        handyman: "Bricoleur",
        tutor: "Tuteur",
        deliveryPerson: "Livreur",
        beautician: "Esthéticien(ne)",
        driver: "Chauffeur",
        eventStaff: "Personnel événementiel",
        plumber: "Plombier",
        electrician: "Électricien",
        cook: "Cuisinier",
        tailor: "Couturier",
        photographer: "Photographe",
        itSupport: "Support IT",
        cleaner: "Agent de nettoyage",
        gardener: "Jardinier",
        hairdresser: "Coiffeur",
        massageTherapist: "Masseur",
        seeAllOpportunities: "Voir toutes les opportunités"
    };

    return (
        <section className="yako-services-section">
            <div className="container">
                <div className="row">
                    <div className="text-center yako-section-header">
                        <p className={`yako-section-subtitle ${lang==='ar' ? "yako-rtl-text" : ""}`}>
                            {yakoTranslations.forTalent}
                        </p>
                        <h2 className="yako-section-title">{yakoTranslations.workYourWay}</h2>
                        <p className={`yako-section-description ${lang==='ar' ? "yako-rtl-text" : ""}`}>
                            {yakoTranslations.chooseHowYouWork}
                        </p>
                    </div>
                </div>
                
                <div className="row yako-services-cards justify-content-center">
                    <div className="col-md-5 col-sm-12">
                        <div className="yako-service-card">
                            <a href="#" className="yako-card-link">
                                <div className="yako-card-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <h3>{yakoTranslations.findAProjectToWorkOn}</h3>
                                <p>{yakoTranslations.talentMarketplace}</p>
                                <div className="yako-card-arrow">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-md-5 col-sm-12">
                        <div className="yako-service-card">
                            <a href="#" className="yako-card-link">
                                <div className="yako-card-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <h3>{yakoTranslations.sellAPredefinedProject}</h3>
                                <p>{yakoTranslations.projectCatalog}</p>
                                <div className="yako-card-arrow">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="row yako-categories-section">
                    <div className="col-12">
                        <h3 className="text-center mb-4">{yakoTranslations.findWorkAs}</h3>
                        <div className="yako-skills-container justify-content-center">
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.domesticWorker}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.handyman}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.tutor}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.deliveryPerson}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.beautician}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.driver}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.eventStaff}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.plumber}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.electrician}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.cook}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.tailor}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.photographer}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.itSupport}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.cleaner}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.gardener}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.hairdresser}
                            </a>
                            <a href="#" className="yako-skill-tag">
                                {yakoTranslations.massageTherapist}
                            </a>
                            <a href="#" className="yako-skill-tag yako-highlight">
                                {yakoTranslations.seeAllOpportunities}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}