import { RenderMode, ServerRoute } from '@angular/ssr';

export const ROUTES_SERVER: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
