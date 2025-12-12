import Section from '../components/Section';

export default function Gallery() {
  // Images of cyber cafe shop and public gatherings
  // To use your own images: Place them in frontend/public/gallery/ folder
  // and reference as: '/gallery/image-1.jpg'
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      alt: 'Cyber cafe with customers using computers'
    },
    {
      src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      alt: 'People working together in cyber cafe'
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      alt: 'Cyber cafe shop interior with customers'
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      alt: 'Public gathering at computer center'
    },
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      alt: 'Customers at cyber cafe shop'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      alt: 'People using services at cyber cafe'
    },
    {
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      alt: 'Cyber cafe with multiple workstations'
    },
   
    {
      src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop',
      alt: 'Community members at cyber cafe shop'
    },
   
  ];

  return (
    <main>
      <Section title="Gallery" subtitle="A glimpse of our center and services">
        <div className="gallery-container">
          {images.map((img, i) => {
            // Last row (items 7-10): 4 items with 4th centered
            const isLastRow = i >= 6;
            const isLastItem = i === images.length - 1;
            
            return (
              <div 
                key={i} 
                className={`gallery-item ${isLastRow && isLastItem ? 'gallery-item-center' : ''}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="img-card" 
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/600x400/1e293b/60a5fa?text=${encodeURIComponent(img.alt)}`;
                  }}
                />
              </div>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
