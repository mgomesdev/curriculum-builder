import React, { use } from 'react';
import type { PageNode } from '@/dto/template-dto';
import { TemplateEditorContextProvider } from '@/features/template/editor/editor';

export const renderFromJSON = (node: PageNode): React.ReactNode => {
  if (node.type === '#text') return node.children?.join('') ?? '';

  const props = { ...node.props };

  if ('class' in props) {
    props.className = props.class;
    delete props.class;
  }

  /* TODO: [dnd-kit (ordenação)]
   * quando estiver no modo edição, a instancia do dnd-kit será feita nos elementos especificos (inicialmente apenas section)
   * obs. caso o usuario clique diretamente em um elemento 'contenteditable' ele deverá conseguir editar sem acionar a ordenação.
   * deve ter algum icone destacando onde o usuario deverá clicar para arrastar o elemento.
   * após ordenado, ao clicar em salvar o json final deverá estar na ordem correta.    *
   */

  return React.createElement(
    node.type,
    props,
    (node.children as PageNode[])?.map((child: PageNode, i: number) => {
      const { isEdit } = use(TemplateEditorContextProvider);
      const element = renderFromJSON(child) as React.ReactElement;
      return <React.Fragment key={i}>{renderElement()}</React.Fragment>;

      function renderElement() {
        const editableProps = {
          ...(element.props as React.HTMLAttributes<HTMLElement>),
          contentEditable: true,
          suppressContentEditableWarning: true,
          className: `${child.props.class} border-green-500 border-2 hover:border-blue-500 hover:border-2 transition-all duration-200 ease-in-out`,
        };

        const elementType: PageNode['type'][] = ['strong', 'span', 'li', 'h1', 'p'];
        if (isEdit && elementType.includes(child.type)) return React.cloneElement(element, editableProps);
        return element;
      }
    })
  );
};

export const domToJSON = (el: Element) => {
  const children: PageNode[] = [];

  el.childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      if (child.textContent?.trim()) {
        children.push({ type: '#text', props: {}, children: [child.textContent.trim() as unknown as PageNode] });
      }
    } else if (child.nodeType === Node.ELEMENT_NODE) children.push(domToJSON(child as Element));
  });

  return {
    type: el.tagName.toLowerCase() as PageNode['type'],
    props: Array.from(el.attributes).reduce((acc, attr) => ({ ...acc, [attr.name]: attr.value }), {}),
    children: children.length ? children : undefined,
  };
};
