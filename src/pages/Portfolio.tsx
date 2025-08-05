import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from '@/components/portfolio/Header';
import { Preloader } from '@/components/portfolio/Preloader';
import { ProgressBar } from '@/components/portfolio/ProgressBar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { TechStackSection } from '@/components/portfolio/TechStackSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { CertificationsSection } from '@/components/portfolio/CertificationsSection';
import { TestimonialsSection } from '@/components/portfolio/TestimonialsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';
import { ThemeProvider } from '@/components/portfolio/ThemeProvider';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Preloader timer
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 3000);

    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    // Scroll progress tracking
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (totalScroll / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="durai-portfolio-theme">
      {isLoading && <Preloader />}
      <ProgressBar progress={scrollProgress} />
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <TechStackSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;