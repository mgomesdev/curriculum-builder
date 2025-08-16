import { data } from './templates/template-default/initial-data';
import { TemplateDefault } from './templates/template-default/template-default';

export const Page = () => {
  return <TemplateDefault data={data} />;
};
