import React, { MouseEventHandler } from 'react';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="h-5 w-5"
  >
    <path d="M9 19l-7-7 1.414-1.414L9 16.172l11.586-11.586L22 6l-13 13z" />
  </svg>
);

interface StepProps {
  number: number;
  title: string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Step: React.FC<StepProps> = ({ number, title, isActive, onClick }) => {
  return (
    <div
      className="sticky mx-auto flex w-[280px] items-start"
      onClick={onClick}
    >
      <div className="relative flex flex-col items-center">
        {/* Circle */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
            isActive
              ? 'border-blue-500 bg-blue-500'
              : 'border-gray-300 bg-white'
          } `}
        >
          {isActive && <CheckIcon />}
        </div>
      </div>
      <div className="-mt-1 ml-4">
        <div className="text-sm text-gray-600">{number}</div>
        <div className="text-sm">{title}</div>
      </div>
    </div>
  );
};

export default Step;
