import { Component } from '@angular/core';
import { ThingService } from './services/thing.service';
import { Thing } from './models/thing';
import { NgFor } from '@angular/common';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { InfoCmp } from './info.component';
import { ListCmp } from './list.component';
import { ThingCmp } from './thing.component';

@Component({
    selector: 'thing-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
})
@Routes([
    { path: '/', component: ListCmp },
    { path: '/list', component: ListCmp },
    { path: '/thing/:id', component: ThingCmp },
    { path: '/info', component: InfoCmp }
])
export class ThingAppCmp { }
