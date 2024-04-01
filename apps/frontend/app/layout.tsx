import { WhatAppButton } from '@/Components/Button/whatsappButton';
import './global.scss';

export const metadata = {
  title: 'Welcome to chishti law firm.',
  description:
    'Chishti Law Firm is your trusted partner in the pursuit of justice. Our dedicated team of experienced lawyers is here to help you navigate the legal landscape. Your concerns are ours to address, and your success is our mission.',
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
  // const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      {/* <NextAuthProvider session={session}> */}
      <body>
        <WhatAppButton contact="923066098329" />
        {children}
      </body>
      {/* </NextAuthProvider> */}
    </html>
  );
}
