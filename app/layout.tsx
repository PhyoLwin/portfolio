import './globals.css';
import './TextWrapper.css';
import './whyLomTech.css';
import { Language, languages } from '@/lib/i18n/settings';
import localFont from 'next/font/local';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const spoqaFont = localFont({
  src: [
    {
      path: '../public/fonts/SpoqaHanSansNeo-Regular.otf',
      weight: '400',
    },
    {
      path: '../public/fonts/SpoqaHanSansNeo-Bold.otf',
      weight: '700',
    },
    {
      path: '../public/fonts/SpoqaHanSansNeo-Light.otf',
      weight: '300',
    },
    {
      path: '../public/fonts/SpoqaHanSansNeo-Medium.otf',
      weight: '500',
    },
    {
      path: '../public/fonts/SpoqaHanSansNeo-Bold.otf',
      weight: '900',
    },
    { path: '../public/fonts/SpoqaHanSansNeo-Thin.otf', weight: '200' },
  ],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: Language }>;
}>) {
  const { lng } = await params;

  return (
    <html lang={lng}>
      <body className={`${spoqaFont.className} antialiased`}>{children}</body>
    </html>
  );
}
