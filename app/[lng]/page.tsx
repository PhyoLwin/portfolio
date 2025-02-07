import { BgAnimation } from '@/components/BgAnimation';
import { getTranslation } from '@/lib/i18n';
import { Language } from '@/lib/i18n/settings';
import { Partners } from '@/components/Partner';
import AboutMe from '@/components/AboutMe';
import { PortfolioLayout } from '@/components/Portfolio';
import { NavBar } from '@/components/Navbar';
import { metadata as meta } from '@/utils/Meta';

export const metadata = meta;

export default async function Home({
  params,
}: {
  params: { lng: Language };
}) {
  const { lng } = params; // Now lng is correctly extracted
  const { t } = await getTranslation(lng, 'common');

  return (
    <div>
      <NavBar lng={lng} />
      <BgAnimation />
      <AboutMe lng={lng} />
      <PortfolioLayout lng={lng} />
      <Partners t={t} />
    </div>
  );
}
