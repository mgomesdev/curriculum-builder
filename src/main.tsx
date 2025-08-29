import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TemplateDefault } from './templates/template-default/template-default';
import { templateDefaultData } from './templates/template-default/template-default-data';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col">
      <header className="container mx-auto flex h-80 w-full items-end justify-center gap-12 sm:h-140 sm:justify-end">
        <button className={`h-48 cursor-pointer rounded-2xl ${/*isEdit ? 'bg-green-200' :*/ 'bg-blue-400'} px-20`}>
          {/*isEdit ? 'Salvar' : 'Editar'*/} SALVAR/EDITAR
        </button>

        {/*!isEdit && (
                 <button onClick={handleDownloadPDF} className="h-48 cursor-pointer rounded-2xl bg-fuchsia-300 px-20">
                   Download
                 </button>
               )*/}
      </header>

      <TemplateDefault initialData={templateDefaultData} />
    </div>
  </StrictMode>
);
