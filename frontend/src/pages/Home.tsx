import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { CheckCircle2, Users, Shield, User, CreditCard, Car, Printer, Clock, Award, FileText, Headset, Smartphone, Mail, MapPin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroImage from '../assets/suman-dark.jpg';
import { testimonials } from '../data/testimonials';
import { useLanguage } from '../locales/LanguageProvider';


export default function Home() {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  // Auto-play carousel (optional - can be disabled)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const topServices = [
    { 
      id: 'aadhaar', 
      title: t('serviceNames.aadhaar'), 
      description: t('serviceDescriptions.aadhaar'), 
      icon: <User size={24} className="text-primary" /> 
    },
    { 
      id: 'pan', 
      title: t('serviceNames.pan'), 
      description: t('serviceDescriptions.pan'), 
      icon: <CreditCard size={24} className="text-primary" /> 
    },
    { 
      id: 'dl', 
      title: t('serviceNames.dl'), 
      description: t('serviceDescriptions.dl'), 
      icon: <Car size={24} className="text-primary" /> 
    },
    { 
      id: 'banking', 
      title: t('serviceNames.banking'), 
      description: t('serviceDescriptions.banking'), 
      icon: <CreditCard size={24} className="text-primary" /> 
    },
    { 
      id: 'insurance', 
      title: t('serviceNames.insurance'), 
      description: t('serviceDescriptions.insurance'), 
      icon: <Shield size={24} className="text-primary" /> 
    },
    { 
      id: 'tickets', 
      title: t('serviceNames.tickets'), 
      description: t('serviceDescriptions.tickets'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 20h20"/><path d="M3 20v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M7 8V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><path d="M5 12h2"/><path d="M17 12h2"/><path d="M12 12h0"/></svg> 
    },
    { 
      id: 'utility', 
      title: t('serviceNames.utility'), 
      description: t('serviceDescriptions.utility'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 22h18"/><path d="M5 2h14v20H5z"/><path d="M12 6v4"/></svg> 
    },
    { 
      id: 'education', 
      title: t('serviceNames.education'), 
      description: t('serviceDescriptions.education'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> 
    },
    { 
      id: 'govt', 
      title: t('serviceNames.govt'), 
      description: t('serviceDescriptions.govt'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> 
    },
    { 
      id: 'print', 
      title: t('serviceNames.print'), 
      description: t('serviceDescriptions.print'), 
      icon: <Printer size={24} className="text-primary" /> 
    },
    { 
      id: 'mobile', 
      title: t('serviceNames.mobile'), 
      description: t('serviceDescriptions.mobile'), 
      icon: <Smartphone size={24} className="text-primary" /> 
    },
    { 
      id: 'csc', 
      title: t('serviceNames.csc'), 
      description: t('serviceDescriptions.csc'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> 
    },
    { 
      id: 'ration', 
      title: t('serviceNames.ration'), 
      description: t('serviceDescriptions.ration'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    },
    { 
      id: 'new-account', 
      title: t('serviceNames.new-account'), 
      description: t('serviceDescriptions.new-account'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="16" x2="16" y2="16"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="12" x2="8" y2="12"></line><line x1="12" y1="12" x2="12" y2="12"></line><line x1="16" y1="12" x2="16" y2="12"></line><line x1="8" y1="8" x2="8" y2="8"></line><line x1="12" y1="8" x2="12" y2="8"></line><line x1="16" y1="8" x2="16" y2="8"></line></svg> 
    },
    { 
      id: 'new-sim', 
      title: t('serviceNames.new-sim'), 
      description: t('serviceDescriptions.new-sim'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg> 
    },
    { 
      id: 'aeeps', 
      title: t('serviceNames.aeeps'), 
      description: t('serviceDescriptions.aeeps'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line><circle cx="12" cy="15" r="1"></circle></svg> 
    },
    { 
      id: 'govt-forms', 
      title: t('serviceNames.govt-forms'), 
      description: t('serviceDescriptions.govt-forms'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> 
    },
    { 
      id: 'electricity', 
      title: t('serviceNames.electricity'), 
      description: t('serviceDescriptions.electricity'), 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg> 
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>{t('home.hero.title')}</h1>
            <h2>{t('home.hero.subtitle')}</h2>
            <p className="lead">{t('home.hero.description')}</p>
            <div className="hero-features">
              <div className="hero-feature"><Clock size={18} /> {t('home.hero.quickService')}</div>
              <div className="hero-feature"><Award size={18} /> {t('home.hero.happyCustomers')}</div>
              <div className="hero-feature"><Shield size={18} /> {t('home.hero.secureReliable')}</div>
            </div>
            <div className="actions">
              <Link to="/services" className="btn primary">{t('home.hero.exploreServices')}</Link>
              <Link to="/contact" className="btn secondary">{t('home.hero.getService')}</Link>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-image-container">
              <img 
                src={HeroImage} 
                alt="Suman Online Services" 
                className="hero-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Section id="about" title={t('home.about.title')} subtitle={t('home.about.subtitle')}>
        <div className="grid two">
          <div>
            <h3>{t('home.about.whoWeAre')}</h3>
            <p>
              {t('home.about.description1')}
            </p>
            <p>
              {t('home.about.description2')}
            </p>
            <div className="about-features">
              <div className="about-feature">
                <CheckCircle2 className="text-primary" size={20} />
                <span>{t('home.about.authorizedProvider')}</span>
              </div>
              <div className="about-feature">
                <CheckCircle2 className="text-primary" size={20} />
                <span>{t('home.about.secureConfidential')}</span>
              </div>
              <div className="about-feature">
                <CheckCircle2 className="text-primary" size={20} />
                <span>{t('home.about.quickTurnaround')}</span>
              </div>
              <div className="about-feature">
                <CheckCircle2 className="text-primary" size={20} />
                <span>{t('home.about.expertAssistance')}</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">{t('home.about.yearsExperience')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">{t('home.about.servicesOffered')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10K+</div>
                <div className="stat-label">{t('home.about.happyCustomers')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">{t('home.about.onlineSupport')}</div>
              </div>
            </div>
            <div className="about-cta">
              <Link to="/about" className="btn primary">{t('home.about.learnMore')}</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section id="services" title={t('home.services.title')} subtitle={t('home.services.subtitle')}>
        <div className="services-intro">
          <p>{t('home.services.intro')}</p>
        </div>
        <div className="grid three">
          {topServices.map((s) => (
            <ServiceCard 
              key={s.id} 
              icon={s.icon} 
              title={s.title} 
              description={s.description} 
            />
          ))}
        </div>
      </Section>

      <Section id="why" title={t('home.whyChoose.title')} subtitle={t('home.whyChoose.subtitle')} className="bg-light">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon"><Clock size={32} /></div>
            <h3>{t('home.whyChoose.quickEfficient.title')}</h3>
            <p>{t('home.whyChoose.quickEfficient.description')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Shield size={32} /></div>
            <h3>{t('home.whyChoose.secureConfidential.title')}</h3>
            <p>{t('home.whyChoose.secureConfidential.description')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Users size={32} /></div>
            <h3>{t('home.whyChoose.expertAssistance.title')}</h3>
            <p>{t('home.whyChoose.expertAssistance.description')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FileText size={32} /></div>
            <h3>{t('home.whyChoose.wideRange.title')}</h3>
            <p>{t('home.whyChoose.wideRange.description')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Headset size={32} /></div>
            <h3>{t('home.whyChoose.dedicatedSupport.title')}</h3>
            <p>{t('home.whyChoose.dedicatedSupport.description')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Award size={32} /></div>
            <h3>{t('home.whyChoose.trustedVerified.title')}</h3>
            <p>{t('home.whyChoose.trustedVerified.description')}</p>
          </div>
        </div>
      </Section>

      <Section id="testimonials" title={t('home.testimonials.title')} subtitle={t('home.testimonials.subtitle')} className="bg-light">
        <div className="testimonials-carousel-wrapper">
          <button 
            className="testimonial-nav-btn testimonial-nav-prev" 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="testimonials-carousel">
          <div 
            className="testimonials-track" 
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
              {testimonials.map((testimonial) => {
                const message = language === 'hi' ? testimonial.messageHi : testimonial.messageEn;
                return (
                  <div key={testimonial.id} className="testimonial-card">
                    <div className="testimonial-content">
                      <blockquote>"{message}"</blockquote>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                      <div className="author-info">
                        <cite className="author-name">{testimonial.name}</cite>
                        {testimonial.location && <span className="author-location">{testimonial.location}</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button 
            className="testimonial-nav-btn testimonial-nav-next" 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-indicator ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Section>

      <Section id="cta" title={t('home.cta.title')} className="cta-section">
        <div className="cta-content">
          <h2>{t('home.cta.heading')}</h2>
          <p>{t('home.cta.description')}</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary">{t('home.cta.contactNow')}</Link>
            <a href="tel:+916299813842" className="btn secondary">
              <Phone size={18} /> {t('home.cta.callNow')}
            </a>
          </div>
        </div>
      </Section>

      <Section id="contact-info" title={t('home.contactInfo.title')} className="contact-info-section">
        <div className="contact-grid">
          <div className="contact-card">
            <MapPin size={24} className="contact-icon" />
            <h3>{t('home.contactInfo.visitUs')}</h3>
            <p>Damu, Basopatti, Madhubani, Bihar 847230</p>
          </div>
          <div className="contact-card">
            <Clock size={24} className="contact-icon" />
            <h3>{t('home.contactInfo.workingHours')}</h3>
            <p>{t('home.contactInfo.hours')}<br />{t('home.contactInfo.sunday')}</p>
          </div>
          <div className="contact-card">
            <Mail size={24} className="contact-icon" />
            <h3>{t('home.contactInfo.contactInfo')}</h3>
            <p>Email: sumanonlineservice.in@gmail.com<br />Phone: +91 62998 13842</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
