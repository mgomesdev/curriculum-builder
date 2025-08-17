import React, { useRef } from 'react';
import { initialData, templateApiResponse } from '../template-default/initial-data';
import { TemplateDefault } from '../template-default/template-default';
import { domToJSON, renderFromJSON } from '../utils/domToJSON';
import type { Template } from '../dto/template-dto';

export const TemplateEditor = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleDomToJSON = () => {
    if (divRef?.current) {
      const json = domToJSON(divRef.current);
      console.log(json);
    }
  };

  return (
    <>
      <button onClick={handleDomToJSON}>domTOJson</button>
      <TemplateDefault initialData={initialData} />
      <div ref={divRef}>
        <RenderFromJSON template={templateApiResponse} />
      </div>
    </>
  );
};

const RenderFromJSON = ({ template }: { template: Template }) => {
  if (!template) return null;

  return (
    <>
      {template.page.children &&
        template.page.children.map((child, index) => {
          console.log(child);

          return <React.Fragment key={index}>{renderFromJSON(child)}</React.Fragment>;
        })}
    </>
  );
};
