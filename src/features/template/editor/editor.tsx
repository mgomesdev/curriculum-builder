import { fakeTemplateApiResponse } from '../builder/template-builder-data';

import { Editor, Frame, Element } from '@craftjs/core';

export const TemplateEditor = () => {
  return (
    <div className="flex flex-col">
      <Editor>
        <TemplateEditorContent />
      </Editor>
    </div>
  );
};

const TemplateEditorContent = () => {
  // TODO: pegar o elemento correto para gerar o JSON.
  /*  const handleSave = () => {
    if (templateRef?.current) {
      const json = domToJSON(templateRef.current);
      console.log(json.children);
    }
  }; */

  const handleEdit = () => {
    // setIsEdit();
    // if (isEdit) handleSave();
  };

  //  const handleDownloadPDF = () => console.log('TODO: download PDF');

  console.log(Array.prototype.flat.call(fakeTemplateApiResponse.page.children));

  return (
    <>
      <header className="container mx-auto flex h-80 w-full items-end justify-center gap-12 sm:h-140 sm:justify-end">
        {/* TODO: instalar tailwind merge para classes */}
        <button
          onClick={handleEdit}
          className={`h-48 cursor-pointer rounded-2xl ${/*isEdit ? 'bg-green-200' :*/ 'bg-blue-400'} px-20`}>
          {/*isEdit ? 'Salvar' : 'Editar'*/} SALVAR/EDITAR
        </button>

        {/*!isEdit && (
          <button onClick={handleDownloadPDF} className="h-48 cursor-pointer rounded-2xl bg-fuchsia-300 px-20">
            Download
          </button>
        )*/}
      </header>

      <Frame>
        <Element></Element>
      </Frame>
    </>
  );
};

/* XXX: funcionamento
 * componentes abstratos (craftjs)
 * <CraftWapper><Button/></CraftWapper>
 * monta o template e salva o JSON (serialize)
 * o json é salvo no banco, e o template busca na api e carrega como foi salvo.
 * -------
 * É uma aplicação de curriculo, portanto os eventListeners e helpers são abstratos e reaproveitados.
 * cada modelo precisará inicialmente ser montado manualmente para que o usuario possa escolhar e customizar.
 * esse processo manual poderá ser automatizado através de uma interface 'admin' drag and drop para montar novos templates.
 * os componentes 'arrastaveis' sáo os abstratos
 */
