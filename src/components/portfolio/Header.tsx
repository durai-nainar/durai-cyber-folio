import { useState, useEffect } from 'react';
import { Moon, Sun, Cpu } from 'lucide-react';
import { useTheme } from './ThemeProvider';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showThemeName, setShowThemeName] = useState(false);
  const [themeName, setThemeName] = useState('');
  const {
    theme,
    setTheme
  } = useTheme();
  const navItems = [{
    id: 'about',
    label: 'About'
  }, {
    id: 'education',
    label: 'Education'
  }, {
    id: 'techstack',
    label: 'Tech Stack'
  }, {
    id: 'experience',
    label: 'Experience'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'certifications',
    label: 'Certifications'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const toggleTheme = () => {
    let nextTheme;
    let displayName;
    
    if (theme === 'light') {
      nextTheme = 'dark';
      displayName = 'Dark Theme';
    } else if (theme === 'dark') {
      nextTheme = 'cyberpunk';
      displayName = 'Special Theme';
    } else {
      nextTheme = 'light';
      displayName = 'Light Theme';
    }
    
    setTheme(nextTheme);
    setThemeName(displayName);
    setShowThemeName(true);
    
    setTimeout(() => {
      setShowThemeName(false);
    }, 3000);
  };
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 cyber-bg header-border ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4 ${theme === 'light' ? 'bg-cyan-400' : 'bg-gray-950'}">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold rgb-text-animation">
              Durai's Portfolio
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-1 ml-auto mr-4">
              {navItems.map((item, index) => <div key={item.id} className="flex items-center">
                  <button onClick={() => scrollToSection(item.id)} className={`nav-link px-3 py-2 text-lg font-bold transition-all duration-300 hover:scale-110 hover:text-primary ${activeSection === item.id ? 'active text-primary' : theme === 'light' ? 'text-blue-900' : 'text-muted-foreground'}`}>
                    {item.label}
                  </button>
                  {index < navItems.length - 1 && <div className="w-px h-4 bg-border mx-1"></div>}
                </div>)}
            </div>

            {/* Theme toggle */}
            <div className="relative flex items-center">
              <button onClick={toggleTheme} className={`btn-cyber p-2 ${theme === 'light' ? 'text-blue-900' : ''}`}>
                {theme === 'light' ? <Moon size={20} /> : theme === 'dark' ? <Sun size={20} /> : <Cpu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Theme notification - centered below navbar */}
      {showThemeName && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 bg-card border border-border rounded-lg px-6 py-3 text-lg font-bold text-foreground shadow-lg animate-fade-in">
          Switched to {themeName}
        </div>
      )}
    </>
  );
};