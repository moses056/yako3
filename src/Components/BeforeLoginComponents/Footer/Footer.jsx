import React from 'react'
import './Footer.css'
import { useTranslation } from "react-i18next"
import { Facebook, Linkedin, Twitter, Youtube, Instagram, Apple, Smartphone } from 'lucide-react'

export default function Footer() {
    const { t } = useTranslation()
    
    const footerSections = [
        {
            title: "COMPANY",
            links: [
                "AboutUs", "Investor Relations", "Careers", "yako Foundation", 
                "Press", "Trust Safety Security", "Terms of Service", 
                "Privacy Policy", "Accessibility"
            ]
        },
        {
            title: "RESOURCES",
            links: [
                "Resources", "Customer Support", "CustomerStories", 
                "Business Resources", "PayrollServices", "yako Reviews"
            ]
        },
        {
            title: "BROWSE",
            links: [
                "Freelancer by Skill", "Freelancers in USA", "Freelancers in Africa", 
                "Freelancers in Europe", "Freelancers in Australia", 
                "Jobs in USA", "Find Jobs"
            ]
        }
    ]

    const socialIcons = [
        { icon: Facebook, label: "Facebook" },
        { icon: Linkedin, label: "LinkedIn" },
        { icon: Twitter, label: "Twitter" },
        { icon: Youtube, label: "YouTube" },
        { icon: Instagram, label: "Instagram" }
    ]

    const appIcons = [
        { icon: Apple, label: "App Store" },
        { icon: Smartphone, label: "Google Play" }
    ]

    return (
        <footer className="modern-footer">
            <div className="container">
                <div className="footer-content">
                    {/* Footer Sections */}
                    <div className="footer-sections">
                        {footerSections.map((section, index) => (
                            <div key={index} className="footer-column">
                                <h3 className="footer-title">{t(section.title)}</h3>
                                <ul className="footer-links">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href="#">{t(link)}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="newsletter-section">
                        <h3 className="newsletter-title">{t("Stay Updated")}</h3>
                        <p className="newsletter-subtitle">{t("Get Latest News")}</p>
                        <div className="newsletter-form">
                            <input 
                                type="email" 
                                placeholder={t("Enter Email")} 
                                className="newsletter-input"
                            />
                            <button className="newsletter-button">{t("Subscribe")}</button>
                        </div>
                    </div>
                </div>

                {/* Social Media and Apps */}
                <div className="footer-social">
                    <div className="social-section">
                        <span className="social-label">{t("Follow us")}</span>
                        <div className="social-icons">
                            {socialIcons.map((social, index) => (
                                <a 
                                    key={index} 
                                    href="#" 
                                    className="social-icon"
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="apps-section">
                        <span className="apps-label">{t("Mobile app")}</span>
                        <div className="app-icons">
                            {appIcons.map((app, index) => (
                                <a 
                                    key={index} 
                                    href="#" 
                                    className="app-icon"
                                    aria-label={app.label}
                                >
                                    <app.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>{t("Yako Global Inc")}</p>
                    <div className="footer-legal">
                        <a href="#">{t("Terms of Service")}</a>
                        <a href="#">{t("Privacy Policy")}</a>
                        <a href="#">{t("Accessibility")}</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}