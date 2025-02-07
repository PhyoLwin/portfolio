import { Language } from '@/lib/i18n/settings';
import Step from './Step';
import { useTranslation } from '@/lib/i18n/client';

interface LeftColumnProps {
  activeStep: boolean[];
  lng: Language;
}

export const LeftColumn: React.FC<LeftColumnProps> = ({ activeStep, lng }) => {
  const { t } = useTranslation(lng, 'quotation');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex max-h-screen w-full flex-col items-center pl-10 md:h-[70vh] md:pt-16 lg:h-[90vh]">
      <div className="flex flex-col justify-center gap-4 md:mb-4">
        <h1 className="text-2xl font-semibold">{t('left.head_one')}</h1>
        <h2 className="text-lg">{t('left.head_two')}</h2>
        <p className="text-gray-700">{t('left.head_note')}</p>
      </div>

      {/* Progress Steps */}
      <div className="hidden md:relative md:mx-auto md:flex md:h-full md:flex-grow md:flex-col md:items-center md:justify-between">
        <div className="absolute left-5 top-0 h-full w-1 -translate-x-1/2 bg-gray-200"></div>
        <Step
          number={1}
          title={t('left.title_inform')}
          isActive={activeStep[0]}
          onClick={() => scrollToSection('info')}
        />
        <Step
          number={2}
          title={t('left.flow_path')}
          isActive={activeStep[1]}
          onClick={() => scrollToSection('inflow')}
        />
        <Step
          number={3}
          title={t('left.inquiry')}
          isActive={activeStep[2]}
          onClick={() => scrollToSection('inquiry')}
        />
        <Step
          number={4}
          title={t('left.detailed_inquiry')}
          isActive={activeStep[3]}
          onClick={() => scrollToSection('exp')}
        />
      </div>
    </div>
  );
};
