// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AdsHouz Digital — Global Performance Marketing Agency',
    template: '%s | AdsHouz Digital',
  },
  description:
    'AdsHouz Digital is a global performance marketing agency specialising in Google Ads, SEO, social media advertising, brand bidding and international campaigns that deliver measurable ROI for premium brands worldwide.',
  keywords: [
    'Google Ads agency',
    'performance marketing agency',
    'PPC management agency',
    'SEO services',
    'Facebook ads agency',
    'brand bidding Google Ads',
    'digital marketing agency',
    'paid advertising agency',
    'international digital marketing',
    'ROI focused digital marketing',
    'Google Ads agency UK',
    'Google Ads agency UAE',
    'performance marketing agency USA',
  ],
  authors: [{ name: 'AdsHouz Digital', url: 'https://adshouz.com' }],
  creator: 'AdsHouz Digital',
  publisher: 'AdsHouz Digital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://adshouz.com',
    siteName: 'AdsHouz Digital',
    title: 'AdsHouz Digital — Global Performance Marketing Agency',
    description:
      'Global performance marketing agency delivering data-driven Google Ads, SEO, social media and international campaigns with proven ROI for premium brands in US, UK, UAE, Canada & Singapore.',
    images: [
      {
        url: 'https://adshouz.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AdsHouz Digital — Global Performance Marketing Agency',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adshouz',
    creator: '@adshouz',
    title: 'AdsHouz Digital — Global Performance Marketing Agency',
    description:
      'Global performance marketing agency delivering data-driven Google Ads, SEO and paid campaigns with proven ROI worldwide.',
    images: ['https://adshouz.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://adshouz.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#0A0A0A' },
  ],
  category: 'Digital Marketing',
  metadataBase: new URL('https://adshouz.com'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://adshouz.com/#organization',
      name: 'AdsHouz Digital',
      url: 'https://adshouz.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adshouz.com/logo.png',
        width: 200,
        height: 60,
      },
      description:
        'Global performance marketing agency providing Google Ads, SEO, social media advertising and international digital campaigns for premium brands in US, UK, UAE, Canada, Singapore and Australia.',
      foundingDate: '2016',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'D-7/296, 2nd Floor, Sector-6, Rohini',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110086',
        addressCountry: 'IN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-8588837072',
          contactType: 'customer service',
          email: 'info@adshouz.com',
          availableLanguage: ['English', 'Hindi'],
          areaServed: ['IN', 'GB', 'US', 'AE', 'CA', 'SG', 'AU'],
        },
      ],
      sameAs: [
        'https://www.facebook.com/adshouz',
        'https://www.instagram.com/adshouz',
        'https://www.linkedin.com/company/adshouz',
        'https://twitter.com/adshouz',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://adshouz.com/#service',
      name: 'Global Google Ads & Performance Marketing',
      provider: { '@id': 'https://adshouz.com/#organization' },
      serviceType: 'Digital Marketing Agency',
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Singapore' },
        { '@type': 'Country', name: 'Australia' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Performance Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads (PPC) Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook & Instagram Advertising' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Bidding Campaigns' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Campaigns' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics & Reporting' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adshouz.com/#website',
      url: 'https://adshouz.com',
      name: 'AdsHouz Digital',
      publisher: { '@id': 'https://adshouz.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://adshouz.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0A0A0A] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          theme="dark"
          toastOptions={{
            classNames: {
              toast: "bg-[#141414] border-white/[0.08] text-white",
            },
          }}
        />
      </body>
    </html>
  );
}