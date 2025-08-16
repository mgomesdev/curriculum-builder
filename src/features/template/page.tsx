import { data } from './data/data';
import { TemplateDefault } from './templates/template-default';

export const Page = () => {
  return <TemplateDefault data={data} />;
};
