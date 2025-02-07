import oktaImage from '@/public/images/partner/okta.jpg';
import LinusImage from '@/public/images/partner/logo.svg';
import hkgreenImage from '@/public/images/partner/hk-green.png';
import koreansocietyMalay from '@/public/images/partner/korean_society_in_malaysia.png';
import mktechImage from '@/public/images/partner/mktech.png';
import msImage from '@/public/images/partner/ms.png';
import nachargerImage from '@/public/images/partner/nacharger.png';
import { TranslateFunction } from '@/lib/i18n';
import { FC } from 'react';
import Image from 'next/image';

interface Props {
  t: TranslateFunction;
}

export const Partners: FC<Props> = ({ t }) => {
  const partners = [
    {
      name: 'logo',
      desktopImg: LinusImage,
    },
    {
      name: 'nacharger',
      desktopImg: nachargerImage,
    },
    {
      name: 'ms',
      desktopImg: msImage,
    },
    {
      name: 'koreansocietyMalay',
      desktopImg: koreansocietyMalay,
    },
    {
      name: 'hkgreen',
      desktopImg: hkgreenImage,
    },
    {
      name: 'okta',
      desktopImg: oktaImage,
    },
    {
      name: 'mktech',
      desktopImg: mktechImage,
    },
  ];

  return (
    <div
      id="partners"
      className="bg-white py-32 text-center text-gray-600 md:py-28"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold leading-snug tracking-tight md:text-5xl">
          {t('partners.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 md:text-2xl">
          {t('partners.description')}
        </p>
        <div className="partners-list mt-12 flex flex-wrap justify-center gap-8">
          {partners.slice(0, 4).map((partner, index) => (
            <div
              key={index}
              className="partner-item flex w-1/5 flex-col items-center"
            >
              <div className="flex h-24 w-24 items-center justify-center sm:h-32 sm:w-32 md:h-40 md:w-40">
                <Image
                  className="max-h-full max-w-full"
                  src={partner.desktopImg}
                  alt={`Partner - ${t(`partners.partnerNames.${partner.name}`)}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="partners-list mt-12 flex flex-wrap justify-center gap-8">
          {partners.slice(4).map((partner, index) => (
            <div
              key={index}
              className="partner-item flex w-1/4 flex-col items-center"
            >
              <div className="flex h-24 w-24 items-center justify-center sm:h-32 sm:w-32 md:h-40 md:w-40">
                <Image
                  className="max-h-full max-w-full"
                  src={partner.desktopImg}
                  alt={`Partner - ${t(`partners.partnerNames.${partner.name}`)}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
