import React from 'react'

export default function TypeOfWorkSmallSize() {
    return (
        <>
            <style>
                {`
                .yako-type-select {
                    position: relative;
                    width: 100%;
                    font-size: 14px;
                    font-weight: 500;
                    color: #333;
                    background-color: #fff;
                    border: 1px solid #2e8b57;
                    border-radius: 8px;
                    padding: 8px 30px 8px 12px;
                    appearance: none;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .yako-type-select:focus {
                    outline: none;
                    border-color: #1a5c1a;
                    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.2);
                }
                
                .yako-type-select:hover {
                    border-color: #1a5c1a;
                }
                
                .yako-select-wrapper {
                    position: relative;
                    display: inline-block;
                    width: 100%;
                }
                
                .yako-select-wrapper::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 12px;
                    transform: translateY(-50%);
                    width: 8px;
                    height: 8px;
                    border-left: 2px solid #2e8b57;
                    border-bottom: 2px solid #2e8b57;
                    transform: translateY(-50%) rotate(-45deg);
                    pointer-events: none;
                    transition: all 0.3s ease;
                }
                
                .yako-select-wrapper:hover::after {
                    border-color: #1a5c1a;
                }
                
                /* Animation au chargement */
                .yako-select-wrapper {
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
                `}
            </style>
            
            <div className="yako-select-wrapper">
                <select className="yako-type-select" aria-label="Sélectionner le type de travail">
                    <option value="">Tout type de travail</option>
                    <option value="construction">Construction & Bâtiment</option>
                    <option value="services">Services Domestiques</option>
                    <option value="technology">Informatique & Tech</option>
                    <option value="transport">Transport & Livraison</option>
                    <option value="education">Éducation & Formation</option>
                    <option value="beauty">Beauté & Bien-être</option>
                    <option value="agriculture">Agriculture & Élevage</option>
                    <option value="events">Événements & Divertissement</option>
                    <option value="manufacturing">Artisanat & Production</option>
                    <option value="health">Santé & Soins</option>
                    <option value="finance">Finance & Comptabilité</option>
                </select>
            </div>
        </>
    )
}