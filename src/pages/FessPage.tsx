import React from 'react';
import { SERVICES_DATA } from '../data/doctorData';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

interface ServiceWrapperProps {
  onOpenConsultation: (service: string) => void;
  onNavigate: (path: string) => void;
}

export const FessPage: React.FC<ServiceWrapperProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const service = SERVICES_DATA.find((s) => s.slug === 'fess')!;
  return (
    <ServicePageTemplate
      service={service}
      onOpenConsultation={onOpenConsultation}
      onNavigate={onNavigate}
    />
  );
};
