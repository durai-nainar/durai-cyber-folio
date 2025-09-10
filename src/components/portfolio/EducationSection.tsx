import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech - Computer Science',
      institution: 'Andhra Loyola Institute of Engineering and Technology',
      year: '2021-2025',
      quote: 'Building the foundation for tomorrow\'s innovations',
      icon: GraduationCap
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Jr College',
      year: '2019-2021',
      quote: 'Where curiosity meets opportunity',
      icon: Calendar
    },
    {
      degree: 'Schooling',
      institution: 'Atkinson High School',
      year: '2010-2019',
      quote: 'The journey of a thousand miles begins with a single step',
      icon: Calendar
    }
  ];

  return (
    <section id="education" className="py-20 cyber-bg relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 theme-heading-text" data-aos="fade-up">
          Education Timeline
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="w-full" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="bg-card shadow-lg border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl theme-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <edu.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold px-2 py-1 rounded inline-block theme-heading-text">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.year}</p>
                    </div>
                  </div>
                  <p className="text-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm italic text-muted-foreground">"{edu.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};