import React from 'react'
import Question from '../Question/Question'

export default function Questions() {
    const questionsData = [
        {
            id: 'q1',
            question: "Qu'est-ce que Yako et comment fonctionne-t-il en Afrique ?",
            answer: "Yako est la première plateforme africaine qui connecte directement les talents locaux aux opportunités d'emploi et de projets. Elle permet aux travailleurs indépendants de trouver des missions rémunératrices et aux entreprises de recruter des compétences qualifiées dans leur région. Grâce à Yako, les professionnels africains peuvent accéder à des emplois dans divers secteurs comme l'informatique, le bâtiment, les services domestiques, la coiffure, le transport, et bien d'autres. La plateforme facilite les paiements sécurisés, offre une protection juridique aux deux parties, et permet de noter et d'évaluer les prestations pour garantir la qualité. Yako s'engage à soutenir l'économie locale en favorisant l'emploi et en valorisant les compétences africaines."
        },
        {
            id: 'q2',
            question: "Comment payer sur Yako ?",
            answer: "Yako a intégré un système de paiement adapté aux réalités africaines, avec une priorité donnée aux solutions de paiement mobile. Vous pouvez régler vos transactions via Mobile Money (MTN Mobile Money, Airtel Money, Orange Money, M-Pesa, etc.), qui sont les méthodes les plus populaires et accessibles sur le continent. La plateforme accepte également les virements bancaires traditionnels et les cartes de crédit/débit pour les utilisateurs qui le souhaitent. Tous les paiements sont sécurisés et protégés par notre système de garantie, qui assure que l'argent n'est libéré qu'une fois que le travail est validé par les deux parties. Cette approche hybride permet de couvrir un maximum d'utilisateurs, qu'ils soient en zone urbaine ou rurale."
        },
        {
            id: 'q3',
            question: "Comment Yako soutient-il l'économie locale africaine ?",
            answer: "Yako joue un rôle essentiel dans le développement économique de l'Afrique en créant un écosystème numérique entièrement dédié aux talents locaux. Tout d'abord, la plateforme permet de formaliser de nombreux emplois informels, offrant ainsi une reconnaissance légale et une protection sociale aux travailleurs. Ensuite, Yako facilite l'accès au marché pour les petites entreprises et les artisans qui n'ont pas les moyens de marketing traditionnel. De plus, nous investissons dans la formation numérique des talents africains à travers des partenariats avec des institutions locales et des programmes de mentorat. Enfin, Yako favorise la circulation de l'argent au niveau local en réduisant la dépendance aux intermédiaires étrangers, ce qui contribue à retenir la valeur économique sur le continent. Notre objectif est de créer 1 million d'opportunités d'emploi d'ici 2027 à travers l'Afrique."
        }
    ];

    return (
        <>
            <style>
                {`
                .yako-questions-container {
                    padding: 60px 0;
                    background-color: #f9f9f9;
                }
                
                .yako-questions-header {
                    margin-bottom: 50px;
                }
                
                .yako-section-line {
                    width: 40px;
                    height: 4px;
                    background-color: #2e8b57;
                    margin-bottom: 15px;
                    border-radius: 2px;
                }
                
                .yako-questions-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: #1a5c1a;
                    line-height: 1.2;
                }
                
                .yako-questions-content {
                    background-color: white;
                    border-radius: 16px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
                    padding: 40px;
                    margin-bottom: 30px;
                }
                
                .yako-cta-container {
                    text-align: center;
                    margin-top: 30px;
                }
                
                .yako-cta {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #2e8b57;
                    color: white;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 18px;
                    padding: 12px 24px;
                    border-radius: 50px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(46, 139, 87, 0.3);
                    min-width: 250px;
                }
                
                .yako-cta:hover {
                    background-color: #1a5c1a;
                    transform: translateY(-3px);
                    box-shadow: 0 6px 20px rgba(46, 139, 87, 0.4);
                }
                
                .yako-cta i {
                    margin-left: 10px;
                    transition: transform 0.3s ease;
                }
                
                .yako-cta:hover i {
                    transform: translateX(5px);
                }
                
                /* Animation au chargement */
                .yako-questions-container {
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
                    .yako-questions-title {
                        font-size: 30px;
                    }
                    
                    .yako-questions-content {
                        padding: 30px;
                    }
                }
                
                @media (max-width: 768px) {
                    .yako-questions-container {
                        padding: 40px 0;
                    }
                    
                    .yako-questions-title {
                        font-size: 26px;
                    }
                    
                    .yako-questions-content {
                        padding: 20px;
                    }
                }
                
                @media (max-width: 576px) {
                    .yako-questions-title {
                        font-size: 22px;
                    }
                    
                    .yako-cta {
                        font-size: 16px;
                        padding: 10px 20px;
                        min-width: 200px;
                    }
                }
                `}
            </style>
            
            <div className="yako-questions-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <div className="yako-questions-header">
                                <div className="yako-section-line"></div>
                                <h1 className="yako-questions-title">Questions fréquentes sur Yako</h1>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="yako-questions-content">
                                {questionsData.map((q) => (
                                    <Question 
                                        key={q.id}
                                        id={q.id}
                                        question={q.question}
                                        answer={q.answer}
                                    />
                                ))}
                                
                                <div className="yako-cta-container">
                                    <a href="#" className="yako-cta">
                                        Vous avez d'autres questions ? <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}