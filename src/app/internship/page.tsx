import React from 'react';
import { Metadata } from 'next';
import InternshipHero from '../../components/internship/InternshipHero';
import InternshipDetails from '../../components/internship/InternshipDetails';
import InternshipForm from '../../components/internship/InternshipForm';
import WhyIntern from '../../components/internship/WhyIntern';

export const metadata: Metadata = {
  title: 'Apply for Internship | Emperor',
  description: 'Launch your career with hands-on experience in cutting-edge technologies. Apply for our internship program.',
};

export default function InternshipPage() {
  return (
    <main>
      <InternshipHero />
      <InternshipDetails />
      <InternshipForm />
      <WhyIntern />
    </main>
  );
}
