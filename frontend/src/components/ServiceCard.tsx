import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../locales/LanguageProvider';

export default function ServiceCard({ icon, title, description }: { icon: ReactNode; title: string; description: string; }) {
  const { t } = useLanguage();
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <Link to="/contact" className="btn ghost">{t('home.services.getService')} <ArrowRight size={16} /></Link>
    </div>
  );
}
