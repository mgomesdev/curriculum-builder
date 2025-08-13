import type { Element, Section, Template } from '@/dto/template-dto';
import { useRef } from 'react';
import { Button, type ButtonRef } from './button';

interface TemplateRendererProps {
  template: Template;
}

export const TemplateRenderer = ({ template }: TemplateRendererProps) => {
  const { sections } = template;

  return (
    <div className="mx-auto w-full max-w-3/4">
      {sections.map(section => (
        <SectionRenderer section={section} key={section.id} />
      ))}
    </div>
  );
};

interface SectionRendererProps {
  section: Section;
}

export const SectionRenderer = ({ section }: SectionRendererProps) => {
  const Tag = section.type;
  const { className } = section.props;
  const { elements } = section;

  return (
    <Tag className={className}>
      {elements.map(el => (
        <ElementRenderer element={el} key={el.id} />
      ))}
    </Tag>
  );
};

export interface ElementRendererProps {
  element: Element;
}

export const ElementRenderer = ({ element }: ElementRendererProps) => {
  const Tag = element.type;
  const { className, children } = element.props;
  const { type } = element;
  const buttonRef = useRef<ButtonRef>(null);

  return (
    <>
      {type === 'button' ? <Button element={element} ref={buttonRef} /> : <Tag className={className}>{children}</Tag>}
    </>
  );
};
