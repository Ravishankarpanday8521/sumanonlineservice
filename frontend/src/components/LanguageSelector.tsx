import { useLanguage } from '../locales/LanguageProvider';
import { Globe } from 'lucide-react';

export default function LanguageSelector({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`language-selector ${className || ''}`}>
      <Globe size={18} />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'hi')}
        className="language-select"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
  );
}


