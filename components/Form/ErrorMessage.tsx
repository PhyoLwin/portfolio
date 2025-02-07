import { ErrorMessage as FormikErrorMessagge } from 'formik';
import { FC } from 'react';

interface Props {
  name: string;
}

export const ErrorMessage: FC<Props> = ({ name }) => {
  return (
    <FormikErrorMessagge
      name={name}
      component="div"
      className="text-sm text-red-500"
    />
  );
};
