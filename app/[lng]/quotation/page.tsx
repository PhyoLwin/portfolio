import React from 'react';
import { QuotationForm } from '@/components/QuotationForm/Form';
import { Language } from '@/lib/i18n/settings';
import { metadata as meta } from '@/utils/Meta';
export const metadata = meta;

interface Props {
  params: Promise<{ lng: Language }>;
}

export default async function QuotationPage({ params }: Props) {
  const { lng } = await params;
  return <QuotationForm lng={lng} />;
}
