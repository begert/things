import { bootstrap } from '@angular/platform-browser-dynamic';
import { ThingAppCmp } from './app.component';
import { ROUTER_PROVIDERS } from '@angular/router';

bootstrap(ThingAppCmp, [ROUTER_PROVIDERS]);
