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
          <p className="text-center text-lg mb-12 text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
            I am always ready and eager to talk — to share ideas, explore possibilities, and grow together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div data-aos="fade-left">
              <div className="card-cyber rgb-border">
                <h4 className="text-xl font-bold mb-2 rgb-text">Connect With Me</h4>
                <p className="text-muted-foreground mb-6">I'm always open to connecting with like-minded individuals, collaborators, or potential employers. Whether you have a project in mind, a question about my work, or simply want to say hello, don't hesitate to reach out. I genuinely enjoy discussing ideas, solving problems, and exploring opportunities.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <span>durairajannainar@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="text-primary w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.95 21L18.85 20.9L18.75 20.85C17.5 20.65 16.35 20.15 15.35 19.4L12.5 17.6L9.65 19.4C8.65 20.15 7.5 20.65 6.25 20.85L6.15 20.9L5.05 21C4.75 21 4.5 20.75 4.5 20.45V13C4.5 11.5 5.75 10.25 7.25 10.25H7.75V7.5C7.75 5.85 9.1 4.5 10.75 4.5H13.25C14.9 4.5 16.25 5.85 16.25 7.5V10.25H16.75C18.25 10.25 19.5 11.5 19.5 13V20.45C19.5 20.75 19.25 21 18.95 21H19.95ZM9.25 7.5V10.25H14.75V7.5C14.75 6.65 14.1 6 13.25 6H10.75C9.9 6 9.25 6.65 9.25 7.5Z"/>
                    </svg>
                    <span>+919542845096</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="text-primary w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>Vijayawada, Andhra Pradesh</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h5 className="text-lg font-semibold mb-4 text-cyber-glow">Follow Me</h5>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                        <button
                        key={index}
                        onClick={() => window.open(social.url, '_blank')}
                        className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group rgb-border"
                        title={social.label}
                      >
                        <social.icon className="rgb-text group-hover:scale-110 transition-transform" size={20} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="card-cyber rgb-border">
                <h4 className="text-xl font-bold mb-6 rgb-text text-center">Send Message</h4>
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