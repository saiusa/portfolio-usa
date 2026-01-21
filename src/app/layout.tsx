import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sai - UI/UX Designer Portfolio',
  description: 'A UI/UX designer passionate about turning user problems into simple, meaningful digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
