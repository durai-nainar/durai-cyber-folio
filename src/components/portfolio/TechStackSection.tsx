import { useEffect, useState } from 'react';

export const TechStackSection = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const techStack = {
    frontend: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'AOS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
    ],
    backend: [
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'API Handling', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
    ],
    programming: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' }
    ],
    others: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      { name: 'Eclipse', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
      { name: 'Netlify', logo: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
    ]
  };

  const TechGrid = ({ title, technologies }: { title: string; technologies: Array<{ name: string; logo: string }> }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center text-foreground bg-background dark:text-background dark:bg-foreground px-4 py-2 rounded-lg inline-block border-b-2 border-primary pb-2">{title}</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className={`bg-card/50 backdrop-blur-sm shadow-md border border-border rounded-lg text-center p-3 group cursor-pointer hover:border-primary transition-all duration-300 ${hasLoaded ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: hasLoaded ? `${index * 100}ms` : '0ms' }}
          >
            <div className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs font-medium text-foreground">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="techstack" className="py-20 cyber-bg relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground" data-aos="fade-up">
          Tech Stack
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Frontend & Backend */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div data-aos="fade-right">
              <TechGrid title="Frontend" technologies={techStack.frontend} />
            </div>
            <div data-aos="fade-left">
              <TechGrid title="Backend" technologies={techStack.backend} />
            </div>
          </div>
          
          {/* Programming & Others */}
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <TechGrid title="Programming" technologies={techStack.programming} />
            </div>
            <div data-aos="fade-left">
              <TechGrid title="Others" technologies={techStack.others} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};