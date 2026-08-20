import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Phone,
  Mail,
  Link,
  Copy,
  Check,
  Send,
  MessageSquare,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const [formSent, setFormSent] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopiedItem(type);

      confetti({
        particleCount: 50,
        spread: 70,
        origin: {
          y: 0.8,
        },
      });

      setTimeout(() => {
        setCopiedItem(null);
      }, 2500);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setFormSent(true);

    confetti({
      particleCount: 80,
      spread: 100,
      origin: {
        y: 0.5,
      },
    });
  };

  const resetForm = () => {
    setFormSent(false);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="section paper-texture" id="contact">
      <div className="section-decorations">
        <div className="bullets-decor">
          <span className="bullet"></span>
          <span className="bullet"></span>
          <span className="bullet"></span>
        </div>
      </div>

      <div className="contact-content animated-element fade-up">
        <div className="contact-header">
          <span className="cursive-accent">Let's</span>
          <h4 className="section-title">Work Together</h4>
          <p className="contact-description">
            Looking for software development roles, internships, or collaboration on innovative AI & web projects.
          </p>
        </div>

        <div className="grid-2">
          <div className="contact-info">
            <div className="scrapbook-card paperclip">
              <h3 className="contact-sub-heading">Get in Touch</h3>
              
              <div className="contact-items">
                <div className="contact-info-item">
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-value">
                    {personalInfo.phone}
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="copy-icon-btn"
                    title="Copy phone"
                  >
                    {copiedItem === 'phone' ? (
                      <Check className="w-4 h-4 text-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="contact-info-item">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact-value">
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="copy-icon-btn"
                    title="Copy email"
                  >
                    {copiedItem === 'email' ? (
                      <Check className="w-4 h-4 text-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="contact-info-item">
                  <span className="contact-label">LinkedIn</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-value">
                    {personalInfo.linkedin}
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.linkedin, 'linkedin')}
                    className="copy-icon-btn"
                    title="Copy LinkedIn"
                  >
                    {copiedItem === 'linkedin' ? (
                      <Check className="w-4 h-4 text-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="social-links-section">
                <h4 className="social-links-title">Connect with me</h4>
                <div className="social-buttons">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                    <Link className="social-icon" />
                    LinkedIn
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="social-btn twitter-btn">
                    <Mail className="social-icon" />
                    Email
                  </a>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="social-btn github-btn">
                    <Phone className="social-icon" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="scrapbook-card pushpin">
              {formSent ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="section-title">Message Sent Successfully!</h3>
                  <p className="contact-success-text">
                    Thank you for reaching out. Abhijeet will get back to you promptly at {formData.email}.
                  </p>
                  <button
                    onClick={resetForm}
                    className="btn-brutalist btn-burgundy mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="contact-form">
                  <div className="contact-form-header">
                    <MessageSquare className="w-5 h-5" />
                    <span className="font-bold">Quick Connect Note</span>
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe / Recruiter"
                      className="contact-form-input"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@company.com"
                      className="contact-form-input"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Abhijeet, we loved your portfolio and would like to connect..."
                      className="contact-form-input contact-form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-brutalist btn-burgundy"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;