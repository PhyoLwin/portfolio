'use client';
import { InformationForm } from './InformationForm';
import { Inflowpath } from './Inflowpath';
import { useTranslation } from '@/lib/i18n/client';
import { Language } from '@/lib/i18n/settings';
import { Question } from './Question';
import { Checkbox } from '../Form/Checkbox';
import { ErrorMessage } from '../Form/ErrorMessage';
import dynamic from 'next/dynamic';

const ExperienceForm = dynamic(() =>
  import('./ExperienceForm').then((mod) => mod.ExperienceForm),
);
const InquiryForm = dynamic(() =>
  import('./InquiryForm').then((mod) => mod.InquiryForm),
);

interface RightColumnProps {
  infoRef: (node: Element | null) => void;
  inflowRef: (node: Element | null) => void;
  inquiryRef: (node: Element | null) => void;
  expRef: (node: Element | null) => void;
  lng: Language;
}

export const RightColumn: React.FC<RightColumnProps> = ({
  lng,
  inflowRef,
  infoRef,
  inquiryRef,
  expRef,
}) => {
  const { t } = useTranslation(lng, 'quotation');

  return (
    <div className="flex h-full flex-col p-4">
      <div className="mt-7 px-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-white">
            !
          </div>
          <span className="font-medium">{t('rightcolumn.guide')}</span>
        </div>
        {/* Inquiry Guide Box */}
        <div className="flex-shrink-0 rounded-lg bg-blue-50 p-3">
          <p className="mb-2 text-sm text-gray-600">
            {t('rightcolumn.rightboxnote_one')}
          </p>
          <p className="text-sm text-gray-600">
            {t('rightcolumn.rightboxnote_two')}
          </p>
        </div>
      </div>

      {/* Form Sections */}
      <div className="mt-6 flex-1">
        <div className="form-section" id="info" ref={infoRef}>
          <InformationForm lng={lng} />
        </div>
        <div className="form-section" id="inflow" ref={inflowRef}>
          <Inflowpath lng={lng} />
        </div>

        <div
          className="form-section space-y-6 p-4 md:p-7"
          id="inquiry"
          ref={inquiryRef}
        >
          <Question index={'03'} question={t('inquiry.header')} />
          <InquiryForm lng={lng} />
        </div>
      </div>

      {/* Experience Form */}
      <div className="form-section space-y-6 p-4 md:p-7" id="exp" ref={expRef}>
        <ExperienceForm lng={lng} />
      </div>

      {/* Check Box */}
      <div className="p-4">
        <div className="mb-10 flex flex-col gap-5">
          <Checkbox label={t('rightcolumn.rightcheck_label')} name="privacy" />
          <ErrorMessage name="privacy" />
        </div>
        <div>
          <button
            type="submit"
            className="h-16 w-full rounded border border-blue-500 text-lg text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-700"
          >
            {t('rightcolumn.rightsummit_btn')}
          </button>
        </div>
      </div>
    </div>
  );
};
