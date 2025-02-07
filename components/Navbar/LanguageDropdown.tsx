'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { GrLanguage } from 'react-icons/gr';
import Flag from 'react-world-flags';

export const LanguageDropdown = () => {
  const fullPathName = usePathname();
  const pathName = fullPathName.replace(/^\/[a-z]{2}(\/|$)/, '/');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleDropdown();
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-controls="language-dropdown-menu"
          aria-label="change language"
          className="flex items-center justify-center p-2 text-gray-700"
        >
          <GrLanguage className="h-6 w-6 text-white" />
        </button>
      </div>

      {isOpen && (
        <div
          id="language-dropdown-menu"
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg"
          aria-labelledby="language-dropdown"
          role="menu"
        >
          <div className="py-1" role="none">
            <Link
              href={`/kr${pathName}`}
              scroll={false}
              className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              <Flag code="KR" className="mr-2 h-5 w-5" />
              한국어
            </Link>
            <Link
              href={`/en${pathName}`}
              scroll={false}
              className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Flag code="US" className="mr-2 h-5 w-5" />
              Global (English)
            </Link>
            <Link
              href={`/jp${pathName}`}
              scroll={false}
              className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Flag code="JP" className="mr-2 h-5 w-5" />
              日本語
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
