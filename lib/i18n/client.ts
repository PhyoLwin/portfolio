'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import {
  initReactI18next,
  UseTranslationOptions,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName } from './settings';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    returnObjects: true,
    lng: undefined, // let it detect the language on the client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation(
  lng: string,
  ns: string,
  options?: UseTranslationOptions<undefined>,
) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg<string | string[]>(ns, options);
  const { i18n } = ret;
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return;
    setActiveLng(i18n.resolvedLanguage);
  }, [activeLng, i18n.resolvedLanguage]);

  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  useEffect(() => {
    if (cookies.i18next === lng) return;
    setCookie(cookieName, lng, { path: '/' });
  }, [lng, cookies.i18next, setCookie]); // ✅ Added setCookie to the dependency array

  return ret;
}
