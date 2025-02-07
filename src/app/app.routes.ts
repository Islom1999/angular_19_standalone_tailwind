import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages').then((m) => m.AboutComponent),
    children: [
      {
        path: 'detail',
        loadComponent: () => import('./pages').then((m) => m.DetailComponent),
      },
      {
        path: 'info',
        loadComponent: () => import('./pages').then((m) => m.InfoComponent),
      },
    ]
  },
];
