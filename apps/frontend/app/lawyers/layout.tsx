import { WhatAppButton } from '@/Components/Button/whatsappButton';

export const metadata = {
  title: 'Our Team',
  description:
    'We have a full team of lawyers to advocate you. Make an appointment now.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WhatAppButton contact="923066098329" />
        {children}
      </body>
    </html>
  );
}
