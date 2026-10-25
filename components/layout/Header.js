'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Tech Skills' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (pathname !== '/') return;

    const updateActiveSection = () => {
      const headerHeight = document.querySelector('header')?.offsetHeight ?? 56;
      let currentSection = 'home';
      for (const link of navLinks) {
        const id = link.href.split('#')[1];
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= headerHeight + 32) {
          currentSection = id;
        }
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        currentSection = 'contact';
      }
      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [pathname]);

  const isActive = (href) => pathname === '/' && href === `/#${activeSection}`;

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Branding */}
        <Link href="/#home" className={`${styles.brand} mono`} aria-label="Robbie Delia — Home">
          [ ROBBIE DELIA / CIT ]
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Primary navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                  aria-current={isActive(link.href) ? 'location' : undefined}
                >
                  {isActive(link.href) ? `[ ${link.label} ]` : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right controls */}
        <div className={styles.controls}>
          <ThemeToggle />
          <div className={styles.avatar} aria-label="Profile" role="img">
            <span className={`${styles.avatarInner} mono`}>RD</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={styles.menuIcon}>
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className={styles.mobileNav}
          aria-label="Mobile navigation"
        >
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.active : ''} mono`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link.href) ? 'location' : undefined}
                >
                  {isActive(link.href) ? `[ ${link.label} ]` : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

