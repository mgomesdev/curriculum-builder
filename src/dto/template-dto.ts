import type { ComponentProps, ElementType } from 'react';

export type Template = {
  id: string;
  name: string;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string;
  version: string;
  tags: string[];
  category: string;
  settings: Settings;
  page: Page;
};

type Settings = {
  colors: Colors;
  typography: Typografy;
  customKey: Record<string, unknown>;
};

type Colors = {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  surface: string;
  customKey: Record<string, unknown>;
};

type Typografy = {
  h1: string;
  p: string;
  customKey: Record<string, unknown>;
};

type Page = {
  title: string;
  children: PageNode[];
};

export type PageNode<T extends ElementType = ElementType> = {
  type: T | '#text';
  props: ComponentProps<T>;
  children?: (PageNode | string)[];
};
