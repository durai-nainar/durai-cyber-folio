import { useState } from 'react';
import { Send, Github, Linkedin, Instagram, Mail, Trophy, CheckCircle } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/durai1451'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/durai-nainar-752796265'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com/durai__nainar'
    },
    {
      icon: Trophy,
      label: 'LeetCode',
      url: 'https://leetcode.com'
    },
    {
      icon: Mail,
      label: 'Gmail',
      url: 'mailto:durairajannainar@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 cyber-bg relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-cyber-glow" data-aos="fade-up">
            Get In Touch
          </h2>
          <h3 className="text-2xl font-bold text-center mb-4 text-cyber-glow" data-aos="fade-up" data-aos-delay="100">
            Let's Connect
          </h3>
          <p className="text-center text-lg mb-12 text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
            I am always ready and eager to talk — to share ideas, explore possibilities, and grow together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                  />
                </div>
                <button type="submit" className="w-full btn-cyber flex items-center justify-center gap-2">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div data-aos="fade-left">
              <div className="card-cyber">
                <h4 className="text-xl font-bold mb-6 text-cyber-glow">Connect With Me</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <span>durairajannainar@gmail.com</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h5 className="text-lg font-semibold mb-4 text-cyber-glow">Follow Me</h5>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <button
                        key={index}
                        onClick={() => window.open(social.url, '_blank')}
                        className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                        title={social.label}
                      >
                        <social.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="card-cyber text-center max-w-sm mx-4">
            <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2 text-cyber-glow">Message Sent Successfully!</h3>
            <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        </div>
      )}
    </section>
  );
};