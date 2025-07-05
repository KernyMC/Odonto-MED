
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function generateSEO({
  title = 'ODONTOMED - Clínica Dental en Quito Ecuador | Implantes, Ortodoncia, Blanqueamiento',
  description = 'Clínica dental especializada en Quito. Implantes dentales, ortodoncia invisible, blanqueamiento, endodoncia. Tecnología avanzada y profesionales certificados. ¡Agenda tu cita!',
  keywords = [
    'dentista quito',
    'clínica dental ecuador',
    'implantes dentales quito',
    'ortodoncia invisible',
    'blanqueamiento dental',
    'endodoncia quito',
    'odontología estética',
    'dentista república del salvador'
  ],
  image = '/images/odontomed-og.jpg',
  url = 'https://odontomed.ec',
  type = 'website'
}: SEOProps = {}) {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'ODONTOMED' }],
    creator: 'ODONTOMED',
    publisher: 'ODONTOMED',
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
    openGraph: {
      type,
      locale: 'es_EC',
      url,
      title,
      description,
      siteName: 'ODONTOMED',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@odontomed_ec',
    },
    alternates: {
      canonical: url,
    },
    other: {
      'format-detection': 'telephone=yes',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
    },
  };
}

// JSON-LD Structured Data
export function generateDentistStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'ODONTOMED',
    description: 'Clínica dental especializada en implantes dentales, ortodoncia invisible y tratamientos estéticos en Quito, Ecuador.',
    url: 'https://odontomed.ec',
    telephone: '+593961794795',
    email: 'info@odontomed.ec',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. República del Salvador N34-366 y Moscú',
      addressLocality: 'Quito',
      addressRegion: 'Pichincha',
      postalCode: '170135',
      addressCountry: 'EC'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -0.1806532,
      longitude: -78.4883147
    },
    openingHours: [
      'Mo-Fr 08:00-19:00',
      'Sa 08:00-16:00'
    ],
    priceRange: '$$',
    image: 'https://odontomed.ec/images/clinica-exterior.jpg',
    logo: 'https://odontomed.ec/images/logo.png',
    sameAs: [
      'https://instagram.com/odontomed.ec',
      'https://facebook.com/odontomed.ec',
      'https://tiktok.com/@odontomed.ec'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios Dentales',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Implantes Dentales',
            description: 'Reemplazo de dientes perdidos con implantes de titanio de alta calidad'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ortodoncia Invisible',
            description: 'Alineadores transparentes para corregir la posición dental'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Blanqueamiento Dental',
            description: 'Tratamientos profesionales para blanquear los dientes'
          }
        }
      ]
    }
  };
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
