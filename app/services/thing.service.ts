import { Injectable } from '@angular/core';
import { Thing, Dimension } from '../models/thing';

// loaded in index.html (no typings for 3.0...)
declare var firebase: any;

@Injectable()
export class ThingService {

    database;

    constructor() {
        firebase.auth().signInWithEmailAndPassword('begi@gmx.ch', 'superman').catch(function(error) {
            console.log(error);
        });
        this.database = firebase.database();
    }

    addThing(thing:Thing) {
        this.database.ref('things').push(thing);
    }

    onDataChange(callback) {
        this.database.ref('things').
            on('value', snapshot => callback(this.mapToArray(snapshot)));
    }

    get(id:string, callback) {
        this.database.ref('things/'+id).once('value').then(snapshot => callback(snapshot.val()));
    }

    private mapToArray(snapshot) {
        let val = snapshot.val();
        let ret = [];
        for(let key in val) {
            let thing = val[key];
            thing.id = key;
            ret.push(thing);
        }
        return ret;
    }

    createEmptyThing():Thing {
        return {
            name: '',
            color: '',
            dimensions: {
                height: null,
                width: null,
                depth: null
            }
        };
    }
}
