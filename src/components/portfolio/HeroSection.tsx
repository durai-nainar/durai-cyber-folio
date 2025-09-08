import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    'Full Stack Web and App Developer',
    'Cybersecurity Enthusiast',
    'AI & Machine Learning Explorer',
    'Problem Solver & Innovator'
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    const currentRole = roles[currentRoleIndex];
    
    const typingInterval = setInterval(() => {
      if (!isDeleting && currentIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, currentIndex + 1));
        currentIndex++;
      } else if (!isDeleting && currentIndex === currentRole.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(currentRole.slice(0, currentIndex - 1));
        currentIndex--;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1BLF_AY1a4XhZuhgKwA2-Axq0XzV2rRcr/view?usp=drivesdk', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center cyber-bg relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="dark:text-pink-500 text-foreground">Durai Rajan</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-2">
              I'm a <span className="text-pink-500 dark:text-seablue-400 font-semibold min-h-[1.5em] inline-block">{displayText}</span>
            </p>
            <p className="text-sm lg:text-base text-muted-foreground mb-8 max-w-md">
              I create <span className="text-primary">Exciting Stuff</span> on the Internet. Passionate about building innovative solutions and exploring cutting-edge technologies.
            </p>
            <button 
              onClick={openResume}
              className="btn-cyber inline-flex items-center gap-2"
            >
              <ExternalLink size={20} />
              Download Resume
            </button>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <button 
                onClick={() => window.open('https://github.com/durai1451', '_blank')}
                className="w-12 h-12 bg-card/50 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 border border-border"
              >
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/durai-nainar-752796265', '_blank')}
                className="w-12 h-12 bg-card/50 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 border border-border"
              >
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button 
                onClick={() => window.open('https://leetcode.com/durai_rajan', '_blank')}
                className="w-12 h-12 bg-card/50 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 border border-border"
              >
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.818 2.133 7.95-.072 2.04-2.106 2.097-5.421.26-7.607l-4.043-4.892c-.122-.15-.23-.312-.335-.481l-.658-1.114c-.417-.68-1.355-1.887-2.728-1.887a1.5 1.5 0 0 0-1.5 1.5c0 .683.555 1.2 1.5 1.2.419 0 .604.119.604.119.604.453 1.146 1.179 1.604 1.793l.658 1.115c.122.198.26.379.421.533l4.043 4.891c.967 1.154.917 2.919-.137 4.031-.959.973-2.415 1.009-3.382.072l-.04-.039-4.276-4.193a2.824 2.824 0 0 1-.601-.85 2.657 2.657 0 0 1-.166-.485 2.474 2.474 0 0 1-.025-1.06 2.4 2.4 0 0 1 .554-.955l3.853-4.126a.5.5 0 0 1 .724.694l-3.854 4.126a1.405 1.405 0 0 0-.323.558 1.49 1.49 0 0 0 .015.638c.05.179.127.344.234.49a1.807 1.807 0 0 0 .384.542l4.277 4.193.039.038c.413.402 1.072.397 1.49-.013.42-.421.418-1.103-.004-1.518l-4.043-4.892a1.35 1.35 0 0 0-.21-.266 1.024 1.024 0 0 0-.658-.377c-.369-.055-.735.1-.92.377a.5.5 0 1 1-.806-.592c.353-.48.926-.77 1.526-.693a2.009 2.009 0 0 1 1.296.745c.088.104.17.215.245.331l4.043 4.892c1.025 1.221 1.001 3.041-.056 4.229-1.063 1.195-2.819 1.219-3.925.058l-.039-.038-4.277-4.193a2.824 2.824 0 0 1-.601-.85 2.657 2.657 0 0 1-.166-.485z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-cyber-glow-pulse overflow-hidden p-1 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Durai Rajan"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-cyber-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};