import { useRef } from 'react';
import { templateBuilderData } from '../builder/template-builder-data';
import { TemplateBuilder } from '../builder/template-builder';
/*import { domToJSON, renderFromJSON } from '../utils/domToJSON';
import type { Template } from '../dto/template-dto';
*/
export const TemplateEditor = () => {
  const divRef = useRef<HTMLDivElement>(null);
  /*
  const handleDomToJSON = () => {
    if (divRef?.current) {
      const json = domToJSON(divRef.current);
      console.log(json);
    }
  }; */

  return (
    <>
      <TemplateBuilder initialData={templateBuilderData} ref={divRef} />
      {/*

      <hr />
      <button onClick={handleDomToJSON}>domTOJson</button>

      <RenderFromJSON template={fakeTemplateApiResponse} />
*/}
    </>
  );
};
/*
const RenderFromJSON = ({ template }: { template: Template }) => (
  <>
    {template.page.children.map((child, index) => (
      <React.Fragment key={index}>{renderFromJSON(child)}</React.Fragment>
    ))}
  </>
);
*/
