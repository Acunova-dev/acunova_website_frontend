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
            <h1 className="hero-title">Intelligent Solutions for Real-World Challenges</h1>
            <p className="hero-subtitle">We develop cutting-edge AI, IoT, and embedded systems to transform your business.</p>
            <div>
              <a href="/contact" className="button">Request Consultation</a>
              <a href="/services" className="button secondary" style={{ marginLeft: '20px' }}>Our Services</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Solutions</h2>
            <div className="grid">
              <div className="card">
                <h3>Custom AI Applications</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
              <div className="card">
                <h3>IoT Systems</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </div>
              <div className="card">
                <h3>Embedded Systems</h3>
                <p>Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Ornare arcu dui vivamus arcu felis bibendum ut tristique et.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--light-gray)' }}>
          <div className="container">
            <h2 className="section-title">Industries We Serve</h2>
            <div className="grid">
              <div className="card">
                <h3>Manufacturing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus justo, ut fringilla felis euismod a.</p>
              </div>
              <div className="card">
                <h3>Agriculture</h3>
                <p>Nullam sit amet nisi condimentum erat iaculis auctor. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque.</p>
              </div>
              <div className="card">
                <h3>Mining</h3>
                <p>Fusce ut placerat orci nulla pellentesque dignissim. Praesent vitae metus at neque cursus finibus. Duis mollis, est non commodo luctus.</p>
              </div>
              <div className="card">
                <h3>Energy & Utilities</h3>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

