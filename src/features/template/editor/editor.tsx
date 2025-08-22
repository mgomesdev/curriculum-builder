import React, { createContext, use, useRef, useState } from 'react';
import { fakeTemplateApiResponse } from '../builder/template-builder-data';
import { domToJSON, renderFromJSON } from '@/utils/template-utils';

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

      {fakeTemplateApiResponse.page.children.map((child, index) => (
        <React.Fragment key={index}>{renderFromJSON(child)}</React.Fragment>
      ))}
    </>
  );
};

/*
interface ItemProps {
  node: PageNode;
  path: number[]; // caminho para identificar a posição na árvore
}

const SortableItem = ({ node, path }: ItemProps) => {
  const id = path.join('-'); // cria um identificador único a partir do caminho
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: '1px dashed #aaa',
    padding: 8,
    marginBottom: 4,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <span>{node.type}</span>
      {node.children && (
        <div style={{ paddingLeft: 16 }}>
          <SortableContext
            items={node.children.map((_, i) => [...path, i].join('-'))}
            strategy={verticalListSortingStrategy}>
            {node.children.map((child, i) =>
              typeof child === 'string' ? (
                <div key={i}>{child}</div>
              ) : (
                <SortableItem key={i} node={child} path={[...path, i]} />
              )
            )}
          </SortableContext>
        </div>
      )}
    </div>
  );
};

const SortableElements = () => {
  const headers = fakeTemplateApiResponse.page.children[0].children.filter(n => n.type === 'header');
  const [items, setItems] = useState(headers);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = items.findIndex(i => i.type + i.props.id === active.id);
    const newIndex = items.findIndex(i => i.type + i.props.id === over.id);
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map(i => i.type + i.props.id)} strategy={verticalListSortingStrategy}>
        {items.map((item, index) => (
          <SortableItem key={index} node={item} path={[index]} />
        ))}
      </SortableContext>
    </DndContext>
  );
};
/*
interface SortableItemProps {
  children: React.ReactNode;
  id: string;
}

const SortableItem = ({ children, id }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  console.log(id);
  return (
    <Item ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </Item>
  );
};

interface ItemProps extends ComponentProps<'div'> {
  children?: React.ReactNode;
}

const Item = forwardRef<HTMLDivElement, ItemProps>(({ children, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className="cursor-move rounded-md border border-dashed border-gray-300 p-4 hover:border-blue-400">
      {children}
    </div>
  );
});

Item.displayName = 'Item';
*/
