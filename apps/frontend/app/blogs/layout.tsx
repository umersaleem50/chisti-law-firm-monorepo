import { WhatAppButton } from '@/Components/Button/whatsappButton';

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
        {children}
        <WhatAppButton contact="923066098329" />
      </body>
      {/* </NextAuthProvider> */}
    </html>
  );
}

export const metadata = {
  title: 'Latest Blogs',
  description: 'Read the blogs to gain the knowledge about the legal cases.',
};
