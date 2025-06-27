import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Terms & Conditions</h1>
            <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2>Terms and Conditions</h2>
              <p style={{ marginBottom: '20px' }}>Last updated: {new Date().toLocaleDateString()}</p>

              <div style={{ display: 'grid', gap: '30px' }}>
                <section>
                  <h3>1. Agreement to Terms</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </section>

                <section>
                  <h3>2. Services</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </section>

                <section>
                  <h3>3. User Obligations</h3>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor incididunt</li>
                    <li>Ut labore et dolore magna aliqua</li>
                  </ul>
                </section>

                <section>
                  <h3>4. Intellectual Property</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </section>

                <section>
                  <h3>5. Limitation of Liability</h3>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>

                <section>
                  <h3>6. Termination</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>

                <section>
                  <h3>7. Changes to Terms</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                </section>

                <section>
                  <h3>8. Governing Law</h3>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                </section>

                <section>
                  <h3>9. Contact Information</h3>
                  <p>For any questions about these Terms and Conditions, please contact us at:</p>
                  <p style={{ marginTop: '10px' }}>
                    Email: <a href="mailto:legal@lorem.com" style={{ color: 'var(--primary-color)' }}>legal@lorem.com</a>
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
