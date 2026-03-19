import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Pradip Basnet — AI/ML Practitioner',
  description:
    'Interactive AI portfolio of Pradip Basnet — Data Science student at Sunway College, Kathmandu. Specializing in Machine Learning, Python, and Data Analysis.',
  keywords: [
    'Pradip Basnet',
    'Portfolio',
    'AI',
    'Machine Learning',
    'Data Science',
    'Python',
    'Nepal',
    'Kathmandu',
    'Next.js',
    'Deep Learning',
  ],
  authors: [{ name: 'Pradip Basnet', url: 'https://github.com/pradipbanset' }],
  creator: 'Pradip Basnet',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Pradip Basnet — AI/ML Practitioner',
    description:
      'Interactive AI portfolio of Pradip Basnet Data Science student specializing in Machine Learning and AI.',
    siteName: 'Pradip Basnet Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pradip Basnet AI/ML Practitioner',
    description:
      'Interactive AI portfolio of Pradip Basnet — Data Science student specializing in Machine Learning and AI.',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}
      >
        <main className="flex min-h-screen flex-col">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}