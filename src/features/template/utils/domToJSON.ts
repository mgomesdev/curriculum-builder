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
