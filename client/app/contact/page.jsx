import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact | JOP Foundation' };

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="CONTACT" title="Start a" accent="conversation." text="Young person, mentor, educator, professional, creator, organisation or partner — we want to hear from you." />
      <section className="section section-light contact-section">
        <div className="container contact-grid">
          <div className="reveal">
            <h2>Say hello.</h2>
            <p className="lead">We read every message and reply personally.</p>
            <ul className="contact-list">
              <li><small>EMAIL</small><a href="mailto:hello@jopfoundation.org">hello@jopfoundation.org</a></li>
              <li><small>INSTAGRAM</small><a href="https://www.instagram.com/jop.foundation/" target="_blank" rel="noopener">@jop.foundation</a></li>
              <li><small>BASED IN</small><span>Nigeria · Africa</span></li>
            </ul>
          </div>
          <div className="reveal reveal-delay"><ContactForm /></div>
        </div>
      </section>
    </main>
  );
}
