import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { categories, services } from '../data/services';
import { User, CreditCard, FileText, Car, Printer, Scan, Camera, Wallet, Banknote, Smartphone, Droplet, Heart, Edit, FileCheck, Award, DollarSign, GraduationCap, Home, Flame, Shield, CreditCard as CardIcon, TrendingUp, Tag } from 'lucide-react';
import { useLanguage } from '../locales/LanguageProvider';

function iconFor(serviceId: string) {
  switch (serviceId) {
    case 'aadhaar': return <User size={22} />;
    case 'pan': return <CreditCard size={22} />;
    case 'ration': return <Wallet size={22} />;
    case 'dl': return <Car size={22} />;
    case 'eshram': return <FileText size={22} />;
    case 'ayushman': return <Heart size={22} />;
    case 'voter': return <FileText size={22} />;
    case 'passport': return <FileText size={22} />;
    case 'birth-certificate': return <Award size={22} />;
    case 'death-certificate': return <FileCheck size={22} />;
    case 'caste-certificate': return <Award size={22} />;
    case 'income-certificate': return <DollarSign size={22} />;
    case 'domicile-certificate': return <Home size={22} />;
    case 'marriage-certificate': return <Heart size={22} />;
    case 'pension': return <Wallet size={22} />;
    case 'scholarship': return <GraduationCap size={22} />;
    case 'forms': return <FileText size={22} />;
    case 'print': return <Printer size={22} />;
    case 'scan': return <Scan size={22} />;
    case 'photo': return <Camera size={22} />;
    case 'resume': return <Edit size={22} />;
    case 'typing': return <FileText size={22} />;
    case 'laminating': return <FileText size={22} />;
    case 'binding': return <FileText size={22} />;
    case 'notary': return <FileCheck size={22} />;
    case 'transfer': return <Wallet size={22} />;
    case 'aeps': return <Banknote size={22} />;
    case 'recharge': return <Smartphone size={22} />;
    case 'bills': return <Droplet size={22} />;
    case 'gas-bill': return <Flame size={22} />;
    case 'insurance-payment': return <Shield size={22} />;
    case 'loan-application': return <DollarSign size={22} />;
    case 'credit-card': return <CardIcon size={22} />;
    case 'mutual-fund': return <TrendingUp size={22} />;
    case 'fastag': return <Tag size={22} />;
    default: return <FileText size={22} />;
  }
}

export default function Services() {
  const { t } = useLanguage();
  
  const categoryTranslations: Record<string, string> = {
    'Digital Services': t('services.digitalServices'),
    'Cyber Café Work': t('services.cyberCafeWork'),
    'Banking Services': t('services.bankingServices'),
  };

  const getServiceTitle = (serviceId: string) => {
    try {
      const translated = t(`serviceNames.${serviceId}`);
      if (translated && translated !== `serviceNames.${serviceId}`) {
        return translated;
      }
    } catch (e) {
      // Fallback to service title
    }
    return services.find(s => s.id === serviceId)?.title || serviceId;
  };

  const getServiceDescription = (serviceId: string) => {
    try {
      const translated = t(`serviceDescriptions.${serviceId}`);
      if (translated && translated !== `serviceDescriptions.${serviceId}`) {
        return translated;
      }
    } catch (e) {
      // Fallback to service description
    }
    return services.find(s => s.id === serviceId)?.description || '';
  };

  return (
    <main>
      {categories.map((cat) => {
        const categoryServices = services.filter((s) => s.category === cat);
        if (categoryServices.length === 0) return null;
        
        return (
          <Section key={cat} title={categoryTranslations[cat] || cat}>
          <div className="grid three">
              {categoryServices.map((s) => (
                <ServiceCard 
                  key={s.id} 
                  icon={iconFor(s.id)} 
                  title={getServiceTitle(s.id)} 
                  description={getServiceDescription(s.id)} 
                />
            ))}
          </div>
        </Section>
        );
      })}
    </main>
  );
}
