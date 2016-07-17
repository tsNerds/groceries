import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { GroceriesAppComponent, environment } from './app/';
import {disableDeprecatedForms, provideForms} from '@angular/forms'

if (environment.production) {
  enableProdMode();
}

bootstrap(GroceriesAppComponent, [
  disableDeprecatedForms(),
  provideForms(),
]).catch(err => console.error(err))
