import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import {disableDeprecatedForms, provideForms} from "@angular/forms";
import { AppModule } from './app.module';
import any = jasmine.any;

platformBrowserDynamic().bootstrapModule(AppModule)
    /*
    , [
    disableDeprecatedForms(),
    provideForms(),
])
    .catch((err:any) => console.log(err));
*/