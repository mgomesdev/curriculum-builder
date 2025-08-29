import { useNode, useEditor } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import { useCallback, useEffect, useRef, type AnchorHTMLAttributes, type HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';

interface RenderNodeProps {
  render: React.ReactNode;
}

export const RenderNode = ({ render }: RenderNodeProps) => {
  const { id } = useNode();
  const { isActive, actions, query } = useEditor((_, query) => ({
    isActive: query.getEvent('selected').contains(id),
  }));

  const {
    connectors: { drag },
    deletable,
    moveable,
    isHover,
    parent,
    name,
    dom,
  } = useNode(node => ({
    deletable: query.node(node.id).isDeletable(),
    moveable: query.node(node.id).isDraggable(),
    isHover: node.events.hovered,
    parent: node.data.parent,
    props: node.data.props,
    name: node.data.custom.displayName || node.data.displayName,
    dom: node.dom,
  }));

  const currentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) {
        dom.classList.add(
          'border-blue-700',
          'outline-dashed',
          'transition-all',
          'duration-200',
          'ease-in-out',
          'border'
        );
      } else {
        dom.classList.remove('border-blue-700', 'outline-dashed', 'border');
      }
    }
  }, [isActive, isHover, dom]);

  const getPos = useCallback((dom: HTMLElement | null) => {
    const { bottom, left, top } = dom ? dom.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
    return {
      left: `${left}px`,
      top: `${top > 0 ? top : bottom}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current } = currentRef;
    if (!current) return;
    const { top, left } = getPos(dom);
    current.style.top = top;
    current.style.left = left;
  }, [getPos, dom]);

  useEffect(() => {
    document?.querySelector('.craftjs-renderer')?.addEventListener('scroll', scroll);
    return () => document?.querySelector('.craftjs-renderer')?.removeEventListener('scroll', scroll);
  }, [scroll]);

  return (
    <>
      {isActive &&
        ReactDOM.createPortal(
          <IndicatorDiv
            className="fixed flex items-center gap-16 bg-blue-400 text-white"
            style={{
              zIndex: 9999,
              left: getPos(dom).left,
              top: getPos(dom).top,
            }}
            ref={currentRef}>
            <h2 className="text-red-400">{name}</h2>

            <div className="flex w-fit justify-between gap-20">
              {moveable && (
                <Button
                  className="cursor-move"
                  ref={dom => {
                    drag(dom as HTMLElement);
                  }}>
                  <span className="size-[15px] bg-blue-500">MoveIcon</span>
                </Button>
              )}

              {id !== ROOT_NODE && (
                <Button className="cursor-pointer" onClick={() => actions.selectNode(parent as string)}>
                  <span className="size-[15px] bg-amber-500">ArrowUpIcon</span>
                </Button>
              )}

              {deletable && (
                <Button
                  className="cursor-pointer"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}>
                  <span className="size-[15px] bg-amber-500">DeleteIcon</span>
                </Button>
              )}
            </div>
          </IndicatorDiv>,
          document.querySelector('.page-container') as Element | DocumentFragment
        )}
      {render}
    </>
  );
};

interface ButtonProps extends React.DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <a {...props} className={`flex items-center opacity-90 ${props.className}`}>
      <div className="relative -top-[50%] -left-[50%]">{children}</div>
    </a>
  );
};

interface IndicatorDivProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

const IndicatorDiv = ({ children, ...props }: IndicatorDivProps) => {
  return (
    <div {...props} className={`-mt-[29px] h-[30px] text-12 leading-12 ${props.className}`}>
      {children}
    </div>
  );
};
