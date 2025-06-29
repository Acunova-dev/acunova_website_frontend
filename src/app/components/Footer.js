export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Acunova</h3>
            <p>Transforming industries through intelligent technology solutions.</p>
          </div>
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/technologies" className="footer-link">Technologies</a></li>
              <li><a href="/industries" className="footer-link">Industries</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li>
                <a href="tel:+263774938581" className="footer-link">+263 77 493 8581</a>
                <a href="tel:+263783857780" className="footer-link">+263 78 385 7780</a>
                </li>
              <li><a href="mailto:acunovapvtltd@gmail.com" className="footer-link">acunovapvtltd@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Acunova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
