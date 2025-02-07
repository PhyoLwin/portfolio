import emailjs from '@emailjs/browser';
import { QuotationFormFields } from './validationSchema';

export const useEmailSender = () => {
  emailjs.init('kgFykzhnzo2PWHj4H');
  const sendEmail = async (formData: QuotationFormFields) => {
    await emailjs.send(
      'service_3oxeb5f',
      'template_g0xqtw8',
      {
        to_name: 'Admin',
        from_name: formData.companyName,
        from_email: formData.email,
        contact: formData.contact,
        inflow_path: formData.inflowPath,
      },
      'kgFykzhnzo2PWHj4H',
    );
  };

  return { sendEmail };
};
