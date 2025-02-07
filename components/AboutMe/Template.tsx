import { FC } from 'react';

export interface Props {
  title: string;
  points: { title: string; description: string }[];
}

export const Template: FC<Props> = ({ title, points }) => {
  return (
    <div>
      <span className="text-3xl font-bold text-[#0d3388]">{title}</span>
      <ul className="my-5 flex flex-col gap-5">
        {points.map(({ title, description }) => (
          <li className="mt-4 text-xl font-bold text-gray-400" key={title}>
            <span className="leading-tight text-[#3983f6] sm:text-xl">
              {title}
            </span>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
