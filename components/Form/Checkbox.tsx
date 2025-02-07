import { FC } from 'react';
import { Field, FieldProps } from 'formik';

interface Props {
  name: string;
  label: string;
}

export const Checkbox: FC<Props> = ({ name, label }) => {
  return (
    <label className="ml-2 flex items-center gap-5 text-gray-700">
      <Field name={name}>
        {({ field }: FieldProps) => {
          return (
            <div
              className={`group block size-7 rounded border ${field.value ? 'bg-blue-500' : 'bg-white'}`}
            >
              {/* Checkmark icon */}
              <input {...field} type="checkbox" className="hidden" />
              <svg className="stroke-white" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          );
        }}
      </Field>

      {label}
    </label>
  );
};
