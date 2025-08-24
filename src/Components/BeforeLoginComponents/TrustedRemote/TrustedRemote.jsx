/* eslint-disable */
import React from 'react'
import ExpertsCard from '../ExpertsCard/ExpertsCard'
import talentMainSectionExperts1DevIT from '../../../assets/img/talent_main-section-experts1-Dev-IT.jpeg'
import talentMainSectionExperts2DevIT from '../../../assets/img/talent_main-section-experts2-Dev-IT.jpeg'
import talentMainSectionExperts3DevIT from '../../../assets/img/talent_main-section-experts3-Dev-IT.jpeg'
import EvaluationCard from '../EvaluationCard/EvaluationCard'


export default function TrustedRemote() {
    return (
        <div>
            <div className="row mx-md-5 mx-1 my-md-5 my-3 py-md-5" id="Remote-professionals-section-ID">
                <div className="row mb-4" id="Remote-professionals-ID">
                    <div className="col-md-1 col-3">
                        <hr className="w-75 mb-0 mt-3" id="Remote-professionals-lable-line-ID" />
                    </div>
                    <div className="col fs-5 fw-bold">Prestataires de confiance</div>
                </div>
                <div className="row mb-3" id="Trusted-remote-ID">
                    <h1 className="fw-bolder">Des services fiables, notés et vérifiés autour de vous</h1>
                </div>
                <div className="row mb-3" id="evaluation-ID">
                    <div className="col-lg-3 col-md-4 col-6 mb-3">
                        <EvaluationCard headerTag={<i className="fas fa-star fs-5" />} header="4.8/5" content="Note moyenne des prestataires locaux" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mb-3">
                         <EvaluationCard header="12K+" content="Missions réalisées le mois dernier" />
                    </div>
                    <div className="col-lg-3 col-md-4 mb-3">
                           <EvaluationCard header="1,200+" content="Prestataires vérifiés disponibles" />
                    </div>
                </div>
                <div className="d-flex flex-lg-wrap flex-row flex-nowrap overflow-auto mx-1 mb-3" id="scrollable-experts-ID">
                    <div className="col-lg-3 col-md-5 col-6 px-3 shadow-sm rounded-3 py-3 mb-2">
                        <ExpertsCard expert1={talentMainSectionExperts1DevIT} expert2={talentMainSectionExperts2DevIT} expert3={talentMainSectionExperts3DevIT} />
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 px-3 shadow-sm rounded-3 py-3 mb-2">
                        <ExpertsCard expert1={talentMainSectionExperts1DevIT} expert2={talentMainSectionExperts2DevIT} expert3={talentMainSectionExperts3DevIT} />
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 px-3 shadow-sm rounded-3 py-3 mb-2">
                        <ExpertsCard expert1={talentMainSectionExperts1DevIT} expert2={talentMainSectionExperts2DevIT} expert3={talentMainSectionExperts3DevIT} />
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 px-3 shadow-sm rounded-3 px-3 py-3 mb-2">
                        <ExpertsCard expert1={talentMainSectionExperts1DevIT} expert2={talentMainSectionExperts2DevIT} expert3={talentMainSectionExperts3DevIT} />
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 px-3 shadow-sm rounded-3 py-3 mb-2">
                        <ExpertsCard expert1={talentMainSectionExperts1DevIT} expert2={talentMainSectionExperts2DevIT} expert3={talentMainSectionExperts3DevIT} />
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 px-3 shadow-sm rounded-3 py-3 mb-2">
                        <ExpertsCard expert1={talentMainSectionExperts1DevIT} expert2={talentMainSectionExperts2DevIT} expert3={talentMainSectionExperts3DevIT} />
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 px-3 shadow-sm rounded-3 py-3 mb-2">
                        <ExpertsCard expert1={talentMainSectionExperts1DevIT} expert2={talentMainSectionExperts2DevIT} expert3={talentMainSectionExperts3DevIT} />
                    </div>
                    <div className="col-lg-3 col-md-5 col-6 px-3 shadow-sm rounded-3 px-3 py-3 mb-2">
                        <ExpertsCard expert1={talentMainSectionExperts1DevIT} expert2={talentMainSectionExperts2DevIT} expert3={talentMainSectionExperts3DevIT} />
                    </div>
                </div>
                <div className="d-flex fs-5 mb-5">
 Vous cherchez autre chose ?
                <a href="#" className="text-decoration-none">
                          Parcourir tous les services <i className="fas fa-arrow-down" /></a>
                </div>
            </div>

        </div>
    )
}
