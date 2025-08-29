import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Page } from './features/editor/page';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
