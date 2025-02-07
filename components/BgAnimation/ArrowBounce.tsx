// components/ArrowBounce.tsx
import { StaticImageData } from 'next/image';
import React from 'react';

interface ArrowBounceProps {
  arrowImage: string | StaticImageData;
  bottomPosition: string;
}

export const ArrowBounce: React.FC<ArrowBounceProps> = ({
  arrowImage,
  bottomPosition,
}) => {
  return (
    <div
      className="absolute left-1/2 z-20 h-14 w-14 -translate-x-1/2 transform animate-bounce cursor-pointer bg-cover bg-center"
      style={{
        backgroundImage: `url(${arrowImage})`,
        bottom: bottomPosition,
      }}
    ></div>
  );
};
