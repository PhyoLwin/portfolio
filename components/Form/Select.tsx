import { FC } from 'react';
import { Question } from '../QuotationForm/Question';
import { Field } from 'formik';

interface Option {
  value: string;
  label: string;
}

interface Props {
  index?: number;
  name: string;
  options: Option[];
  question: string;
  id?: string;
}

export const Select: FC<Props> = ({ index, name, options, id, question }) => {
  return (
    <div className="">
      <label htmlFor={id}>
        <Question index={index} question={question} />
      </label>
      {/* Dropdown Section */}
      <div className="space-y-4">
        <div>
          <div className="relative mt-1">
            <Field
              component="select"
              name={name}
              id={id}
              className="w-full appearance-none rounded-md border border-blue-700 p-5 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Field>
            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
