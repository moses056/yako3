import React from 'react'
import talentMainSectionClientUseUpworkDevIT from '../../../assets/img/talent-main-section-client-use-upwork-Dev-IT.png'
import talentMainSectionClientDeveloperDev from '../../../assets/img/talent_main-section-client-developer-Dev-IT.jpeg'

export default function ProjectExamples() {
  return (
    <>
      <style>
        {`
        .yako-project-examples {
          padding: 60px 0;
          background-color: #f9f9f9;
        }
        
        .yako-section-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .yako-section-line {
          width: 40px;
          height: 4px;
          background-color: #2e8b57;
          margin-right: 15px;
          border-radius: 2px;
        }
        
        .yako-section-title {
          font-size: 18px;
          font-weight: 600;
          color: #2e8b57;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .yako-main-title {
          font-size: 36px;
          font-weight: 700;
          color: #1a5c1a;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .yako-project-title {
          font-size: 24px;
          font-weight: 600;
          color: #1a5c1a;
          margin-bottom: 15px;
        }
        
        .yako-rating {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .yako-stars {
          color: #f6ad55;
          margin-right: 10px;
        }
        
        .yako-stars i {
          margin-right: 2px;
        }
        
        .yako-budget {
          font-weight: 600;
          color: #2e8b57;
        }
        
        .yako-quote {
          color: #cbd5e0;
          font-size: 36px;
          margin-bottom: 15px;
          line-height: 1;
        }
        
        .yako-testimonial {
          font-size: 16px;
          line-height: 1.6;
          color: #4a5568;
          font-style: italic;
          margin-bottom: 25px;
          position: relative;
          padding-left: 20px;
        }
        
        .yako-testimonial::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background-color: #2e8b57;
          border-radius: 2px;
        }
        
        .yako-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .yako-skill-tag {
          background-color: #e6f7e6;
          color: #2e8b57;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .yako-image-container {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .yako-main-image {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .yako-client-card {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background-color: white;
          border-radius: 12px;
          padding: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          max-width: 250px;
        }
        
        .yako-client-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 15px;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #2e8b57;
        }
        
        .yako-client-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .yako-client-info {
          flex-grow: 1;
        }
        
        .yako-client-label {
          font-size: 12px;
          color: #718096;
          margin-bottom: 3px;
        }
        
        .yako-client-name {
          font-size: 16px;
          font-weight: 600;
          color: #1a5c1a;
        }
        
        /* Animation au chargement */
        .yako-project-examples {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .yako-main-title {
            font-size: 30px;
          }
          
          .yako-project-title {
            font-size: 20px;
          }
          
          .yako-client-card {
            max-width: 200px;
          }
        }
        
        @media (max-width: 768px) {
          .yako-project-examples {
            padding: 40px 0;
          }
          
          .yako-main-title {
            font-size: 26px;
          }
          
          .yako-project-title {
            font-size: 18px;
          }
          
          .yako-testimonial {
            font-size: 15px;
          }
          
          .yako-image-container {
            margin-top: 30px;
          }
          
          .yako-client-card {
            position: static;
            margin-top: 20px;
            max-width: 100%;
          }
        }
        
        @media (max-width: 576px) {
          .yako-main-title {
            font-size: 22px;
          }
          
          .yako-project-title {
            font-size: 16px;
          }
          
          .yako-quote {
            font-size: 28px;
          }
          
          .yako-testimonial {
            font-size: 14px;
          }
          
          .yako-skill-tag {
            font-size: 12px;
            padding: 6px 12px;
          }
        }
        `}
      </style>
      
      <div className="yako-project-examples">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="yako-section-header">
                <div className="yako-section-line"></div>
                <div className="yako-section-title">Exemples de Projets</div>
              </div>
              
            <h1 className="yako-main-title">Découvrez comment Yako change des vies</h1>

<h3 className="yako-project-title">De chômeur à professionnel freelance avec revenus stables</h3>

<div className="yako-rating">
  <div className="yako-stars">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
  </div>
  <div className="yako-budget">5/5 • Revenus mensuels : 350000FCFA</div>
</div>

<div className="yako-quote">
  <i className="fas fa-quote-left"></i>
</div>

<div className="yako-testimonial">
  "J’étais au chômage depuis 3 ans et je ne voyais pas comment sortir de cette situation.  
  Grâce à Yako, j’ai trouvé ma première mission freelance en moins de 2 semaines.  
  Aujourd’hui, je travaille régulièrement avec des clients, je gagne un revenu stable 
  et je peux enfin subvenir aux besoins de ma famille. C’est incroyable de voir qu’une simple plateforme peut changer autant une vie."
</div>

              
              <div className="yako-skills">
                <div className="yako-skill-tag">Entreprenaria</div>
                <div className="yako-skill-tag">Skills</div>
                
                <div className="yako-skill-tag">Intégration SMS</div>
               
              </div>
            </div>
            
            <div className="col-lg-5 col-12">
              <div className="yako-image-container">
                <img 
                  className="yako-main-image" 
                  src={talentMainSectionClientUseUpworkDevIT} 
                  alt="Application agricole Yako" 
                />
                
                <div className="yako-client-card">
                  <div className="yako-client-avatar">
                    <img src={talentMainSectionClientDeveloperDev} alt="Client" />
                  </div>
                  <div className="yako-client-info">
                    <div className="yako-client-label">Projet par</div>
                    <div className="yako-client-name">Aminata Diallo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}