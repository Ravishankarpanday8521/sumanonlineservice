import { useMemo, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Section from '../components/Section';
import { services } from '../data/services';
import { useLanguage } from '../locales/LanguageProvider';

// Google Apps Script Web App URL - Replace with your deployed script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwaD5iCPNiXrrL2znR83Enzq00KE1HFQ0N-Eoat3pSebRJ49Y6aoLDXNfpoq0L0nEJWtA/exec';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', mobile: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const serviceOptions = useMemo(() => services.map((s) => {
    const translatedTitle = t(`serviceNames.${s.id}`);
    return { value: s.id, label: translatedTitle || s.title };
  }), [t]);

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get the service name for display
      const selectedService = serviceOptions.find(opt => opt.value === form.service);
      const serviceName = selectedService ? selectedService.label : form.service || 'N/A';

      // Prepare data to send
      const formData = {
        name: form.name,
        mobile: form.mobile,
        email: form.email || 'N/A',
        service: serviceName,
        message: form.message || 'N/A',
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      // Send to Google Sheets via Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Since we're using no-cors, we can't check response status
      // Assume success if no error is thrown
      setSubmitStatus('success');
      alert(t('contact.thanksMessage'));
      setForm({ name: '', mobile: '', email: '', service: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <Section title={t('contact.title')} subtitle={t('contact.subtitle')}>
        <div className="grid two">
          <form className="card form" onSubmit={onSubmit}>
            <div className="form-row">
              <label>{t('contact.name')}</label>
              <input name="name" value={form.name} onChange={onChange} placeholder={t('contact.yourName')} required />
            </div>
            <div className="form-row">
              <label>{t('contact.mobile')}</label>
              <input name="mobile" value={form.mobile} onChange={onChange} placeholder={t('contact.yourMobile')} required />
            </div>
            <div className="form-row">
              <label>{t('contact.email')}</label>
              <input type="email" name="email" value={form.email} onChange={onChange} placeholder={t('contact.yourEmail')} />
            </div>
            <div className="form-row">
              <label>{t('contact.selectService')}</label>
              <select name="service" value={form.service} onChange={onChange}>
                <option value="">{t('contact.selectServicePlaceholder')}</option>
                {serviceOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label>{t('contact.message')}</label>
              <textarea name="message" value={form.message} onChange={onChange} placeholder={t('contact.messagePlaceholder')} rows={4} />
            </div>
            <button className="btn primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('contact.submitting') || 'Submitting...' : t('contact.submit')}
            </button>
            {submitStatus === 'success' && (
              <p style={{ color: 'green', marginTop: '1rem' }}>{t('contact.thanksMessage')}</p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: 'red', marginTop: '1rem' }}>Error submitting form. Please try again.</p>
            )}
          </form>

          <aside className="card sidebar">
            <h3>{t('contact.contactDetails')}</h3>
            <p><strong>{t('contact.address')}:</strong> Damu, Basopatti, Madhubani, Bihar 847230</p>
            <p><strong>{t('contact.phone')}:</strong> +91 62998 13842</p>
            <p><strong>{t('contact.email')}:</strong> sumanonlineservice.in@gmail.com</p>
            <p><strong>{t('contact.workingHours')}:</strong> {t('contact.workingHoursValue')}</p>
            <div className="map-placeholder" aria-label="Google Map placeholder">
              <iframe title="Map" width="100%" height="200" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=India&t=&z=4&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}
