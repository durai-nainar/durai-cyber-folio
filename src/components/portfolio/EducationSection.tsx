import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech - Computer Science',
      institution: 'Andhra Loyola Institute of Engineering and Technology',
      year: '2021-2025',
      icon: GraduationCap
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Jr College',
      year: '2019-2021',
      icon: Calendar
    },
    {
      degree: 'Schooling',
      institution: 'Atkinson High School',
      year: '2010-2019',
      icon: Calendar
    }
  ];

  return (
    <section id="education" className="py-20 cyber-bg relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyber-glow" data-aos="fade-up">
          Education Timeline
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative mb-12" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-7/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card-cyber rgb-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <edu.icon className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold rgb-text">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                    <p className="text-foreground">{edu.institution}</p>
                  </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};