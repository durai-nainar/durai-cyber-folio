import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Durai's code quality and debugging skills grow every week. He tackles complex problems with a calm, methodical approach.",
      author: "Programming Teacher",
      role: "Mentor"
    },
    {
      content: "I've watched Durai turn ideas into polished full-stack apps faster than most professionals.",
      author: "MyCaptain Mentor",
      role: "Industry Expert"
    }
  ];

  return (
    <section id="testimonials" className="py-20 cyber-bg relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 light:rgb-text-animation dark:text-cyber-glow cyberpunk:rgb-text-animation" data-aos="fade-up">
          What People Say
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card-cyber theme-border cyberpunk:rgb-bg-line text-center" 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <Quote className="text-primary mx-auto mb-4" size={48} />
                <p className="text-lg italic mb-6 text-foreground">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-cyber-glow">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};