import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function JoinBand() {
  return (
    <section className="cta-section" id="join">
      <div className="container cta-inner reveal">
        <p className="eyebrow"><span className="eyebrow-line"></span> JOIN THE JOURNEY</p>
        <h2>
          The work of becoming
          <span>is better together.</span>
        </h2>
        <p>
          JOP Foundation is being built deliberately. If you are a young person, mentor, educator,
          professional, creator, organisation or potential partner interested in purposeful
          development, we want to hear from you.
        </p>
        <div className="cta-actions">
          <SignedOut>
            <Link className="button button-light" href="/sign-up">Join the Foundation <span>↗</span></Link>
          </SignedOut>
          <SignedIn>
            <Link className="button button-light" href="/dashboard">Open your dashboard <span>↗</span></Link>
          </SignedIn>
          <Link className="button button-outline-light" href="/contact">Start a Conversation</Link>
        </div>
        <div className="cta-signature">
          <span>IDENTITY</span><i>•</i><span>INTENTIONALITY</span><i>•</i><span>PROFESSIONALISM</span>
        </div>
      </div>
    </section>
  );
}
