"use client";

import { FC, useEffect, useState, useRef } from "react";
import { LanguageDropdown } from "./LanguageDropdown";
import "@/app/NavBar.css";
import { Language } from "@/lib/i18n/settings";
import { useTranslation } from "@/lib/i18n/client";
import { CiMenuBurger } from "react-icons/ci";
import { ProjectInquiryButton } from "./ProjectInquiryButton";

interface Props {
  lng: Language;
}

export const NavBar: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && event.currentTarget) {
        if (!menuRef.current.contains(event.currentTarget as HTMLElement)) {
          scrollToSection(
            (event.target as HTMLElement).getAttribute("data-scroll") as string,
          );
        }
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="fixed z-50 w-full bg-black backdrop-blur-sm transition-transform duration-300">
        <div className="flex h-20 max-w-full items-center justify-between px-4">
          <button
            title="Toggle menu"
            onClick={handleMenuToggle}
            className="md:hidden text-white"
          >
            <CiMenuBurger size={24} />
          </button>

          <div className="hidden flex-grow items-center justify-center md:flex">
            <button
              onClick={() => scrollToSection("aboutme")}
              className="nav-link nav-link-custom"
            >
              {t("aboutMe")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="nav-link nav-link-custom"
            >
              {t("portfolios")}
            </button>
            <div className="ml-4">
              <ProjectInquiryButton
                onClick={() => scrollToSection("contact")}
                variant="primary"
              >
                {t("contactMe")}
              </ProjectInquiryButton>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <LanguageDropdown />
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div ref={menuRef} className="absolute w-full bg-black py-4 md:hidden">
            <button
              onClick={() => scrollToSection("aboutme")}
              className="block w-full px-4 py-2 text-left text-white hover:bg-gray-800"
            >
              {t("aboutMe")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full px-4 py-2 text-left text-white hover:bg-gray-800"
            >
              {t("portfolios")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full px-4 py-2 text-left text-white hover:bg-gray-800"
            >
              {t("contactMe")}
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
