import React from 'react';
import './ArticleCard.css';

export default function ArticleCard(props) {
  return (
    <article className="article-card">
      <div className="article-image-container">
        <img 
          className="article-image" 
          src={props.image} 
          alt={props.header || "Article image"} 
        />
      </div>
      <div className="article-content">
        <h2 className="article-title">{props.header}</h2>
        <p className="article-text">{props.content}</p>
        <a href="#" className="article-link">
          Learn more
          <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </article>
  );
}