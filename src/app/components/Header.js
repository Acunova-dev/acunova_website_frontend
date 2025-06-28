'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return 'nav-link active';
    if (path !== '/' && pathname.startsWith(path)) return 'nav-link active';
    return 'nav-link';
  };

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo">
          <div className="logo-container">
            <Image
              src="/acunova_logo.jpg"
              alt="Acunova Logo Symbol"
              width={70}
              height={70}
              className="logo-symbol"
            />
            <Image
              src="/acunova_logo_name.jpg"
              alt="Acunova Logo Text"
              width={130}
              height={70}
              className="logo-text"
            />
          </div>
        </Link>
        <nav>
          <button 
            className="mobile-menu-button" 
            aria-label="Toggle menu"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span style={{ transform: isMenuOpen ? 'rotate(45deg)' : 'none' }}>
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link href="/about" className={isActive('/about')} onClick={toggleMenu}>About</Link></li>
            <li><Link href="/services" className={isActive('/services')} onClick={toggleMenu}>Services</Link></li>
            <li><Link href="/technologies" className={isActive('/technologies')} onClick={toggleMenu}>Technologies</Link></li>
            <li><Link href="/blog" className={isActive('/blog')} onClick={toggleMenu}>Blog</Link></li>
            <li><Link href="/contact" className={isActive('/contact')} onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
