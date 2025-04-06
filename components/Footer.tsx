import { TranslateFunction } from "@/lib/i18n";
import Image from "next/image";
import { FC } from "react";
import Logo from "@/public/images/logo.png";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';


export const Footer: FC<{
  t: TranslateFunction;
}> = ({ t }) => {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <Image
              src={Logo}
              alt="Logo"
              className="h-auto w-[150px]"
              priority
            />
            <p className="mt-4 text-sm text-gray-400">
              {t("footer.slogan")}
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.hr_slogan")}</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                href="tel:+959963225576" 
                className="flex items-center space-x-2 text-gray-400 hover:text-[#0395f8] transition-colors"
              >
                <FaPhone className="h-4 w-4" />
                <span>+95 996 322 5576</span>
              </Link>
              <Link 
                href="mailto:Phyo12pyaepyae@gmail.com" 
                className="flex items-center space-x-2 text-gray-400 hover:text-[#0395f8] transition-colors"
              >
                <FaEnvelope className="h-4 w-4" />
                <span>Phyo12pyaepyae@gmail.com</span>
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/PhyoLwin" 
                target="_blank"
                className="text-gray-400 hover:text-[#0395f8] transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/phyo-pyae-pyae-lwin-4644b31b8/" 
                target="_blank"
                className="text-gray-400 hover:text-[#0395f8] transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&#169; 2025 Phyo Lwin. {t("footer.rights_reserved")}</p>
        </div>
      </div>
    </footer>
  );
};
