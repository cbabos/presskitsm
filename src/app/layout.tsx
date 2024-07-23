import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import InnerLayout from './InnerLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PressKit SM Home',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  );
}
