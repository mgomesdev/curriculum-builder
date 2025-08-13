import { initial_template } from './data/templates';

import { TemplateRenderer } from './features/template/components/template-renderer';

export const Page = () => {
  const template = initial_template;
  return <TemplateRenderer template={template[0]} />;
};
