import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
              <div>
                <h2 className="section-title" style={{ textAlign: 'left' }}>Send Us a Message</h2>
                <form id="contactForm" style={{ display: 'grid', gap: '20px' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '8px' }}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Lorem Ipsum"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="lorem@ipsum.com"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" style={{ display: 'block', marginBottom: '8px' }}>Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Lorem Company Ltd."
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '8px' }}>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Lorem ipsum dolor sit amet..."
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="button"
                    style={{ width: 'fit-content' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div>
                <h2 className="section-title" style={{ textAlign: 'left' }}>Contact Information</h2>
                <div className="card">
                  <h3>Office Location</h3>
                  <p style={{ marginBottom: '20px' }}>
                    123 Lorem Street<br />
                    Ipsum District<br />
                    Dolor City, ST 12345<br />
                    Consectetur
                  </p>

                  <h3>Contact Details</h3>
                  <p style={{ marginBottom: '10px' }}>
                    Phone: <a href="tel:+1234567890" style={{ color: 'var(--primary-color)' }}>+1 (234) 567-890</a>
                  </p>
                  <p style={{ marginBottom: '20px' }}>
                    Email: <a href="mailto:info@lorem.com" style={{ color: 'var(--primary-color)' }}>info@lorem.com</a>
                  </p>

                  <h3>Business Hours</h3>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
