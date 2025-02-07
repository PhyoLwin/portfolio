'use client';

import { FC, useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ProjectInquiryButton } from './ProjectInquiryButton';
import { LanguageDropdown } from './LanguageDropdown';
import '@/app/NavBar.css';
import { Language } from '@/lib/i18n/settings';
import { useTranslation } from '@/lib/i18n/client';
import { CiMenuBurger } from 'react-icons/ci';

interface Props {
  lng: Language;
}

export const NavBar: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, 'common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleProjectInquiryClick = () => {
    router.push('/quotation');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isQuotationPage = pathname.endsWith('/quotation');

  //Project inquiry button hide the quotation form
  const renderProjectInquiryButton = () => {
    return (
      !isQuotationPage && (
        <ProjectInquiryButton
          onClick={handleProjectInquiryClick}
          variant="primary"
        >
          {t('projectInquiry')}
        </ProjectInquiryButton>
      )
    );
  };

  const menuRef = useRef<HTMLDivElement>(null); // Create a ref for the menu dropdown

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && event.currentTarget) {
        if (!menuRef.current.contains(event.currentTarget as HTMLElement)) {
          scrollToSection(
            (event.target as HTMLElement).getAttribute('data-scroll') as string,
          );
        }

        setIsMenuOpen(false); // Close the menu dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav className="fixed z-50 w-full bg-black backdrop-blur-sm transition-transform duration-300">
        <div className="flex h-20 max-w-full items-center justify-between px-4">
          {!isQuotationPage && (
            <div className="hidden flex-grow items-center justify-center md:flex">
              <button
                onClick={() => scrollToSection('whylomtech')}
                className="nav-link nav-link-custom"
              >
                {t('whyLomtech')}
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="nav-link nav-link-custom"
              >
                {t('portfolios')}
              </button>

              <button
                onClick={() => scrollToSection('partners')}
                className="nav-link nav-link-custom"
              >
                {t('partnersi')}
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="nav-link nav-link-custom"
              >
                {t('contactUs')}
              </button>
              <div className="ml-4">
                <ProjectInquiryButton
                  onClick={handleProjectInquiryClick}
                  variant="primary"
                >
                  {t('projectInquiry')}
                </ProjectInquiryButton>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <LanguageDropdown />
            {!isQuotationPage && (
              <button
                className="relative inline-block text-left text-black md:hidden"
                onClick={handleMenuToggle}
              >
                <CiMenuBurger className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>

        {isMenuOpen && !isQuotationPage && (
          <div ref={menuRef} className="menu-dropdown md:hidden">
            <button
              data-scroll="whylomtech"
              className="nav-link nav-link-custom"
            >
              {t('whyLomtech')}
            </button>

            <button
              data-scroll="portfolio"
              className="nav-link nav-link-custom"
            >
              {t('portfolios')}
            </button>

            <button data-scroll="partners" className="nav-link nav-link-custom">
              {t('partnersi')}
            </button>
            <button data-scroll="contact" className="nav-link nav-link-custom">
              {t('contactUs')}
            </button>
          </div>
        )}
      </nav>
      {/* Project Inquiry Button for Mobile and Tablet Views */}
      <div className="projectbtn btnbottom btnright md:hidden">
        {renderProjectInquiryButton()}
      </div>
    </>
  );
};
