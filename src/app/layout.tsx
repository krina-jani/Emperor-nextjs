import type { Metadata } from 'next';
import { Outfit, Inter, Caveat } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SmoothScroll from '../components/animations/SmoothScroll';
import { generatePageMetadata } from '../lib/seo';

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const caveat = Caveat({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = generatePageMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${caveat.variable}`}>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
