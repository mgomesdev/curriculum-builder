import React, { useRef } from 'react';
import { fakeTemplateApiResponse, initialTemplateData } from '../creator/initial-template-data';
import { InitialTemplate } from '../creator/initial-template';
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
      <InitialTemplate initialData={initialTemplateData} ref={divRef} />

      <hr />

      <RenderFromJSON template={fakeTemplateApiResponse} />
    </>
  );
};

const RenderFromJSON = ({ template }: { template: Template }) => {
  if (!template) return null;

  return (
    <>
      {template.page.children.map((child, index) => (
        <React.Fragment key={index}>{renderFromJSON(child)}</React.Fragment>
      ))}
    </>
  );
};
