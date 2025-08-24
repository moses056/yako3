import React from 'react'

export default function ListOfWork(props) {
    return (
        <>
            <style>
                {`
                :root {
                  --primary-green: #2e8b57;
                  --dark-green: #1a5c1a;
                  --light-green: #e6f7e6;
                  --accent-green: #4caf50;
                  --bg-light: #f9f9f9;
                  --text-dark: #333;
                  --text-light: #666;
                  --white: #ffffff;
                  --shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                  --shadow-hover: 0 4px 12px rgba(0, 0, 0, 0.12);
                }
                
                .yako-work-list {
                  background-color: var(--white);
                  border-radius: 12px;
                  box-shadow: var(--shadow);
                  padding: 25px;
                  margin-bottom: 30px;
                  transition: all 0.3s ease;
                }
                
                .yako-work-list:hover {
                  box-shadow: var(--shadow-hover);
                }
                
                .yako-work-header {
                  margin-bottom: 20px;
                }
                
                .yako-work-category {
                  font-size: 1.25rem;
                  font-weight: 700;
                  color: var(--dark-green);
                  margin: 0;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                }
                
                .yako-work-divider {
                  height: 3px;
                  background: linear-gradient(90deg, var(--accent-green), transparent);
                  width: 60px;
                  margin-top: 10px;
                  border-radius: 2px;
                }
                
                .yako-work-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                  gap: 15px;
                }
                
                .yako-work-item {
                  position: relative;
                  overflow: hidden;
                  border-radius: 8px;
                  transition: all 0.3s ease;
                }
                
                .yako-work-link {
                  display: flex;
                  align-items: center;
                  padding: 12px 15px;
                  background-color: var(--bg-light);
                  color: var(--text-dark);
                  text-decoration: none;
                  border-radius: 8px;
                  font-weight: 500;
                  transition: all 0.3s ease;
                }
                
                .yako-work-link:hover {
                  background-color: var(--light-green);
                  color: var(--dark-green);
                  transform: translateY(-3px);
                }
                
                .yako-work-icon {
                  font-size: 1.2rem;
                  color: var(--accent-green);
                  margin-right: 12px;
                  transition: all 0.3s ease;
                }
                
                .yako-work-link:hover .yako-work-icon {
                  color: var(--dark-green);
                  transform: scale(1.1);
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                  .yako-work-grid {
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                  }
                  
                  .yako-work-list {
                    padding: 20px;
                  }
                  
                  .yako-work-category {
                    font-size: 1.1rem;
                  }
                }
                
                @media (max-width: 576px) {
                  .yako-work-grid {
                    grid-template-columns: 1fr;
                  }
                  
                  .yako-work-link {
                    padding: 10px 12px;
                  }
                  
                  .yako-work-icon {
                    font-size: 1rem;
                    margin-right: 10px;
                  }
                }
                
                /* Animation au chargement */
                .yako-work-item {
                  animation: fadeInUp 0.5s ease-out forwards;
                  opacity: 0;
                }
                
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                /* Délai d'animation pour chaque élément */
                .yako-work-item:nth-child(1) { animation-delay: 0.1s; }
                .yako-work-item:nth-child(2) { animation-delay: 0.2s; }
                .yako-work-item:nth-child(3) { animation-delay: 0.3s; }
                .yako-work-item:nth-child(4) { animation-delay: 0.4s; }
                .yako-work-item:nth-child(5) { animation-delay: 0.5s; }
                .yako-work-item:nth-child(6) { animation-delay: 0.6s; }
                .yako-work-item:nth-child(7) { animation-delay: 0.7s; }
                .yako-work-item:nth-child(8) { animation-delay: 0.8s; }
                .yako-work-item:nth-child(9) { animation-delay: 0.9s; }
                .yako-work-item:nth-child(10) { animation-delay: 1s; }
                .yako-work-item:nth-child(11) { animation-delay: 1.1s; }
                .yako-work-item:nth-child(12) { animation-delay: 1.2s; }
                .yako-work-item:nth-child(13) { animation-delay: 1.3s; }
                .yako-work-item:nth-child(14) { animation-delay: 1.4s; }
                .yako-work-item:nth-child(15) { animation-delay: 1.5s; }
                .yako-work-item:nth-child(16) { animation-delay: 1.6s; }
                .yako-work-item:nth-child(17) { animation-delay: 1.7s; }
                .yako-work-item:nth-child(18) { animation-delay: 1.8s; }
                .yako-work-item:nth-child(19) { animation-delay: 1.9s; }
                .yako-work-item:nth-child(20) { animation-delay: 2s; }
                .yako-work-item:nth-child(21) { animation-delay: 2.1s; }
                .yako-work-item:nth-child(22) { animation-delay: 2.2s; }
                .yako-work-item:nth-child(23) { animation-delay: 2.3s; }
                .yako-work-item:nth-child(24) { animation-delay: 2.4s; }
                `}
            </style>
            
            <div className="yako-work-list">
                <div className="yako-work-header">
                    <h3 className="yako-work-category">{props.character}</h3>
                    <div className="yako-work-divider"></div>
                </div>
                
                <div className="yako-work-grid">
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-briefcase yako-work-icon"></i>
                            Emploi de Plombier
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-bolt yako-work-icon"></i>
                            Emploi d'Électricien
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-home yako-work-icon"></i>
                            Ménage à Domicile
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-baby yako-work-icon"></i>
                            Garde d'Enfants
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-utensils yako-work-icon"></i>
                            Cuisinier / Traiteur
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-car yako-work-icon"></i>
                            Chauffeur Privé
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-cut yako-work-icon"></i>
                            Coiffeur / Coiffeuse
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-seedling yako-work-icon"></i>
                            Jardinier
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-hammer yako-work-icon"></i>
                            Menuisier
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-camera yako-work-icon"></i>
                            Photographe
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-calendar-alt yako-work-icon"></i>
                            Organisation d'Événements
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-mobile-alt yako-work-icon"></i>
                            Réparation de Téléphones
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-tshirt yako-work-icon"></i>
                            Couturier / Couturière
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-truck yako-work-icon"></i>
                            Services de Livraison
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-spa yako-work-icon"></i>
                            Masseur / Masseuse
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-chalkboard-teacher yako-work-icon"></i>
                            Soutien Scolaire
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-paint-roller yako-work-icon"></i>
                            Peintre en Bâtiment
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-tools yako-work-icon"></i>
                            Mécanicien Auto
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-laptop yako-work-icon"></i>
                            Informaticien / Dépannage
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-wrench yako-work-icon"></i>
                            Réparateur d'Appareils
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-shopping-basket yako-work-icon"></i>
                            Courses et Commission
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-user-tie yako-work-icon"></i>
                            Agent de Sécurité
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-hand-holding-usd yako-work-icon"></i>
                            Vendeur / Vendeuse
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-dumbbell yako-work-icon"></i>
                            Coach Sportif
                        </a>
                    </div>
                    <div className="yako-work-item">
                        <a href="#" className="yako-work-link">
                            <i className="fas fa-music yako-work-icon"></i>
                            Musicien / DJ
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}