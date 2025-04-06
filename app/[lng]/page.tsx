import { BgAnimation } from "@/components/BgAnimation";
import { getTranslation } from "@/lib/i18n";
import { Language } from "@/lib/i18n/settings";
import AboutMe from "@/components/AboutMe";
import { NavBar } from "@/components/Navbar";
import { metadata as meta } from "@/utils/Meta";
import Portfolio from "@/components/Portfolio";

export const metadata = meta;

export default async function Home({ params }: { params: { lng: Language } }) {
  // Await the language parameter first
  const lng = await Promise.resolve(params.lng);
  const { t } = await getTranslation(lng, "common");

  return (
    <div>
      <NavBar lng={lng} />
      <BgAnimation />
      <AboutMe lng={lng} />
      <Portfolio lng={lng} />
    </div>
  );
}
