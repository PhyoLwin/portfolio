import { TranslateFunction } from '@/lib/i18n';
import Image from 'next/image';
import { FC } from 'react';
import Logo from '@/public/images/logo.png';
import Link from 'next/link';

export const Footer: FC<{
  t: TranslateFunction;
}> = ({ t }) => {
  return (
    <div
      id="contact"
      className="flex w-full flex-col gap-5 bg-[#0d3388] p-5 md:flex-row md:items-center md:justify-between md:gap-0"
    >
      <div className="flex flex-col md:w-full md:flex-row md:items-center md:justify-between">
        <div className="mb-4 flex flex-col items-start text-left md:mb-0">
          <Image
            src={Logo}
            alt="Logo"
            className="mb-4 h-auto w-[200px] md:mb-0"
          />
        </div>

        <div className="flex-1 text-left md:text-center">
          <div className="font-nats mb-2.5 text-4xl leading-[40px] text-white">
            <p className="font-bold">{t('footer.slogan')}</p>
          </div>
        </div>

        <div className="text-left text-sm leading-10 text-white md:text-right md:leading-5">
          <Link href="tel:+1234567890" className="hover:text-[#0395f8]">
            {t('footer.tel')}
          </Link>
          <br />
          <Link href="fax:+1234567891" className="hover:text-[#0395f8]">
            {t('footer.fax')}
          </Link>
          <br />
          {t('footer.business_registration')}
          <br />
          <Link
            href="mailto:hello@lomtech.net"
            className="hover:text-[#0395f8]"
          >
            hello@lomtech.net
          </Link>
          <br />
          <Link
            href="mailto:hello@lomtech.net"
            className="hover:text-[#0395f8]"
          >
            {t('footer.address')}
          </Link>
          <br />
          &#169; 2024{' '}
          <Link
            href="mailto:hello@lomtech.net"
            className="hover:text-[#0395f8]"
          >
            new-fe.lomtech.net
          </Link>
          , Inc. {t('footer.rights_reserved')}
        </div>
      </div>
    </div>
  );
};
