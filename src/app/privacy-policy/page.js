import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Privacy Policy</h1>
            <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2>Privacy Policy</h2>
              <p style={{ marginBottom: '20px' }}>Last updated: {new Date().toLocaleDateString()}</p>

              <div style={{ display: 'grid', gap: '30px' }}>
                <section>
                  <h3>1. Introduction</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </section>

                <section>
                  <h3>2. Information We Collect</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur:</p>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor</li>
                    <li>Ut labore et dolore magna</li>
                  </ul>
                </section>

                <section>
                  <h3>3. How We Use Information</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation:</p>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Duis aute irure dolor in reprehenderit</li>
                    <li>Excepteur sint occaecat cupidatat</li>
                    <li>Sunt in culpa qui officia deserunt</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                  </ul>
                </section>

                <section>
                  <h3>4. Information Sharing</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </section>

                <section>
                  <h3>5. Data Security</h3>
                  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                </section>

                <section>
                  <h3>6. Your Rights</h3>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li>At vero eos et accusamus et iusto</li>
                    <li>Nam libero tempore, cum soluta</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut</li>
                  </ul>
                </section>

                <section>
                  <h3>7. Contact Us</h3>
                  <p style={{ marginBottom: '10px' }}>For questions about this Privacy Policy, please contact us at:</p>
                  <p>
                    Email: <a href="mailto:privacy@lorem.com" style={{ color: 'var(--primary-color)' }}>privacy@lorem.com</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
