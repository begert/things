import { Component } from '@angular/core';
import { ThingService } from './services/thing.service';
import { Thing } from './models/thing';
import { NgFor } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'thing-list',
    templateUrl: 'app/list.component.html',
    directives: [NgFor, ROUTER_DIRECTIVES],
    providers: [ThingService]
})
export class ListCmp {
    model:Thing;
    listOfThings:any;

    error:string;

    constructor(private _thingService: ThingService) {
        this.model = this._thingService.createEmptyThing();
        this._thingService.onDataChange(lot => this.listOfThings = lot);
    }

    add() {
        if(!this.model.name) {
            this.error = 'please provide at least a name...';
            return;
        }
        this._thingService.addThing(this.model);

        //initialize model
        this.error = '';
        this.model = this._thingService.createEmptyThing();
    }

    visualize(obj:any) {
        return JSON.stringify(obj, null, 2);
    }

}
