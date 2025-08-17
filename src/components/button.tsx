import { actions, type ButtonActions } from '@/features/template/actions/actions';
import { forwardRef, useImperativeHandle, useState } from 'react';
import type { ElementRendererProps } from './template-renderer';

export interface ButtonRef {
  setLoading: (state: boolean) => void;
}

export const Button = forwardRef<ButtonRef, ElementRendererProps>(({ element }, ref) => {
  const [loading, setLoading] = useState(false);
  const { onClickAction, children } = element.props;
  const { type } = element;

  const handleClick = () => {
    const action = actions[type]?.[onClickAction as keyof ButtonActions];
    if (action) action(ref as React.RefObject<ButtonRef>);
  };

  useImperativeHandle(ref, () => ({ setLoading: (state: boolean) => setLoading(state) }), []);

  return <button onClick={handleClick}>{loading ? 'carregando' : children}</button>;
});

Button.displayName = 'Button';
