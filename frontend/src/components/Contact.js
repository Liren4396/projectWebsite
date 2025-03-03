import React from "react";
import { useLanguage } from './LanguageContext';
import './Contact.css';

function Contact() {
  const { language } = useLanguage();
  return (
    <div className="contact-container">
      <div className="content-box">
        <h1>{language === 'en' ? 'Contact Me' : '联系我'}</h1>
        <p>{language === 'en' ? 'Email:' : '邮箱:'} <a href="mailto:beater520@163.com">beater520@163.com</a></p>
        <p>GitHub: <a href="https://github.com/Liren4396?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </div>
    </div>
  );
}

export default Contact;
