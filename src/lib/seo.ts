import { Metadata } from 'next';

const DEFAULT_TITLE = 'Emperor Smart Solution | Smart Digital Solutions';
const DEFAULT_DESCRIPTION = 'Emperor Smart Solution is a modern IT and digital solutions company providing web development, mobile application development, UI/UX design, custom software, AI solutions, and digital transformation.';
const SITE_URL = 'https://emperor.smartsolution.com'; // simulated domain

export function generatePageMetadata(
  title?: string,
  description?: string,
  path = '',
  keywords: string[] = []
): Metadata {
  const finalTitle = title || DEFAULT_TITLE;
  const finalDesc = description || DEFAULT_DESCRIPTION;
  const finalUrl = `${SITE_URL}${path}`;

  const baseKeywords = [
    'IT company',
    'web development',
    'mobile app development',
    'software development',
    'AI solutions',
    'e-commerce development',
    'UI/UX design',
    'cloud solutions',
    'SEO services',
    'digital transformation',
    'custom software development',
    ...keywords
  ];

  return {
    title: finalTitle,
    description: finalDesc,
    keywords: baseKeywords.join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: finalUrl,
    },
    openGraph: {
      title: finalTitle,
      description: finalDesc,
      url: finalUrl,
      siteName: 'Emperor Smart Solution',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDesc,
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
