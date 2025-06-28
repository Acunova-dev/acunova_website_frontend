'use client';

import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Pioneering Intelligent Technologies for a Better Tomorrow</h1>
            <p className="hero-subtitle">Creating a future where innovation empowers everyone through seamless, adaptive, and optimized solutions.</p>
            <div>
              <a href="/contact" className="button primary">Request Consultation</a>
              <a href="/services" className="button outline" style={{ marginLeft: '20px' }}>Our Services</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Core Focus Areas</h2>
            <div className="grid">
              <div className="card">
                <h3>Innovation Laboratory</h3>
                <p>Our structured environment for developing and validating technology solutions helps incubate commercially viable products, test business models, and transform prototypes into market-ready solutions.</p>
              </div>
              <div className="card">
                <h3>Technology Advisory</h3>
                <p>Comprehensive consulting services for strategic technology implementation, custom solution development, digital transformation roadmapping, and technology stack optimization.</p>
              </div>
              <div className="card">
                <h3>Intelligent Solutions</h3>
                <p>Specialized development in AI/ML, Advanced Data Analytics, Embedded Electronics Design, and IoT Connected Systems that drive real business value.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--light-gray)' }}>
          <div className="container">
            <h2 className="section-title">Our Approach</h2>
            <div className="grid">
              <div className="card">
                <h3>Intelligence</h3>
                <p>Leveraging advanced technologies like AI and data analytics to create smart solutions that adapt to your needs.</p>
              </div>
              <div className="card">
                <h3>Integration</h3>
                <p>Creating seamless hardware-software solutions that work perfectly together in your existing ecosystem.</p>
              </div>
              <div className="card">
                <h3>Impact</h3>
                <p>Focusing on measurable business outcomes and sustainable growth through practical innovation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

