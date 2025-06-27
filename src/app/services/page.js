import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <Header />      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="card">
                <h2>Custom AI Applications</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <ul style={{ listStyle: 'none', padding: '20px 0' }}>
                  <li style={{ marginBottom: '10px' }}>• Lorem ipsum dolor sit amet</li>
                  <li style={{ marginBottom: '10px' }}>• Consectetur adipiscing elit</li>
                  <li style={{ marginBottom: '10px' }}>• Sed do eiusmod tempor</li>
                  <li style={{ marginBottom: '10px' }}>• Ut labore et dolore magna</li>
                </ul>
              </div>
            </div>

            <div className="grid" style={{ marginTop: '40px' }}>
              <div className="card">
                <h2>IoT System Design</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <ul style={{ listStyle: 'none', padding: '20px 0' }}>
                  <li style={{ marginBottom: '10px' }}>• Duis aute irure dolor</li>
                  <li style={{ marginBottom: '10px' }}>• In reprehenderit in voluptate</li>
                  <li style={{ marginBottom: '10px' }}>• Velit esse cillum dolore</li>
                  <li style={{ marginBottom: '10px' }}>• Eu fugiat nulla pariatur</li>
                </ul>
              </div>
              <div className="card">
                <h2>Embedded Systems</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ul style={{ listStyle: 'none', padding: '20px 0' }}>
                  <li style={{ marginBottom: '10px' }}>• Ut enim ad minim veniam</li>
                  <li style={{ marginBottom: '10px' }}>• Quis nostrud exercitation</li>
                  <li style={{ marginBottom: '10px' }}>• Ullamco laboris nisi</li>
                  <li style={{ marginBottom: '10px' }}>• Aliquip ex ea commodo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--light-gray)' }}>
          <div className="container">
            <h2 className="section-title">Our Development Process</h2>
            <div className="grid">
              <div className="card">
                <h3>1. Requirements Analysis</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="card">
                <h3>2. Design & Planning</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
              <div className="card">
                <h3>3. Development & Testing</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
              </div>
              <div className="card">
                <h3>4. Deployment & Support</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Ready to Get Started?</h2>
            <p style={{ marginBottom: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/contact" className="button">Request Consultation</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
