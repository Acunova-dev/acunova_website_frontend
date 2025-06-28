'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

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
          <button className="mobile-menu-button" aria-label="Toggle menu">☰</button>
          <ul className="nav-menu">
            <li><Link href="/about" className={isActive('/about')}>About</Link></li>
            <li><Link href="/services" className={isActive('/services')}>Services</Link></li>
            <li><Link href="/technologies" className={isActive('/technologies')}>Technologies</Link></li>
            <li><Link href="/blog" className={isActive('/blog')}>Blog</Link></li>
            <li><Link href="/contact" className={isActive('/contact')}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
