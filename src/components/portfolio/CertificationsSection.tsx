import { Award, X } from 'lucide-react';
import { useState } from 'react';

export const CertificationsSection = () => {
  const [showModal, setShowModal] = useState(false);

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

  const additionalCertifications = [
    { name: 'Advanced JavaScript Concepts', link: 'https://certificate-link1.com' },
    { name: 'Cloud Computing with AWS', link: 'https://certificate-link2.com' },
    { name: 'Machine Learning Fundamentals', link: 'https://certificate-link3.com' },
    { name: 'Docker & Kubernetes Mastery', link: 'https://certificate-link4.com' },
    { name: 'Mobile App Development', link: 'https://certificate-link5.com' },
    { name: 'Database Management Systems', link: 'https://certificate-link6.com' },
    { name: 'DevOps Engineering Pipeline', link: 'https://certificate-link7.com' },
    { name: 'Blockchain Technology', link: 'https://certificate-link8.com' },
    { name: 'UI/UX Design Principles', link: 'https://certificate-link9.com' },
    { name: 'Data Structures & Algorithms', link: 'https://certificate-link10.com' }
  ];

  return (
    <section id="certifications" className="py-20 cyber-bg relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 light:rgb-text-animation dark:text-cyber-glow cyberpunk:rgb-text-animation" data-aos="fade-up">
          Certifications
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* First row - 3 certificates */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {certifications.slice(0, 3).map((cert, index) => (
              <div 
                key={index} 
                className="bg-card shadow-lg border group cursor-pointer text-center rounded-2xl p-4 theme-border cyberpunk:rgb-bg-line"
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
                <h3 className="text-lg font-bold light:rgb-text-animation dark:text-cyber-glow cyberpunk:rgb-text-animation">{cert.title}</h3>
              </div>
            ))}
          </div>
          
          {/* Second row - 3 certificates */}
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.slice(3, 6).map((cert, index) => (
              <div 
                key={index + 3} 
                className="bg-card shadow-lg border group cursor-pointer text-center rounded-2xl p-4 theme-border cyberpunk:rgb-bg-line" 
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
                <h3 className="text-lg font-bold light:rgb-text-animation dark:text-cyber-glow cyberpunk:rgb-text-animation">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <button 
            onClick={() => setShowModal(true)}
            className="text-2xl font-bold cursor-pointer hover:scale-105 transition-transform px-6 py-3 rounded-lg shadow-lg hover:shadow-xl light:bg-white light:text-black light:border-black dark:bg-card dark:text-foreground dark:border-[#B3CCE3] cyberpunk:rgb-bg-line border"
          >
            Click Here to view More Certificates
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="modal-popup bg-card shadow-2xl border rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto light:border-black dark:border-[#B3CCE3] cyberpunk:rgb-bg-line">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold light:rgb-text-animation dark:text-cyber-glow cyberpunk:rgb-text-animation">Additional Certificates</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-3">
                {additionalCertifications.map((cert, index) => (
                  <div 
                    key={index}
                    onClick={() => window.open(cert.link, '_blank')}
                    className="bg-background border rounded-lg p-4 text-center cursor-pointer hover:bg-primary/10 transition-colors light:border-black dark:border-[#B3CCE3] cyberpunk:rgb-bg-line"
                  >
                    <p className="font-medium light:rgb-text-animation dark:text-cyber-glow cyberpunk:rgb-text-animation">{cert.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};