export const metadata = {
  title: 'Our Services',
  description: 'We provide a wide range of legal services that may help you.',
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
