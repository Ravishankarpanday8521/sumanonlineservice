import Section from '../components/Section';
import { useLanguage } from '../locales/LanguageProvider';
import { serviceDetails } from '../data/serviceDetails';
import { MapPin, Phone, Mail } from 'lucide-react';

// Function to get service-specific image URL
function getServiceImage(serviceId: string): string {
  // Service-specific images - each service has a unique, relevant image
  const imageMap: Record<string, string> = {
    'aadhaar': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&q=80',
    'pan': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
    'ration': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80',
    'dl': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&q=80',
    'eshram': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80',
    'ayushman': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&q=80',
    'voter': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&q=80',
    'passport': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&q=80',
    'birth-certificate': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop&q=80',
    'death-certificate': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80',
    'caste-certificate': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
    'income-certificate': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&q=80',
    'domicile-certificate': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80',
    'marriage-certificate': 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop&q=80',
    'pension': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
    'scholarship': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80',
    'forms': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
    'print': 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&q=80',
    'scan': 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&q=80',
    'photo': 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop&q=80',
    'resume': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
    'typing': 'https://images.unsplash.com/photo-1516321318423-f06f85b504dc?w=600&h=400&fit=crop&q=80',
    'laminating': 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&q=80',
    'binding': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80',
    'notary': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
    'transfer': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&q=80',
    'aeps': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
    'recharge': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop&q=80',
    'bills': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&q=80',
    'gas-bill': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
    'insurance-payment': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80',
    'loan-application': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&q=80',
    'credit-card': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
    'mutual-fund': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
    'fastag': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&q=80',
  };
  return imageMap[serviceId] || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80';
}

export default function About() {
  const { t, language } = useLanguage();
  
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-hero-content">
          <h1>{t('about.hero.title')}</h1>
          <p className="lead">{t('about.hero.subtitle')}</p>
          <div className="about-description">
            <p>
              {language === 'hi' 
                ? 'सुमन ऑनलाइन सर्विसेज एक सरकारी अधिकृत डिजिटल सेवा और कॉमन सर्विस सेंटर (सीएससी) है जो समुदाय को आवश्यक सेवाओं की एक विस्तृत श्रृंखला प्रदान करता है। 2021 में हमारी स्थापना के बाद से, हम सरकारी और वित्तीय सेवाओं को सभी के लिए सुलभ बनाकर डिजिटल विभाजन को पाटने के लिए प्रतिबद्ध हैं।'
                : 'Suman Online Services is a government-authorized Digital Seva and Common Service Center (CSC) providing a wide range of essential services to the community. Since our establishment in 2021, we have been committed to bridging the digital divide by making government and financial services accessible to everyone.'}
            </p>
            <p>
              {language === 'hi'
                ? 'प्रमाणित पेशेवरों की हमारी टीम व्यक्तिगत स्पर्श के साथ विश्वसनीय, कुशल और पारदर्शी सेवाएं प्रदान करने के लिए समर्पित है। हम आपके दस्तावेजों के महत्व को समझते हैं और उन्हें अत्यधिक देखभाल और गोपनीयता के साथ संभालते हैं।'
                : 'Our team of certified professionals is dedicated to providing reliable, efficient, and transparent services with a personal touch. We understand the importance of your documents and handle them with the utmost care and confidentiality.'}
            </p>
            <p>
              {language === 'hi'
                ? 'हमारा मिशन सभी के लिए डिजिटल सेवाओं को सुलभ, सुविधाजनक और विश्वसनीय बनाना है। हमारे केंद्र में, आपको आधार, पैन, ड्राइविंग लाइसेंस, बैंकिंग सेवाएं, बीमा, और कई अन्य सरकारी और वित्तीय सेवाएं मिल सकती हैं।'
                : 'Our mission is to make digital services accessible, convenient, and reliable for everyone. At our center, you can find Aadhaar, PAN, Driving License, banking services, insurance, and many other government and financial services.'}
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <Section title={t('about.services.title')} className="services-section">
        <div className="services-container">
          <div className="service-list">
            {serviceDetails.map((service, index) => {
              const bullets = language === 'hi' ? service.bulletsHi : service.bullets;
              const serviceNumber = index + 1;
              const isOdd = serviceNumber % 2 === 1; // Odd: 1, 3, 5... (image right)
              const isEven = serviceNumber % 2 === 0; // Even: 2, 4, 6... (image left)
              const imageUrl = getServiceImage(service.id);
              
              return (
                <div key={service.id} className={`service-item ${isOdd ? 'service-item-odd' : 'service-item-even'} ${service.id === 'aadhaar' ? 'service-item-aadhaar' : ''}`}>
                  <div className="service-number">{serviceNumber}</div>
                  
                  {/* Even numbers: image on LEFT side */}
                  {isEven && (
                    <div className="service-image-wrapper">
                      <img src={imageUrl} alt={service.title} className="service-image" loading="lazy" />
              </div>
                  )}
                  
              <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <ul className="service-bullets">
                      {bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
            </div>

                  {/* Odd numbers: image on RIGHT side */}
                  {isOdd && (
                    <div className="service-image-wrapper">
                      <img src={imageUrl} alt={service.title} className="service-image" loading="lazy" />
              </div>
                  )}
                  </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section title={t('about.getInTouch.title')} className="contact-cta bg-light">
        <div className="grid two">
          <div>
            <h3>{t('about.getInTouch.visitCenter')}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={20} />
                <span>Damu, Basopatti, Madhubani, Bihar 847230</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <a href="tel:+916299813842">+91 62998 13842</a>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <a href="mailto:sumanonlineservice.in@gmail.com">sumanonlineservice.in@gmail.com</a>
              </div>
            </div>
          </div>
          <div>
            <h3>{t('about.getInTouch.workingHours')}</h3>
            <div className="working-hours">
              <div className="hours-item">
                <span>{t('about.getInTouch.mondaySaturday')}</span>
                <span>{t('about.getInTouch.hours1')}</span>
              </div>
              <div className="hours-item">
                <span>{t('about.getInTouch.sunday')}</span>
                <span>{t('about.getInTouch.hours2')}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
