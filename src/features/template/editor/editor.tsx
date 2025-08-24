import React, { createContext, use, useRef, useState } from 'react';
import { fakeTemplateApiResponse } from '../builder/template-builder-data';
import { domToJSON, renderFromJSON } from '@/utils/template-utils';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { PageNode } from '@/dto/template-dto';

export const TemplateEditor = () => {
  return (
    <div className="flex flex-col">
      <TemplateEditorContext>
        <TemplateEditorContent />
      </TemplateEditorContext>
    </div>
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

const TemplateEditorContent = () => {
  const { setIsEdit, isEdit } = use(TemplateEditorContextProvider);
  const templateRef = useRef<HTMLDivElement>(null);

  // TODO: pegar o elemento correto para gerar o JSON.
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

  console.log(Array.prototype.flat.call(fakeTemplateApiResponse.page.children));

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

      {/*fakeTemplateApiResponse.page.children.map((child, index) => (
        <React.Fragment key={index}>{renderFromJSON(child)}</React.Fragment>
      ))*/}

      <SortableElements elements={fakeTemplateApiResponse.page.children} />
    </>
  );
};

interface SortableElementsProps {
  elements: PageNode[];
}

const SortableElements = ({ elements }: SortableElementsProps) => {
  console.log(elements);
  const [items, setItems] = useState(elements);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = items.findIndex(i => i.type + i.props.id === active.id);
    const newIndex = items.findIndex(i => i.type + i.props.id === over.id);
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  // TODO: encontrar uma forma de filtrar os header, section etc... e arrastar somente eles.

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={elements
          .filter(child => child.type === 'header' || child.type === 'section')
          .map((child, index) => child.props.id || index)}
        strategy={verticalListSortingStrategy}>
        {elements
          .filter(child => child.type === 'header' || child.type === 'section')
          .map((child, index) => (
            <SortableItem key={child.props.id || index} id={child.props.id || index} render={renderFromJSON(child)} />
          ))}
      </SortableContext>
    </DndContext>
  );
};

interface SortableItemProps {
  render: React.ReactNode;
  id: number;
}

const SortableItem = ({ render, id }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-move rounded-md border border-dashed border-gray-300 p-4 hover:border-blue-400">
      {render}
    </div>
  );
};
