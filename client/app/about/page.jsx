import PageHero from '@/components/PageHero';
import JoinBand from '@/components/JoinBand';
import { About, Why } from '@/components/Sections';

export const metadata = { title: 'About | JOP Foundation' };

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="WHO WE ARE" title="A foundation built" accent="around becoming." text="Why JOP Foundation exists, and what we believe about potential, direction and development." />
      <About /><Why /><JoinBand />
    </main>
  );
}
