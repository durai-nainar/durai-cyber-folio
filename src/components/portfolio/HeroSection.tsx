import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Web and App Developer';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1BLF_AY1a4XhZuhgKwA2-Axq0XzV2rRcr/view?usp=drivesdk', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center cyber-bg relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-cyber-glow">Durai Rajan</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8 h-8">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            <button 
              onClick={openResume}
              className="btn-cyber inline-flex items-center gap-2"
            >
              <ExternalLink size={20} />
              Download Resume
            </button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent animate-cyber-glow-pulse overflow-hidden border-4 border-primary/30">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Durai Rajan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-cyber-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-cyber-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};