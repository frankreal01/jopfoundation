import PageHero from '@/components/PageHero';
import JoinBand from '@/components/JoinBand';
import { Journal } from '@/components/Sections';

export const metadata = { title: 'Journal | JOP Foundation' };

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="FROM THE JOURNAL" title="Ideas worth" accent="becoming." text="Short reflections on identity, intentionality and professionalism." />
      <Journal /><JoinBand />
    </main>
  );
}
