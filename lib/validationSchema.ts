import { string, object, InferType, boolean } from 'yup';

export const validationSchema = object({
  companyName: string().required('Company name is required'),
  contact: string().required('Contact is required'),
  email: string().email('Invalid email').required('Email is required'),
  inflowPath: string().required('Inflow path is required'),
  problems: string().required(
    'Pleease tell us about the problems you are facing',
  ),
  outcomes: string().required(
    'Please tell us about the outcomes you are looking for',
  ),
  resources: string().required('Resources are required'),
  budget: string().required('Budget is required'),
  completion_date: string().required('Completion date is required'),
  satisfied: string(),
  disappointed: string(),
  privacy: boolean()
    .default(false)
    .test('is-true', 'Privacy is required', (value) => value),
});

export type QuotationFormFields = InferType<typeof validationSchema>;
