import { useNode } from '@craftjs/core';
import type { HTMLAttributes } from 'react';

interface SectionProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
}

export const Section = ({ children, ...props }: SectionProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <section
      ref={(ref: HTMLElement) => {
        connect(drag(ref));
      }}
      {...props}>
      {children}
    </section>
  );
};
