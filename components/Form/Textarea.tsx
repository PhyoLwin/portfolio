import { Field } from 'formik';
import { FC } from 'react';

interface Props {
  name: string;
}

export const Textarea: FC<Props> = ({ name }) => {
  return (
    <Field
      name={name}
      as="textarea"
      className="min-h-28 w-full appearance-none rounded-md border border-blue-700 p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  );
};
