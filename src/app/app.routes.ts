import { provideRouter, RouterConfig } from '@angular/router';
import { ItemsAppComponent } from './items/';

const routes: RouterConfig = [
  { path: 'items', component: ItemsAppComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];