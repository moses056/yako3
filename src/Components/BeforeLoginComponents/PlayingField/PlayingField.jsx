import React from 'react'
import './PlayingField.css'
import talentHeaderPlayingFieldDevIT from '../../../assets/img/talent-header-playing-field-Dev-IT.svg'

export default function PlayingField() {
  return (
    <div className="yako-playing-field">
      <div className="yako-content">
        <div className="yako-text-content">
          <h2 className="yako-title">Vous cherchez à changer de domaine professionnel ?</h2>
          <p className="yako-description">
            Notre plateforme Yako permet à tous les professionnels africains de trouver des opportunités 
            qui correspondent à leurs compétences et à leurs aspirations, que ce soit pour un emploi 
            à temps plein, des missions freelance ou des projets ponctuels.
          </p>
          <a href="#" className="yako-cta">
            Prendre rendez-vous <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="yako-image-container">
          <img 
            className="yako-image" 
            src={talentHeaderPlayingFieldDevIT} 
            alt="Professionnels africains au travail" 
          />
        </div>
      </div>
    </div>
  )
}