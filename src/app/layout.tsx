import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AIChE NIT Rourkela | Executive Team & Student Chapter Directory',
  description:
    'Official Executive Team Directory for the AIChE NIT Rourkela Student Chapter. Meet the students leading our chapter through technical innovation, Chem-E-Car research, events, and community outreach.',
  keywords: [
    'AIChE',
    'NIT Rourkela',
    'Chemical Engineering',
    'Student Chapter',
    'Executive Team',
    'Chem-E-Car',
    'STEM Outreach',
  ],
  authors: [{ name: 'AIChE NIT Rourkela' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans flex flex-col antialiased selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
