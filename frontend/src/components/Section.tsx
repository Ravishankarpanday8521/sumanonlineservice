import type { ReactNode } from 'react';

export default function Section({ id, title, subtitle, className = '', children }: { id?: string; title?: string; subtitle?: string; className?: string; children: ReactNode; }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {title && (
          <header className="section-header">
            <div>
              <h2>{title}</h2>
              {subtitle && <p className="muted">{subtitle}</p>}
            </div>
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
