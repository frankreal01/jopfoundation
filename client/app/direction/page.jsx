import PageHero from '@/components/PageHero';
import JoinBand from '@/components/JoinBand';
import { Direction } from '@/components/Sections';

export const metadata = { title: 'Our Direction | JOP Foundation' };

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="OUR DIRECTION" title="A clear direction for" accent="meaningful work." text="Our mission, vision and values." />
      <Direction /><JoinBand />
    </main>
  );
}
