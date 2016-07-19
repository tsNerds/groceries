import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/index';


import { appRouterProviders } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, 
          [
          disableDeprecatedForms(), 
          provideForms(),
          appRouterProviders
        ]);
