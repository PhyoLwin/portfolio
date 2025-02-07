import { Language } from '@/lib/i18n/settings';
import { FC } from 'react';
import { Select } from '../Form/Select';
import { useTranslation } from '@/lib/i18n/client';
import { ErrorMessage } from '../Form/ErrorMessage';

interface Props {
  lng: Language;
}

export const InquiryForm: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, 'quotation');

  function getOptions(topic: string) {
    const translations = t(`${topic}.options`) as unknown as string[];
    const options = translations.map((option) => ({
      value: option,
      label: option,
    }));

    options.unshift({ value: '', label: t(`${topic}.default`) });

    return options;
  }

  return (
    <div className="form-section flex flex-col gap-6">
      {['problems', 'outcomes', 'resources', 'budget', 'completion_date'].map(
        (topic) => (
          <div key={topic}>
            <Select
              name={topic}
              options={getOptions(topic)}
              question={t(`${topic}.question`)}
              id={topic}
            />
            <ErrorMessage name={topic} />
          </div>
        ),
      )}
    </div>
  );
};
