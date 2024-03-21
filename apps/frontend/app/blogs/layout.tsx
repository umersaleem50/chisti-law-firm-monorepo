import { NextAuthProvider } from '@/providers/AuthProvider';
import { authOptions } from '@/utils/auth';
import { getServerSession } from 'next-auth';

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

export const metadata = {
  title: 'Latest Blogs',
  description: 'Read the blogs to gain the knowledge about the legal cases.',
};
