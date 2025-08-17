import React from 'react';
import type { PageNode } from '../dto/template-dto';

export const renderFromJSON = (node: PageNode): React.ReactNode => {
  if (node.type === '#text') return node.children?.join('') ?? '';

  const props = { ...node.props };

  if ('class' in props) {
    props.className = props.class;
    delete props.class;
  }

  return React.createElement(
    node.type,
    props,
    (node.children as PageNode[])?.map((child: PageNode, i: number) => {
      return <React.Fragment key={i}>{renderFromJSON(child)}</React.Fragment>;
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
