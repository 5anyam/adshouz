// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'arial'],  // ← yeh add karo
  preload: false,                     // ← yeh bhi
});

// Geometric sans that echoes the circular, even-stroke letterforms of the
// "Houz" in the logo. Used for headings via `font-display`.
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: 'Adshouz - Performance Marketing & Web Development Agency India',
    template: '%s | Adshouz',
  },
  icons: {
    icon: [
      { url: '/adshouz-logo.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico',      sizes: 'any' },
    ],
    apple: '/adshouz-logo.jpg',
    shortcut: '/adshouz-logo.jpg',
  },
  description:
    'Adshouz is a Meta & Google certified performance marketing agency in India. We specialise in Google Ads, SEO, social media ads, affiliate marketing, website development and international campaigns that deliver measurable ROI.',
  keywords: [
    'Google Ads agency India',
    'performance marketing agency',
    'PPC management India',
    'SEO services India',
    'Facebook ads agency',
    'affiliate marketing agency India',
    'digital marketing agency Delhi',
    'website development agency India',
    'Meta Google certified partner India',
    'ROI focused digital marketing',
    'Adshouz',
  ],
  authors: [{ name: 'Adshouz', url: 'https://adshouz.com' }],
  creator: 'Adshouz',
  publisher: 'Adshouz',
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
    url: 'https://adshouz.com',
    siteName: 'Adshouz',
    title: 'Adshouz — Performance Marketing & Web Development Agency',
    description:
      'Meta & Google certified agency delivering data-driven PPC, SEO, social media, website development and performance marketing campaigns with proven ROI across India and international markets.',
    images: [
      {
        url: 'https://adshouz.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adshouz — Performance Marketing Agency India',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adshouz',
    creator: '@adshouz',
    title: 'Adshouz — Performance Marketing & Web Development Agency',
    description:
      'Meta & Google certified agency delivering data-driven PPC, SEO, web development and performance marketing with proven ROI.',
    images: ['https://adshouz.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://adshouz.com',
  },
  verification: {
    google: 'your-google-verification-code', // 🔁 replace karo
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#030E1C' },
    { media: '(prefers-color-scheme: light)', color: '#F2F2F7' },
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
      name: 'Adshouz',
      url: 'https://adshouz.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adshouz.com/adshouz-logo.jpg',
        width: 200,
        height: 60,
      },
      description:
        'Meta & Google certified performance marketing and web development agency providing PPC, SEO, social media advertising, website development and international campaigns for businesses across India and globally.',
      foundingDate: '2018',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-8588837072',
          contactType: 'customer service',
          email: 'contact@adshouz.com',
          availableLanguage: ['English', 'Hindi'],
          areaServed: ['IN', 'US', 'GB', 'AE'],
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
      '@type': 'LocalBusiness',
      '@id': 'https://adshouz.com/#localbusiness',
      name: 'Adshouz',
      url: 'https://adshouz.com',
      image: 'https://adshouz.com/og-image.jpg',
      priceRange: '₹₹',
      telephone: '+91-8588837072',
      email: 'contact@adshouz.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
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
      '@id': 'https://adshouz.com/#service',
      name: 'Performance Marketing & Web Development',
      provider: { '@id': 'https://adshouz.com/#organization' },
      serviceType: 'Digital Marketing & Web Development Agency',
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing & Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads (PPC) Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook & Instagram Advertising' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Affiliate Marketing (CPS / CPL / CPI)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Campaigns' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adshouz.com/#website',
      url: 'https://adshouz.com',
      name: 'Adshouz',
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
      className={`${inter.variable} ${poppins.variable}`}
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
                  var stored = localStorage.getItem('adshouz-theme');
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
          bg-white dark:bg-[#030E1C]
          text-gray-900 dark:text-white
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="adshouz-theme"
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
                  "dark:bg-[#071828] dark:border-white/8 dark:text-white bg-white border-black/10 text-gray-900",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
