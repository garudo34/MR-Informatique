import './globals.css'
import type { Metadata } from 'next'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://mr-informatique.fr'),

  title: {
    default:
      'Dépannage informatique à Bruay-la-Buissière (62700) – MR Informatique',
    template: '%s | MR Informatique',
  },

  description:
    'Mr informatique, votre spécialiste de la maintenance, formation et montage de pc sur mesure aux alentours de Bruay-la-Buissière!',

  keywords: [
    'dépannage informatique',
    'réparation pc',
    'technicien informatique à domicile',
    'maintenance informatique',
    'montage pc',
    'formation',
  ],

  openGraph: {
    title:
      'MR Informatique | Réparation - Maintenance - Formation - Montage sur mesure',
    description:
      'Mr informatique, votre spécialiste de la maintenance, formation et montage de pc sur mesure aux alentours de Bruay la buissière!',
    url: 'https://mr-informatique.fr',
    siteName: 'MR Informatique',
    locale: 'fr_FR',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} `}>
      <body className="bg-gray-50 text-gray-800 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'ComputerRepair',
                  '@id': 'https://mr-informatique.fr',
                  name: 'MR Informatique',
                  image: 'https://mr-informatique.fr/logo.png',
                  url: 'https://mr-informatique.fr',
                  telephone: '+33626148111',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Bruay-la-Buissière',
                    postalCode: '62700',
                    addressRegion: 'Hauts-de-France',
                    addressCountry: 'FR',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '50.4833',
                    longitude: '2.5500',
                  },
                  areaServed: {
                    '@type': 'AdministrativeArea',
                    name: 'Rayon de 30 km autour de Bruay-la-Buissière',
                  },
                  description:
                    'Dépannage et réparation informatique à domicile à Bruay-la-Buissière et dans un rayon de 30 km. Intervention rapide pour PC & Mac, particuliers et professionnels.',
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                      ],
                      opens: '08:00',
                      closes: '23:00',
                    },
                  ],
                  sameAs: [
                    'https://www.facebook.com/mr.informatique.entreprise/',
                    'https://www.instagram.com/mr.informatique?igshid=vrzyxgjb5ku2',
                    'https://www.twitch.tv/mr_informatique',
                    'https://www.linkedin.com/company/mr-informatique/',
                    'https://www.pagesjaunes.fr/pros/60729491',
                  ],
                }),
              }}
            />
            {children}
          </main>
          <Footer />
        </div>

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
