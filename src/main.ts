import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Se encarga de levantar la apliaciomn
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
