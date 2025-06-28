import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">About Acunova</h1>
            <p className="hero-subtitle">Pioneering the Future of Intelligent Technology Solutions</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="card">
                <h2>Who We Are</h2>
                <p>Acunova is an innovative technology solutions company positioned at the intersection of artificial intelligence, data analytics, and embedded systems. Founded as an innovation hub for intelligent technology solutions, we combine cutting-edge expertise with practical business acumen to deliver transformative results for our clients.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--light-gray)' }}>
          <div className="container">
            <div className="about-grid">
              <div className="card">
                <h2>Our Vision</h2>
                <p>To pioneer intelligent technologies that seamlessly enhance everyday life, creating a future where innovation empowers everyone.</p>
                <ul className="feature-list">
                  <li>Easy to use and intuitive</li>
                  <li>Personalized to user needs</li>
                  <li>Resource-optimized solutions</li>
                  <li>Adaptive and intelligent systems</li>
                </ul>
              </div>
              <div className="card">
                <h2>Our Mission</h2>
                <p>To transform businesses and lives through innovative AI, computing, and electronics solutions that deliver measurable value and drive sustainable growth for our customers.</p>
                <p>Our products are designed to be:</p>
                <ul className="feature-list">
                  <li>Smart and intelligent</li>
                  <li>Seamlessly integrated</li>
                  <li>Productivity-focused</li>
                  <li>Growth-oriented</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Story</h2>
            <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="card">
                <p>Acunova was born from the recognition that businesses face increasing challenges in navigating and implementing modern technological solutions. In a landscape where AI, data analytics, and embedded systems are rapidly evolving, we established ourselves as both an innovation laboratory and a trusted technology partner.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--light-gray)' }}>
          <div className="container">
            <h2 className="section-title">Core Values</h2>
            <div className="grid">
              <div className="card">
                <h3>Customer Focus</h3>
                <p>We put our customers first, understanding their needs and delivering solutions that exceed their expectations.</p>
              </div>
              <div className="card">
                <h3>Continuous Innovation</h3>
                <p>We stay at the forefront of technology, constantly exploring new possibilities and pushing boundaries.</p>
              </div>
              <div className="card">
                <h3>High Standards & Quality</h3>
                <p>We maintain exceptional quality in everything we do, from code to customer service.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
