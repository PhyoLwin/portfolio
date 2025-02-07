import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LOMTech',
  description:
    'LomTech - Leading Technology Solutions for Your Business Growth. We specialize in innovative IT services and customized tech solutions.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'LomTech - Leading Technology Solutions',
    description:
      'Explore how LomTech provides cutting-edge tech solutions tailored to your business needs. From software development to IT services, we help businesses grow.',
    url: 'https://new-fe.lomtech.net/',
    type: 'website',
    images: [
      {
        url: 'https://new-fe.lomtech.net/static/media/logo.8089a53b183884681218.png',
        alt: 'LomTech Logo',
      },
    ],
    // site_name: 'LomTech',
    locale: 'en_US',
  },
  // additionalMetaTags: [
  //   { name: 'robots', content: 'index, follow' },
  //   { name: 'keywords', content: 'LomTech, technology solutions, IT services, business growth, innovation, tech solutions, software development, IT consultations, Korean IT company, Asia IT company' },
  //   { name: 'author', content: 'LomTech' },
  //   {
  //     type: 'application/ld+json',
  //     content: JSON.stringify({
  //       "@context": "https://schema.org",
  //       "@type": "Organization",
  //       "name": "LomTech",
  //       "url": "https://new-fe.lomtech.net/",
  //       "logo": "https://new-fe.lomtech.net/static/media/logo.8089a53b183884681218.png",
  //       "sameAs": [
  //         "https://www.facebook.com/LomTech",
  //         "https://www.linkedin.com/company/lomtech",
  //         "https://www.linkedin.com/company/lom-tech-global/posts/?feedView=all"
  //       ],
  //       "contactPoint": {
  //         "@type": "ContactPoint",
  //         "telephone": "+82-02-336-6777",
  //         "contactType": "Customer Service",
  //         "areaServed": "Worldwide",
  //         "availableLanguage": "English,Korean"
  //       }
  //     })
  //   },
  // ]
};
