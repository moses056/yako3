import React from 'react'

export default function TypeOfWork() {
    return (
        <>
            <style>
                {`
                .yako-type-of-work {
                    background-color: #f9f9f9;
                    border-radius: 12px;
                    padding: 25px;
                    margin-bottom: 30px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                }
                
                .yako-type-header {
                    font-size: 18px;
                    font-weight: 700;
                    color: #1a5c1a;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    position: relative;
                    display: inline-block;
                }
                
                .yako-type-header::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 40px;
                    height: 3px;
                    background-color: #2e8b57;
                    border-radius: 2px;
                }
                
                .yako-work-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 15px;
                }
                
                .yako-work-item {
                    position: relative;
                    border-radius: 8px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                
                .yako-work-item:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
                }
                
                .yako-work-radio {
                    position: absolute;
                    opacity: 0;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    z-index: 2;
                }
                
                .yako-work-radio:checked + .yako-work-label {
                    background-color: #2e8b57;
                    color: white;
                }
                
                .yako-work-label {
                    display: block;
                    padding: 15px;
                    background-color: white;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    font-weight: 500;
                    color: #333;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .yako-work-label:hover {
                    border-color: #2e8b57;
                    color: #2e8b57;
                }
                
                .yako-work-icon {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                    vertical-align: middle;
                    color: #2e8b57;
                }
                
                .yako-work-radio:checked + .yako-work-label .yako-work-icon {
                    color: white;
                }
                
                /* Animation au chargement */
                .yako-type-of-work {
                    animation: fadeInUp 0.6s ease-out;
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
                
                /* Responsive Design */
                @media (max-width: 768px) {
                    .yako-work-grid {
                        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    }
                }
                
                @media (max-width: 576px) {
                    .yako-type-of-work {
                        padding: 20px;
                    }
                    
                    .yako-type-header {
                        font-size: 16px;
                    }
                    
                    .yako-work-grid {
                        grid-template-columns: 1fr;
                    }
                }
                `}
            </style>
            
            <div className="yako-type-of-work">
                <h3 className="yako-type-header">Type de travail</h3>
                
                <div className="yako-work-grid">
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-any" 
                            className="yako-work-radio"
                            defaultChecked
                        />
                        <label className="yako-work-label" htmlFor="type-any">
                            <i className="fas fa-briefcase yako-work-icon"></i>
                            Tout type de travail
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-construction" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-construction">
                            <i className="fas fa-hammer yako-work-icon"></i>
                            Construction & Bâtiment
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-services" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-services">
                            <i className="fas fa-concierge-bell yako-work-icon"></i>
                            Services Domestiques
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-technology" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-technology">
                            <i className="fas fa-laptop-code yako-work-icon"></i>
                            Informatique & Tech
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-transport" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-transport">
                            <i className="fas fa-truck yako-work-icon"></i>
                            Transport & Livraison
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-education" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-education">
                            <i className="fas fa-graduation-cap yako-work-icon"></i>
                            Éducation & Formation
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-beauty" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-beauty">
                            <i className="fas fa-cut yako-work-icon"></i>
                            Beauté & Bien-être
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-agriculture" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-agriculture">
                            <i className="fas fa-seedling yako-work-icon"></i>
                            Agriculture & Élevage
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-events" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-events">
                            <i className="fas fa-calendar-alt yako-work-icon"></i>
                            Événements & Divertissement
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-manufacturing" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-manufacturing">
                            <i className="fas fa-industry yako-work-icon"></i>
                            Artisanat & Production
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-health" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-health">
                            <i className="fas fa-heartbeat yako-work-icon"></i>
                            Santé & Soins
                        </label>
                    </div>
                    
                    <div className="yako-work-item">
                        <input 
                            type="radio" 
                            name="typeOfWorkChoices" 
                            id="type-finance" 
                            className="yako-work-radio"
                        />
                        <label className="yako-work-label" htmlFor="type-finance">
                            <i className="fas fa-coins yako-work-icon"></i>
                            Finance & Comptabilité
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}