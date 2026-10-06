import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand footer-brand-link" href="/">
            <span className="brand-mark" aria-hidden="true">
              <img src="/images/logo-white.png" alt="JOP Foundation Logo" className="brand-logo" />
            </span>
            <span className="brand-name">
              <strong>JOP</strong>
              <span>FOUNDATION</span>
            </span>
          </Link>
          <p>Developing purposeful people through identity, intentionality and professionalism.</p>
          <span className="footer-location">NIGERIA · AFRICA</span>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer-list">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/philosophy">Philosophy</Link></li>
            <li><Link href="/direction">Our Direction</Link></li>
            <li><Link href="/programs">Focus Areas</Link></li>
            <li><Link href="/founder">Founder</Link></li>
            <li><Link href="/journal">Journal</Link></li>
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <ul className="footer-list">
            <li><Link href="/sign-up">Join the Foundation</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><a href="https://www.facebook.com/jop.foundation" target="_blank" rel="noopener" aria-label="JOP Foundation on Facebook">Facebook</a></li>
            <li><a href="https://www.instagram.com/jop.foundation/" target="_blank" rel="noopener" aria-label="JOP Foundation on Instagram">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@jop.foundation" target="_blank" rel="noopener" aria-label="JOP Foundation on TikTok">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} JOP Foundation. Built with purpose.</p>
        <span>IDENTITY · INTENTIONALITY · PROFESSIONALISM</span>
      </div>
    </footer>
  );
}
