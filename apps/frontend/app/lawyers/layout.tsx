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
      <body>{children}</body>
    </html>
  );
}
