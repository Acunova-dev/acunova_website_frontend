import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Technologies() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Our Technologies</h1>
            <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid">
              <div className="card">
                <h2>Development Tools</h2>
                <ul style={{ listStyle: 'none', padding: '20px 0' }}>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Dolor Sit</h4>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Amet Consec</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2>Cloud Services</h2>
                <ul style={{ listStyle: 'none', padding: '20px 0' }}>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Ipsum Dolor</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Sit Amet</h4>
                    <p>Excepteur sint occaecat cupidatat non proident</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Consectetur</h4>
                    <p>Sunt in culpa qui officia deserunt mollit anim id</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid" style={{ marginTop: '40px' }}>
              <div className="card">
                <h2>Hardware Platforms</h2>
                <ul style={{ listStyle: 'none', padding: '20px 0' }}>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Dolor Amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Ipsum Sit</h4>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Consec Elit</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2>Programming Languages</h2>
                <ul style={{ listStyle: 'none', padding: '20px 0' }}>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Lorem Consec</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Amet Dolor</h4>
                    <p>Excepteur sint occaecat cupidatat non proident</p>
                  </li>
                  <li style={{ marginBottom: '15px' }}>
                    <h4>Sit Ipsum</h4>
                    <p>Sunt in culpa qui officia deserunt mollit anim id</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--light-gray)' }}>
          <div className="container">
            <h2 className="section-title">System Architecture</h2>
            <div className="grid">
              <div className="card" style={{ gridColumn: '1 / -1', maxWidth: '800px', margin: '0 auto' }}>
                <h3>Lorem Ipsum Architecture</h3>
                <p style={{ marginTop: '20px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Development Process</h2>
            <div className="grid">
              <div className="card">
                <h3>1. Planning</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="card">
                <h3>2. Development</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
              <div className="card">
                <h3>3. Testing</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
              </div>
              <div className="card">
                <h3>4. Deployment</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
