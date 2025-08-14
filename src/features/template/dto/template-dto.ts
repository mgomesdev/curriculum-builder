import type { JSX } from 'react';

export type ElementType = keyof JSX.IntrinsicElements;

export type Element<T extends ElementType = ElementType> = {
  id: string;
  type: ElementType;
  props: JSX.IntrinsicElements[T] & {
    onClickAction: string;
  };
  subElement?: Element;
};

export type Section<T extends ElementType = ElementType> = {
  id: string;
  name: string;
  type: ElementType;
  props: JSX.IntrinsicElements[T];
  elements: Element[];
};

export type Template = {
  id: string;
  name: string;
  sections: Section[];
};
