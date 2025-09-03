import { Award } from 'lucide-react';

export const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Front-End Web Development – MyCaptain',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
      link: 'https://certificate.com'
    },
    {
      title: 'Java Full Stack – DataValley',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop',
      link: 'https://certificate.com'
    },
    {
      title: 'Google Data Analytics – Coursera',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      link: 'https://certificate.com'
    },
    {
      title: 'Cyber Security – Indian Servers',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop',
      link: 'https://certificate.com'
    },
    {
      title: 'ReactJS Bootcamp – LetsUpgrade',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
      link: 'https://certificate.com'
    },
    {
      title: 'Python Programming - MyCaptain',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop',
      link: 'https://certificate.com'
    }
  ];

  return (
    <section id="certifications" className="py-20 cyber-bg relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 rgb-text" data-aos="fade-up">
          Certifications
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* First row - 3 certificates */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {certifications.slice(0, 3).map((cert, index) => (
              <div 
                key={index} 
                className="card-cyber rgb-border group cursor-pointer text-center"
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
                onClick={() => window.open(cert.link, '_blank')}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Award className="text-primary" size={48} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-cyber-glow">{cert.title}</h3>
              </div>
            ))}
          </div>
          
          {/* Second row - 3 certificates */}
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.slice(3, 6).map((cert, index) => (
              <div 
                key={index + 3} 
                className="card-cyber rgb-border group cursor-pointer text-center" 
                data-aos="zoom-in" 
                data-aos-delay={(index + 3) * 100}
                onClick={() => window.open(cert.link, '_blank')}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Award className="text-primary" size={48} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-cyber-glow">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};