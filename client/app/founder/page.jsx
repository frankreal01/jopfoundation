import PageHero from '@/components/PageHero';
import JoinBand from '@/components/JoinBand';
import { Founder } from '@/components/Sections';

export const metadata = { title: 'Founder | JOP Foundation' };

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="THE FOUNDER" title="The person" accent="behind the purpose." />
      <Founder /><JoinBand />
    </main>
  );
}
