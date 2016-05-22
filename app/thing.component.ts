import { Component } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { ThingService } from './services/thing.service';
import { Thing } from './models/thing';

@Component({
    selector: 'thing',
    template: '<pre>{{visualize(model)}}',
    providers: [ThingService]
})
export class ThingCmp {
    model:Thing;

    constructor(private _thingService: ThingService) {
    }

    routerOnActivate(curr: RouteSegment): void {
       let id = curr.getParam('id');
       this._thingService.get(id, thing => this.model = thing);
    }

    visualize(obj:any) {
        return JSON.stringify(obj, null, 2);
    }
}
