import { FC } from 'react';
import { Description } from './Description';

interface Props {
  index?: number | string;
  question: string;
  description?: string;
}

export const Question: FC<Props> = ({ index, question, description }) => {
  return (
    <div className="mb-8">
      {index && <h3 className="mb-4 text-lg md:text-xl">{index}</h3>}
      <h4 className="mb-6 font-medium">{question}</h4>
      {description && <Description description={description} />}
    </div>
  );
};
