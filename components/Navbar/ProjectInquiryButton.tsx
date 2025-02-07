import { ReactNode } from 'react';

interface ProjectInquiryButtonProps {
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export const ProjectInquiryButton: React.FC<ProjectInquiryButtonProps> = ({
  onClick,
  className = '',
  variant = 'primary',
  children,
}) => {
  const baseStyle = 'px-3 py-2 rounded-full transition duration-300';
  const variantStyle =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-600 text-white hover:bg-gray-700';

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};
