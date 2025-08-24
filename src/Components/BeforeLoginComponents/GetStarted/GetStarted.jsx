import React from 'react'
import talentMainSectionVideoPreviewDevIT from '../../../assets/img/talent_main-section-video-preview-Dev-IT.jpeg'
import VID from '../../../assets/videos/VID-20210318-WA0020.mp4'
export default function GetStarted() {
    return (
        <div>
            <div className="row mx-lg-5 mx-1 my-md-5 my-3 py-5" id="get-started-section-ID">
                <div className="col-lg-5 col-12">
                    <div className="row mb-4" id="get-started-ID">
                        <div className="col-md-1 col-3">
                            <hr className="w-100 mb-0 mt-3" id="Remote-professionals-lable-line-ID" />
                        </div>
                        <div className="col fs-5 fw-bold">Comment ça marche ?</div>
                    </div>
                    <div className="row mb-3" id="get-started-header-ID">
                        <h1 className="fw-bolder">
                                                       Trouvez ou proposez un petit boulot en quelques minutes

      </h1>
                    </div>
                    <div className="row mb-3" id="get-started-sub-header-ID">
                        <h4 className="fw-bold"> Des milliers de personnes près de chez vous prêtes à aider.</h4>
                    </div>
                    <div className="row mb-3 mx-1" id="get-started-list-ID">
                        <ul className="fs-6 ms-3">
                     <li>Publiez ou trouvez un job en 2 clics</li>
                            <li>Comparez les profils notés et vérifiés</li>
                            <li>Paiement sécurisé après la mission</li>        
                        </ul>
                    </div>
                    <div className="row mb-3 mx-1" id="get-started-button-ID">
                        <button className="btn col-lg-6 col-12 mx-lg-0 mx-auto fw-bolder mb-3 bg-upwork" type="button">
                            Commencer maintenant
      </button>
                    </div>
                </div>
                <div className="col-lg-7 col-12">
                    <video className="w-100" poster={talentMainSectionVideoPreviewDevIT} controls>
                        <source src={VID} type="video/mp4" />
                        <source src={VID} type="video/ogg" />
        Votre navigateur ne supporte pas la lecture vidéo.
    </video>
                </div>
            </div>

        </div>
    )
}
