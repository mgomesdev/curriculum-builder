import React from 'react';

export const renderFromJSON = (node: JSONNode): React.ReactNode => {
  if (node.type === '#text') return node.children?.join('') ?? '';

  const props = { ...node.props };

  if (props.class) {
    props.className = props.class;
    delete props.class;
  }

  return React.createElement(
    node.type,
    props,
    (node.children as JSONNode[])?.map((child: JSONNode, i: number) => (
      <React.Fragment key={i}>{renderFromJSON(child)}</React.Fragment>
    ))
  );
};

export interface JSONNode {
  type: string;
  props: Record<string, string>;
  children?: JSONNode[] | string[];
}

export const domToJSON = (el: Element) => {
  const children: JSONNode[] = [];

  el.childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      if (child.textContent?.trim()) {
        children.push({ type: '#text', props: {}, children: [child.textContent.trim() as unknown as JSONNode] });
      }
    } else if (child.nodeType === Node.ELEMENT_NODE) children.push(domToJSON(child as Element));
  });

  return {
    type: el.tagName.toLowerCase(),
    props: Array.from(el.attributes).reduce((acc, attr) => ({ ...acc, [attr.name]: attr.value }), {}),
    children: children.length ? children : undefined,
  };
};
