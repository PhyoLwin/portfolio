import React, { FC } from 'react';
import { useTranslation } from '@/lib/i18n/client';
import { Field, ErrorMessage } from 'formik';
import { Language } from '@/lib/i18n/settings';

interface Props {
  lng: Language;
}

export const DetailedInquiryForm: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, 'quotation');
  return (
    <div className="space-y-6 p-4 md:p-7">
      <div className="mb-8">
        <h3 className="mb-4 text-lg md:text-xl">04</h3>
        <h4 className="mb-6 font-medium">{t('detailinquiry.header')}</h4>
      </div>

      <div>
        <Field
          name="detailedInquiry"
          as="textarea"
          placeholder={t('detailinquiry.placeholder')}
          className="h-48 w-full resize-none rounded-lg border border-blue-700 p-4 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <ErrorMessage
          name="detailedInquiry"
          component="div"
          className="text-sm text-red-500"
        />
      </div>
    </div>
  );
};
