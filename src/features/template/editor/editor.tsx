import React, { createContext, use, useRef, useState } from 'react';
import { fakeTemplateApiResponse } from '../builder/template-builder-data';
import { domToJSON, renderFromJSON } from '../utils/template-utils';

export const TemplateEditor = () => {
  return (
    <div className="flex flex-col">
      <TemplateEditorContext>
        <TemplateEditorContent />
      </TemplateEditorContext>
    </div>
  );
};

const TemplateEditorContent = () => {
  const { setIsEdit, isEdit } = use(TemplateEditorContextProvider);
  const templateRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    if (templateRef?.current) {
      const json = domToJSON(templateRef.current);
      console.log(json);
    }
  };

  const handleDownlodPDF = () => console.log('TODO: download PDF');

  return (
    <>
      <header className="container mx-auto flex h-80 w-full items-end justify-center gap-12 sm:h-140 sm:justify-end">
        {/* TODO: instalar tailwind merge para classes */}
        <button
          onClick={setIsEdit}
          className={`h-48 cursor-pointer rounded-2xl ${isEdit ? 'bg-amber-200' : 'bg-blue-400'} px-20`}>
          {isEdit ? 'Finalizar' : 'Editar'}
        </button>
        <button className="h-48 cursor-pointer rounded-2xl bg-green-300 px-20" onClick={handleSave}>
          Salvar
        </button>
        <button onClick={handleDownlodPDF} className="h-48 cursor-pointer rounded-2xl bg-fuchsia-300 px-20">
          Download
        </button>
      </header>

      <div ref={templateRef}>
        {fakeTemplateApiResponse.page.children.map((child, index) => (
          <div key={index}>{renderFromJSON(child)}</div>
        ))}
      </div>
    </>
  );
};

interface TemplateEditorContextProviderProps {
  isEdit: boolean;
  setIsEdit: () => void;
}

export const TemplateEditorContextProvider = createContext({} as TemplateEditorContextProviderProps);

interface TemplateEditorContextProps {
  children: React.ReactNode;
}

const TemplateEditorContext = ({ children }: TemplateEditorContextProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => setIsEdit(old => !old);

  return (
    <TemplateEditorContextProvider.Provider value={{ isEdit, setIsEdit: handleEdit }}>
      {children}
    </TemplateEditorContextProvider.Provider>
  );
};
