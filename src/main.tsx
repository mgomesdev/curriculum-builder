import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Page } from './features/template/page';
import { data } from './features/template/data/data';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page data={data} />
  </StrictMode>
);
