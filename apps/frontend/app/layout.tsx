import { NextAuthProvider } from '@/providers/AuthProvider';
import './global.scss';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';

export const metadata = {
  title: 'Welcome to chishti law firm.',
  description:
    'Your personal legal advisors, Contact now to book an appointment.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-white.png',
        href: '/favicon-white.png',
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <NextAuthProvider session={session}>
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
