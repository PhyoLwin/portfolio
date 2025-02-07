import { FC } from 'react';

interface Props {
  description: string;
}

export const Description: FC<Props> = ({ description }) => {
  return <p className="mb-6 text-sm text-gray-600">{description}</p>;
};
