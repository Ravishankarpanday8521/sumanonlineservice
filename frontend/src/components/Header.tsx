import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../locales/LanguageProvider';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">Suman Online Services</Link>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.home')}</NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.services')}</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.about')}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.contact')}</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t('nav.gallery')}</NavLink>
          <LanguageSelector className="language-selector-header" />
          <ThemeToggle className="theme-toggle-header" />
        </nav>
      </div>
    </header>
  );
}
