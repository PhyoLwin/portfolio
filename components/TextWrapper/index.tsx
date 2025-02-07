'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from '@/lib/i18n/client';
import Arrow from './Arrow'; // Assuming Arrow is a valid React component
import { isEven } from '@/utils';
import { Tab, TabList } from '@headlessui/react';

interface Props {
  lng: string;
}

interface Service {
  key: string;
  icon: string;
}

export const TextWrapper = ({ lng }: Props) => {
  const { t } = useTranslation(lng, 'common');

  const services: Service[] = [
    {
      key: 'costEffective',
      icon: '💰',
    },
    {
      key: 'expertiseAndInnovation',
      icon: '🛠️',
    },
    {
      key: 'clientCentricApproach',
      icon: '🤝',
    },
    {
      key: 'strategicLocation',
      icon: '🌎',
    },
  ];

  function getSide(index: number) {
    return isEven(index) ? 'left' : 'right';
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <TabList className="flex flex-col items-center gap-6">
      <div data-aos="fade-right">
        <Tab className="right cursor-pointer text-2xl font-bold text-[#0d3388]">
          <h2 className="flex items-center justify-center hover:scale-110">
            🚀 {t('collaborate_with_lom_tech')}
          </h2>
          <div className="mt-2 flex items-center justify-center">
            <Arrow />
          </div>
        </Tab>
      </div>

      {services.map((item, index) => (
        <div key={index} data-aos={`fade-${getSide(index)}`}>
          <Tab
            className={`chat-bubble data-[hover]:scale-110 ${getSide(index)} glow-effect cursor-pointer text-black`}
          >
            {item.icon} {t(`whyLomTech.${item.key}.title`)}
          </Tab>
        </div>
      ))}
    </TabList>
  );
};
