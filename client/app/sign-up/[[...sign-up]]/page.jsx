import { SignUp } from '@clerk/nextjs';
import AuthShell from '@/components/AuthShell';

export const metadata = { title: 'Join | JOP Foundation' };

export default function Page() {
  return (
    <AuthShell eyebrow="JOIN THE FOUNDATION" title="Begin with who" accent="you are becoming." text="Create your member account to shape your direction and stay connected to the Foundation.">
      <SignUp />
    </AuthShell>
  );
}
