import { Clock, Facebook, Mail, MapPin, Phone, Youtube, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '../locales/LanguageProvider';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3 className="footer-title">Suman Online Services</h3>
            <p className="footer-description">{t('footer.tagline')}</p>
            <div className="footer-socials">
              <a 
                href="https://www.facebook.com/share/1LQwBATPRY/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="social-icon facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://youtube.com/@sumanonlinecyber?si=VoaaZYw8j98Ck6fM" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube" 
                className="social-icon youtube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://whatsapp.com/channel/0029VakAgbq1iUxY2iFVFd0E" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp" 
                className="social-icon whatsapp"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://www.instagram.com/suman_online_cyber?igsh=aXU1c3hzMTlmNW9t" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="social-icon instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section footer-links">
            <h4 className="footer-sub">{t('nav.services')}</h4>
            <ul className="footer-list">
              <li><Link to="/services">{t('nav.services')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
              <li><Link to="/gallery">{t('nav.gallery')}</Link></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4 className="footer-sub">{t('footer.contact')}</h4>
            <ul className="footer-list">
              <li className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Damu, Basopatti, Madhubani, Bihar 847230</span>
              </li>
              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <a href="tel:+916299813842">+91 62998 13842</a>
              </li>
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <a href="mailto:sumanonlineservice.in@gmail.com">sumanonlineservice.in@gmail.com</a>
              </li>
              <li className="contact-item">
                <Clock size={18} className="contact-icon" />
                <span>{t('contact.workingHoursValue')}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footnote">
            <p>© {new Date().getFullYear()} Suman Online Services. {t('footer.rightsReserved')}</p>
            <p className="footer-credit">Made with ❤️ for our community</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
