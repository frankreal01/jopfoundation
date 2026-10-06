'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/philosophy', 'Philosophy'],
  ['/direction', 'Our Direction'],
  ['/programs', 'Focus Areas'],
  ['/founder', 'Founder'],
  ['/journal', 'Journal'],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // header state + scroll progress
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // reveal-on-scroll, re-armed on every page change
  useEffect(() => {
    setOpen(false);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
  }, [open]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" style={{ width: `${progress}%` }} />
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="site-header">
        <nav className="navbar container" aria-label="Primary navigation">
          <Link className="brand" href="/" aria-label="JOP Foundation home">
            <span className="brand-mark" aria-hidden="true">
              <img src="/images/logo-white.png" alt="JOP Foundation Logo" className="brand-logo" />
            </span>
            <span className="brand-name">
              <strong>JOP</strong>
              <span>FOUNDATION</span>
            </span>
          </Link>

          <button
            className={`menu-toggle ${open ? 'open' : ''}`}
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
          </button>

          <div className={`nav-panel ${open ? 'open' : ''}`}>
            <ul className="nav-links">
              {links.map(([href, label]) => (
                <li key={href}>
                  <Link
                    className={`nav-link ${pathname === href ? 'active' : ''}`}
                    href={href}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-account">
              <SignedOut>
                <Link className="nav-link" href="/sign-in" onClick={() => setOpen(false)}>
                  Sign in
                </Link>
                <Link className="nav-cta" href="/sign-up" onClick={() => setOpen(false)}>
                  Join <span>↗</span>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link className="nav-cta" href="/dashboard" onClick={() => setOpen(false)}>
                  Dashboard <span>↗</span>
                </Link>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
