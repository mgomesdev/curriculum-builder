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
      console.log(json.children);
    }
  };

  const handleEdit = () => {
    setIsEdit();
    if (isEdit) handleSave();
  };

  const handleDownloadPDF = () => console.log('TODO: download PDF');

  return (
    <>
      <header className="container mx-auto flex h-80 w-full items-end justify-center gap-12 sm:h-140 sm:justify-end">
        {/* TODO: instalar tailwind merge para classes */}
        <button
          onClick={handleEdit}
          className={`h-48 cursor-pointer rounded-2xl ${isEdit ? 'bg-green-200' : 'bg-blue-400'} px-20`}>
          {isEdit ? 'Salvar' : 'Editar'}
        </button>

        {!isEdit && (
          <button onClick={handleDownloadPDF} className="h-48 cursor-pointer rounded-2xl bg-fuchsia-300 px-20">
            Download
          </button>
        )}
      </header>

      <div ref={templateRef}>
        {fakeTemplateApiResponse.page.children.map((child, index) => (
          <React.Fragment key={index}>{renderFromJSON(child)}</React.Fragment>
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
