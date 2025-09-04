import { useState } from 'react';
import { Send, Github, Linkedin, Instagram, Mail, CheckCircle } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
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
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.381 1.38 1.38 0 0 0 1.38 1.381 1.38 1.38 0 0 0 1.381-1.381 1.38 1.38 0 0 0-1.381-1.381z"/>
        </svg>
      ),
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
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground" data-aos="fade-up">
            Get In Touch
          </h2>
          <p className="text-center text-lg mb-12 text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
            I am always ready and eager to talk — to share ideas, explore possibilities, and grow together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div data-aos="fade-left">
              <div className="bg-card shadow-lg border border-border rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-foreground bg-background dark:text-background dark:bg-foreground px-2 py-1 rounded inline-block">Connect With Me</h4>
                <p className="text-muted-foreground mb-6">I'm always open to connecting with like-minded individuals, collaborators, or potential employers. Whether you have a project in mind, a question about my work, or simply want to say hello, don't hesitate to reach out. I genuinely enjoy discussing ideas, solving problems, exploring opportunities.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <span>durairajannainar@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="text-primary w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>www.linkedin.com/in/durai-nainar</span>
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
                        className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group border border-border"
                        title={social.label}
                      >
                        <social.icon className="text-foreground bg-background dark:text-background dark:bg-foreground p-1 rounded group-hover:scale-110 transition-transform" size={20} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="bg-card shadow-lg border border-border rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-6 text-foreground bg-background dark:text-background dark:bg-foreground px-2 py-1 rounded inline-block text-center">Send Message</h4>
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
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      value={formData.subject}
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