import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Navbar';
import { getTranslation } from '@/lib/i18n';
import { Language } from '@/lib/i18n/settings';
import { ReactNode } from 'react';

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lng: Language }>;
}>) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, 'common');

  return (
    <>
      <NavBar lng={lng} />
      {children}
      <Footer t={t} />
    </>
  );
}
