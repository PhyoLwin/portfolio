import { FC } from 'react';
import { Question } from './Question';
import { Language } from '@/lib/i18n/settings';
import { useTranslation } from '@/lib/i18n/client';
import { Description } from './Description';
import { Textarea } from '../Form/Textarea';

interface Props {
  lng: Language;
}

export const ExperienceForm: FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, 'quotation');
  return (
    <div className="flex flex-col">
      <label>
        <Question index={'04'} question={t('experience.question')} />
        <div>
          <Description description={t('experience.sub_questions.satisfied')} />
          <Textarea name="satisfied" />
        </div>
      </label>

      <label>
        <div className="mt-4">
          <Description
            description={t('experience.sub_questions.disappointed')}
          />
          <Textarea name="disappointed" />
        </div>
      </label>
    </div>
  );
};
