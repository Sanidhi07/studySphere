import type {ReactNode} from 'react';

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

function SectionCard({ title, children }:SectionCardProps) {
  return (
    <div className='bg-white rounded-2xl border border-gray-200 shadow-sm p-6'>
      <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
      {children}

    </div>
  )
}

export default SectionCard;