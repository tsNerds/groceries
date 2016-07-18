import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './';
import { ItemsAppComponent } from './items/';

const routes: RouterConfig = [
  { path: 'items', component: ItemsAppComponent },
  { path: 'items/:status', component: ItemsAppComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];