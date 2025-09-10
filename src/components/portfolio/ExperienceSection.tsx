import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Java Intern',
      company: 'DataValley IT Solutions',
      duration: 'May 2024 – July 2024',
      location: 'Remote',
      description: [
        'Understood and applied key Java OOP principles across backend systems.',
        'Built and connected dynamic web pages using HTML, JDBC, and SQL.',
        'Designed and developed a mini Library Management System using Spring Boot.',
        'Used Eclipse IDE to structure and test Java modules.',
        'Strengthened end-to-end development skills from frontend to database.'
      ]
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Indian Servers',
      duration: 'July 2023 – August 2023',
      location: 'Remote',
      description: [
        'Performed web vulnerability scans and application threat analysis.',
        'Explored ethical hacking and XSS/SQL injection techniques.',
        'Used OWASP tools and reporting strategies.',
        'Strengthened network and application security basics.',
        'Developed security reports with logging framework.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 cyber-bg relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 rgb-text" data-aos="fade-up">
          Experience / Internships
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="card-cyber rgb-border h-full" 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Briefcase className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyber-glow">{exp.title}</h3>
                    <p className="text-lg text-foreground">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};