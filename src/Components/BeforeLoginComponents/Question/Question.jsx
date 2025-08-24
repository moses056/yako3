import React, { useState } from 'react'

export default function Question({ question, answer, id }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <>
            <style>
                {`
                .yako-question-container {
                    background-color: #f9f9f9;
                    border-radius: 12px;
                    padding: 25px;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .yako-question-container:hover {
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    transform: translateY(-3px);
                }
                
                .yako-question {
                    display: flex;
                    align-items: flex-start;
                }
                
                .yako-question-icon {
                    background-color: #2e8b57;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 18px;
                    margin-right: 20px;
                    flex-shrink: 0;
                }
                
                .yako-question-content {
                    flex-grow: 1;
                }
                
                .yako-question-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: #1a5c1a;
                    margin-bottom: 15px;
                    line-height: 1.3;
                }
                
                .yako-answer {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #4a5568;
                    margin-bottom: 15px;
                }
                
                .yako-answer-collapsed {
                    display: none;
                }
                
                .yako-answer-collapsed.show {
                    display: inline;
                }
                
                .yako-read-more {
                    color: #2e8b57;
                    text-decoration: none;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    transition: all 0.3s ease;
                }
                
                .yako-read-more:hover {
                    color: #1a5c1a;
                }
                
                .yako-read-more i {
                    margin-left: 8px;
                    transition: transform 0.3s ease;
                }
                
                .yako-read-more i.rotated {
                    transform: rotate(180deg);
                }
                
                .yako-divider {
                    height: 1px;
                    background-color: #e2e8f0;
                    margin-top: 20px;
                    width: 100%;
                }
                
                /* Animation au chargement */
                .yako-question-container {
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
                    .yako-question-container {
                        padding: 20px;
                    }
                    
                    .yako-question-title {
                        font-size: 18px;
                    }
                    
                    .yako-answer {
                        font-size: 15px;
                    }
                }
                
                @media (max-width: 576px) {
                    .yako-question-icon {
                        width: 35px;
                        height: 35px;
                        font-size: 16px;
                        margin-right: 15px;
                    }
                    
                    .yako-question-title {
                        font-size: 16px;
                        margin-bottom: 10px;
                    }
                    
                    .yako-answer {
                        font-size: 14px;
                    }
                }
                `}
            </style>
            
            <div className="yako-question-container">
                <div className="yako-question">
                    <div className="yako-question-icon">Q</div>
                    <div className="yako-question-content">
                        <h3 className="yako-question-title">{question}</h3>
                        <div className="yako-answer">
                            {isExpanded ? answer : `${answer.substring(0, 200)}...`}
                            {!isExpanded && (
                                <span className="yako-answer-collapsed" id={`answer-${id}`}>
                                    {answer.substring(200)}
                                </span>
                            )}
                        </div>
                        <a 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="yako-read-more"
                        >
                            {isExpanded ? "Lire moins" : "Lire plus"} 
                            <i className={`fas fa-chevron-down ${isExpanded ? 'rotated' : ''}`}></i>
                        </a>
                        <div className="yako-divider"></div>
                    </div>
                </div>
            </div>
        </>
    )
}