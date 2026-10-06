import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './style.css';
import './react-components.css';
import './premium.css';

export const metadata = {
  title: 'JOP Foundation | Identity. Intentionality. Professionalism.',
  description:
    'JOP Foundation — developing purposeful people through identity, intentionality and professionalism.',
};
export const viewport = { themeColor: '#071b49' };

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#165DFF',
          fontFamily: '"DM Sans", Arial, sans-serif',
          borderRadius: '2px',
        },
      }}
    >
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
