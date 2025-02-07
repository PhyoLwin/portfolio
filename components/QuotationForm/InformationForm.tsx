import React, { FC } from 'react';
import { useTranslation } from '@/lib/i18n/client';
import { Field } from 'formik';
import { Language } from '@/lib/i18n/settings';
import { Question } from './Question';
import { ErrorMessage } from '../Form/ErrorMessage';

interface Props {
  lng: Language;
}

export const InformationForm: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, 'quotation');

  const fields = [
    {
      name: 'companyName',
      type: 'text',
      label: t('inform.companyName.label'),
      placeholder: t('inform.companyName.placeholder'),
    },
    {
      name: 'contact',
      type: 'text',
      label: t('inform.contact.label'),
      placeholder: t('inform.contact.placeholder'),
    },
    {
      name: 'email',
      type: 'email',
      label: t('inform.email.label'),
      placeholder: t('inform.email.placeholder'),
    },
  ];

  return (
    <div className="space-y-6 p-4 md:p-7">
      <Question
        index="01"
        question={t('inform.head')}
        description={t('inform.note')}
      />

      <div className="space-y-4">
        {fields.map((field) => (
          <div
            key={field.name}
            className="flex items-center rounded-lg border border-gray-300 p-3"
          >
            <label className="mr-4 min-w-[120px]">
              {field.label}
              <span className="text-yellow-400">*</span>
            </label>
            <Field
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="flex-1 rounded-lg border-none p-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0"
              style={{ width: '100%' }}
            />
            <ErrorMessage name={field.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
