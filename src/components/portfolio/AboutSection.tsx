export const AboutSection = () => {
  const stats = [
    { number: '20+', label: 'Projects' },
    { number: '6+', label: 'Certifications' },
    { number: '2+', label: 'Internships' },
    { number: '3+', label: 'Years Learning' }
  ];

  return (
    <section id="about" className="py-20 cyber-bg relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 timeline-number" data-aos="fade-up">
            About Me
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-12 rgb-border shadow-2xl" data-aos="fade-up" data-aos-delay="200">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I am recently graduated BTech student in Computer Science, with a solid foundation in full-stack Java development, database design, and front-end technologies. I've built hands-on experience in cloud computing, cybersecurity, and artificial intelligence through practical internships, bootcamps, and personal projects.
              </p>
              <p>
                With a strong command over Python, Java, SQL, and modern frameworks, I am deeply driven by problem-solving and innovation. I strive to create impactful solutions, work collaboratively, and continuously evolve by learning, adapting, and building for real-world applications.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="400">
            {stats.map((stat, index) => (
              <div key={index} className="card-cyber text-center rgb-border">
                <div className="text-3xl font-bold rgb-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};