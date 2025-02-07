import React, { FC } from 'react';
import { useTranslation } from '@/lib/i18n/client';
import { Field } from 'formik';
import { Language } from '@/lib/i18n/settings';
import { Question } from './Question';
import { ErrorMessage } from '../Form/ErrorMessage';

interface Props {
  lng: Language;
}

export const Inflowpath: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, 'quotation');
  return (
    <div className="space-y-6 p-4 md:p-7">
      <label htmlFor="inflowPathSelect">
        <Question
          index="02"
          question={t('flowpath.head')}
          description={t('flowpath.note')}
        />
      </label>

      {/* Dropdown Section */}
      <div className="space-y-4">
        <div>
          <div className="relative mt-1">
            <Field
              id="inflowPathSelect"
              component="select"
              name="inflowPath"
              className="w-full appearance-none rounded-md border border-blue-700 p-5 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">{t('flowpath.default')}</option>
              <option value="search">{t('flowpath.searchengine')}</option>
              <option value="social">{t('flowpath.social')}</option>
              <option value="referral">{t('flowpath.Referral')}</option>
              <option value="advertisement">
                {t('flowpath.advertisement')}
              </option>
              <option value="other">{t('flowpath.other')}</option>
            </Field>
            {/* Custom dropdown arrow */}
            <ErrorMessage name="inflowPath" />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
