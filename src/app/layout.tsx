import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SmoothScroll from '../components/animations/SmoothScroll';
import CustomCursor from '../components/ui/CustomCursor';
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

export const metadata: Metadata = generatePageMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main style={{ flexGrow: 1, paddingTop: 'var(--header-height)' }}>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
