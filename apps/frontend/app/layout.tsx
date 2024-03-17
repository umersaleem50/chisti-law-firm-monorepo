import { NextAuthProvider } from '@/providers/AuthProvider';
import './global.scss';

export const metadata = {
  title: 'Welcome to chishti law firm.',
  description:
    'Your personal legal advisors, Contact now to book an appointment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
