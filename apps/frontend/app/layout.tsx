import "./global.scss";

export const metadata = {
  title: "Welcome to chishti law firm.",
  description: "Generated by create-nx-workspace",
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
