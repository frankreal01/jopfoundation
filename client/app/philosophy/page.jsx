import PageHero from '@/components/PageHero';
import JoinBand from '@/components/JoinBand';
import FoundationArchitecture from '@/components/FoundationArchitecture';
import { Philosophy } from '@/components/Sections';

export const metadata = { title: 'Philosophy | JOP Foundation' };

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="OUR PHILOSOPHY" title="Three principles." accent="One direction." text="Identity, intentionality and professionalism — the architecture behind everything we do." />
      <Philosophy /><FoundationArchitecture /><JoinBand />
    </main>
  );
}
