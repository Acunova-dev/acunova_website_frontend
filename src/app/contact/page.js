'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon } from '../components/Icons';

// Initialize EmailJS with your public key
emailjs.init("9jq26ie2IjX7PsqlR"); // Sign up at emailjs.com to get this

export default function Contact() {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    const templateParams = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      to_email: 'acunovapvtltd@gmail.com'
    };

    try {
      await emailjs.send(
        'service_xyxqjm1', // Get this from EmailJS dashboard
        'template_4wyvjsg', // Get this from EmailJS dashboard
        templateParams
      );

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        e.target.reset();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: error.message || 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">Get in touch with our team for any inquiries or collaboration opportunities</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-grid">
              <div>
                <h2 className="section-title" style={{ textAlign: 'left' }}>Send Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  {formStatus.submitted && (
                    <div className="form-message success">
                      Thank you for your message. We will get back to you soon!
                    </div>
                  )}
                  {formStatus.error && (
                    <div className="form-message error">
                      {formStatus.error}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                      disabled={formStatus.submitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="Enter your email address"
                      disabled={formStatus.submitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="Enter your phone number"
                      disabled={formStatus.submitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="form-input"
                      placeholder="What is your message about?"
                      disabled={formStatus.submitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="form-textarea"
                      placeholder="Write your message here..."
                      disabled={formStatus.submitting}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="button primary"
                    disabled={formStatus.submitting}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="contact-info">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Contact Information</h2>
                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <span className="contact-icon"><LocationIcon /></span>
                    <div>
                      <strong>Address</strong>
                      <p>123 Innovation Drive<br />Tech Valley, CA 94025</p>
                    </div>
                  </li>
                  <li className="contact-info-item">
                    <span className="contact-icon"><PhoneIcon /></span>
                    <div>
                      <strong>Phone</strong>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </li>
                  <li className="contact-info-item">
                    <span className="contact-icon"><EmailIcon /></span>
                    <div>
                      <strong>Email</strong>
                      <p>acunovapvtltd@gmail.com</p>
                    </div>
                  </li>
                  <li className="contact-info-item">
                    <span className="contact-icon"><ClockIcon /></span>
                    <div>
                      <strong>Business Hours</strong>
                      <p>Monday - Friday<br />9:00 AM - 6:00 PM PST</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
