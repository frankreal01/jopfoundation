import { SignIn } from '@clerk/nextjs';
import AuthShell from '@/components/AuthShell';

export const metadata = { title: 'Sign in | JOP Foundation' };

export default function Page() {
  return (
    <AuthShell eyebrow="WELCOME BACK" title="Continue becoming" accent="with intention." text="Sign in to your JOP Foundation dashboard.">
      <SignIn />
    </AuthShell>
  );
}
