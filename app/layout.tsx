// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
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
    default: 'Rigveda Ads — Google Ads & Performance Marketing Agency India',
    template: '%s | Rigveda Ads',
  },
  description:
    'Rigveda Ads is a certified Google Ads & performance marketing agency in India. We specialise in PPC, SEO, social media ads, brand bidding and international campaigns that deliver measurable ROI.',
  keywords: [
    'Google Ads agency India',
    'performance marketing agency',
    'PPC management India',
    'SEO services India',
    'Facebook ads agency',
    'brand bidding Google Ads',
    'digital marketing agency Delhi',
    'paid advertising agency',
    'Google certified partner India',
    'ROI focused digital marketing',
  ],
  authors: [{ name: 'Rigveda Ads', url: 'https://rigvedaadds.com' }],
  creator: 'Rigveda Ads',
  publisher: 'Rigveda Ads',
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
    locale: 'en_IN',
    url: 'https://rigvedaadds.com',
    siteName: 'Rigveda Ads',
    title: 'Rigveda Ads — Google Ads & Performance Marketing Agency',
    description:
      'Certified Google Ads agency delivering data-driven PPC, SEO, social media and performance marketing campaigns with proven ROI across all industries in India and internationally.',
    images: [
      {
        url: 'https://rigvedaadds.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rigveda Ads — Performance Marketing Agency India',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rigvedaadds',
    creator: '@rigvedaadds',
    title: 'Rigveda Ads — Google Ads & Performance Marketing Agency',
    description:
      'Certified Google Ads agency delivering data-driven PPC, SEO, and performance marketing with proven ROI.',
    images: ['https://rigvedaadds.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rigvedaadds.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  // ✅ theme-color Next.js Metadata API se — body mein <meta> ki zarurat nahi
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#0B0B0F' },
    { media: '(prefers-color-scheme: light)', color: '#F2F2F7' },
  ],
  category: 'Digital Marketing',
  metadataBase: new URL('https://rigvedaadds.com'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://rigvedaadds.com/#organization',
      name: 'Rigveda Ads Agency Pvt. Ltd.',
      url: 'https://rigvedaadds.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rigvedaadds.com/logo.png',
        width: 200,
        height: 60,
      },
      description:
        'Certified Google Ads & performance marketing agency providing PPC, SEO, social media advertising and international campaigns for businesses across India.',
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
          telephone: '+91-7840000618',
          contactType: 'customer service',
          email: 'info@rigvedaadds.com',
          availableLanguage: ['English', 'Hindi'],
          areaServed: 'IN',
        },
      ],
      sameAs: [
        'https://www.facebook.com/rigvedaadds',
        'https://www.instagram.com/rigvedaadds',
        'https://www.linkedin.com/company/rigvedaadds',
        'https://twitter.com/rigvedaadds',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://rigvedaadds.com/#localbusiness',
      name: 'Rigveda Ads Agency Pvt. Ltd.',
      url: 'https://rigvedaadds.com',
      image: 'https://rigvedaadds.com/og-image.jpg',
      priceRange: '₹₹',
      telephone: '+91-7840000618',
      email: 'info@rigvedaadds.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'D-7/296, 2nd Floor, Sector-6, Rohini',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110086',
        addressCountry: 'IN',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://rigvedaadds.com/#service',
      name: 'Google Ads & Performance Marketing',
      provider: { '@id': 'https://rigvedaadds.com/#organization' },
      serviceType: 'Digital Marketing Agency',
      areaServed: { '@type': 'Country', name: 'India' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads (PPC) Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook & Instagram Advertising' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Bidding Campaigns' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Campaigns' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://rigvedaadds.com/#website',
      url: 'https://rigvedaadds.com',
      name: 'Rigveda Ads',
      publisher: { '@id': 'https://rigvedaadds.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://rigvedaadds.com/search?q={search_term_string}',
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
      // ✅ NO hardcoded "dark" class here — ThemeProvider inject karega
      className={`${inter.variable} ${syne.variable}`}
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
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          try {
            var stored = localStorage.getItem('rigveda-theme');
            var theme = stored || 'dark';
            if (theme === 'system') {
              theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            document.documentElement.classList.add(theme);
            document.documentElement.setAttribute('data-theme', theme);
          } catch(e) {}
        })();
      `,
    }}
  />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`
          ${inter.variable} font-sans antialiased
          bg-white dark:bg-[#0B0B0F]
          text-gray-900 dark:text-white
        `}
      >
        <ThemeProvider
          attribute="class"       // ✅ adds/removes "dark" class on <html>
          defaultTheme="dark"     // ✅ dark by default on first visit
          enableSystem            // ✅ respects OS preference after first visit
          storageKey="rigveda-theme" // ✅ persists user's manual toggle in localStorage
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            theme="system"
            toastOptions={{
              classNames: {
                toast:
                  "dark:bg-[#13131A] dark:border-white/8 dark:text-white bg-white border-black/10 text-gray-900",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
