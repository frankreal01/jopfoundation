import PageHero from '@/components/PageHero';
import JoinBand from '@/components/JoinBand';
import { Programs, Approach } from '@/components/Sections';

export const metadata = { title: 'Focus Areas | JOP Foundation' };

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="FOCUS AREAS" title="Where the philosophy" accent="becomes practice." text="The practical initiatives and the approach that move young people from potential to contribution." />
      <Programs /><Approach /><JoinBand />
    </main>
  );
}
