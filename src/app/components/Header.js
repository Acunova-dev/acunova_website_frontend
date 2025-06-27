'use client';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="/" className="logo">xxxxxx</a>
        <nav>
          <button className="mobile-menu-button" aria-label="Toggle menu">☰</button>
          <ul className="nav-menu">
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/services" className="nav-link">Services</a></li>
            <li><a href="/technologies" className="nav-link">Technologies</a></li>
            <li><a href="/industries" className="nav-link">Industries</a></li>
            <li><a href="/blog" className="nav-link">Blog</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
