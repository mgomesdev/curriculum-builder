/* interface JSONNode {
  type: string;
  props: Record<string, any>;
  children?: JSONNode[];
}

function domToJSON(el: Element): JSONNode {
  const children: JSONNode[] = [];
  el.childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      if (child.textContent?.trim()) {
        children.push({ type: '#text', props: {}, children: [child.textContent.trim()] });
      }
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      children.push(domToJSON(child as Element));
    }
  });

  return {
    type: el.tagName.toLowerCase(),
    props: Array.from(el.attributes).reduce((acc, attr) => ({ ...acc, [attr.name]: attr.value }), {}),
    children: children.length ? children : undefined,
  };
} */

/*
const App = () => {
  useEffect(() => {
    const rootEl = document.getElementById('root')!;
    const treeJSON = domToJSON(rootEl);
    console.log(JSON.stringify(treeJSON, null, 2));
  }, []);

  return <Page data={data} />;
};

 */

/*


// Função recursiva que transforma JSON em JSX
const renderFromJSON = (node: any): React.ReactNode => {
  if (typeof node === 'string') return node; // Texto simples

  const { type, props = {}, children = [] } = node;

  return React.createElement(
    type,
    props,
    children.map((child: any, index: number) => <React.Fragment key={index}>{renderFromJSON(child)}</React.Fragment>)
  );
};

// JSON representando a árvore
const treeJSON = {
  type: 'div',
  props: { className: 'container', style: { border: '1px solid #ccc', padding: '16px' } },
  children: [
    {
      type: 'div',
      props: { style: { background: '#f0f0f0', padding: '8px' } },
      children: [{ type: 'span', children: ['Elemento filho dentro de div'] }],
    },
    {
      type: 'h1',
      props: { style: { color: 'blue' } },
      children: ['Meu Site Builder'],
    },
    {
      type: 'p',
      props: { style: { fontSize: '18px' } },
      children: ['Esse parágrafo é renderizado a partir de JSON.'],
    },
  ],
};


const App = () => {
  return <div>{renderFromJSON(treeJSON)}</div>;
};

*/
