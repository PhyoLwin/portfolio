'use client';
import { FC, useEffect, useState } from 'react';
import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';
import { Formik, Form as FormikForm } from 'formik';
import { QuotationFormFields, validationSchema } from '@/lib/validationSchema';
import { Language } from '@/lib/i18n/settings';
import { IntersectionOptions, useInView } from 'react-intersection-observer';
import { sendEmail } from '@/lib/sendEmail';
import { Toast } from './Toast';

interface Props {
  lng: Language;
}

export const QuotationForm: FC<Props> = ({ lng }) => {
  const formData: QuotationFormFields = {
    companyName: '',
    contact: '',
    email: '',
    inflowPath: '',
    problems: '',
    outcomes: '',
    resources: '',
    budget: '',
    completion_date: '',
    satisfied: '',
    disappointed: '',
    privacy: false,
  };

  const observerOptions: IntersectionOptions = {
    trackVisibility: true,
    delay: 200,
  };

  const { ref: infoRef, inView: inView1 } = useInView(observerOptions);
  const { ref: inflowRef, inView: inView2 } = useInView(observerOptions);
  const { ref: inquiryRef, inView: inView3 } = useInView(observerOptions);
  const { ref: expRef, inView: inView4 } = useInView(observerOptions);
  const [show, setShow] = useState(false);

  const [activeStep, setActiveStep] = useState([
    inView1,
    inView2,
    inView3,
    inView4,
  ]);

  useEffect(() => {
    setActiveStep(() => {
      const steps = [inView1, inView2, inView3, inView4];

      for (let i = steps.length - 2; i >= 0; i--) {
        if (steps[i + 1]) {
          steps[i] = true;
        }
      }
      return steps;
    });
  }, [inView1, inView2, inView3, inView4]);

  const handleSubmit = async (
    values: QuotationFormFields,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      await sendEmail(values);
      setShow(true);
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex w-full flex-col justify-around bg-white text-black md:flex-row">
      <div className="top-0 mt-32 flex w-2/4 items-center md:sticky md:mt-0 md:h-screen">
        <LeftColumn activeStep={activeStep} lng={lng} />
      </div>
      <div className="flex pl-3 pr-3 pt-16">
        <Formik
          initialValues={formData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur={true} // Optional: Validate on blur
          validateOnChange={true} // Optional: Validate on change
        >
          <FormikForm>
            <RightColumn
              infoRef={infoRef}
              inflowRef={inflowRef}
              inquiryRef={inquiryRef}
              expRef={expRef}
              lng={lng}
            />
          </FormikForm>
        </Formik>
        <Toast
          show={show}
          setShow={setShow}
          text="Email sent successfully"
          className="fixed bottom-4 right-4"
        />
      </div>
    </div>
  );
};
