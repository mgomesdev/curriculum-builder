import type { ElementType } from '@/features/template/dto/template-dto';
import type { ButtonRef } from '../components/button';

export type ButtonActions = {
  save: typeof save;
};

export const actions: Partial<Record<ElementType, ButtonActions>> = {
  button: {
    save,
  },
};

function save(buttonRef: React.RefObject<ButtonRef | null>) {
  if (buttonRef.current) {
    buttonRef.current.setLoading(true);
  }
}
