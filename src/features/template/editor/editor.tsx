import React, { useEffect, useRef, useState } from 'react';
import { initialData } from '../template-default/initial-data';
import { TemplateDefault } from '../template-default/template-default';
import { domToJSON, renderFromJSON, type JSONNode } from '../utils/domToJSON';

export const TemplateEditor = () => {
  const [json, setJson] = useState<JSONNode | null>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef?.current) {
      const json = domToJSON(divRef.current);
      if (json) setJson(json);
    }
  }, []);

  return (
    <>
      <button onClick={() => console.log(json)}>domTOJson</button>

      <div ref={divRef}>
        <TemplateDefault initialData={initialData} />
        <p>------------</p>
      </div>

      {json &&
        json.children &&
        json.children.map((child, index) => <React.Fragment key={index}>{renderFromJSON(child)}</React.Fragment>)}
    </>
  );
};
