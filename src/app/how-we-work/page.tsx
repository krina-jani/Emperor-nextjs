import React from 'react';
import { HowWeWork } from '../../components/how-we-work/HowWeWork';

export const metadata = {
  title: 'How We Work | Emperor',
  description: 'Learn about our process, from discovery and design to development and deployment.',
};

export default function HowWeWorkPage() {
  return (
    <main>
      <HowWeWork />
    </main>
  );
}
