import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Thyroid Diagnosis using Machine Learning',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      technologies: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
      ],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com'
    },
    {
      title: 'Heart Disorder Detection using Machine Learning',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=250&fit=crop',
      technologies: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
      ],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com'
    },
    {
      title: 'Railway Management System – Full Stack Java',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop',
      technologies: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      ],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com'
    },
    {
      title: 'Web Application PenTester',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
      technologies: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      ],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com'
    },
    {
      title: 'Student Tracker – Full Stack',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      technologies: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      ],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com'
    },
    {
      title: 'Weather Info Web App – API + JS',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=250&fit=crop',
      technologies: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      ],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 rgb-text" data-aos="fade-up">
          Projects
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="card-cyber rgb-border group cursor-pointer h-full" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-cyber-glow">{project.title}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <img 
                      key={i} 
                      src={tech} 
                      alt="Technology"
                      className="w-6 h-6 object-contain"
                    />
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <button 
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="flex-1 btn-cyber text-sm py-2 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </button>
                  <button 
                    onClick={() => window.open(project.demoLink, '_blank')}
                    className="flex-1 btn-cyber text-sm py-2 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};