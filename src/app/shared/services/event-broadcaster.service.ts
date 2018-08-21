import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { EventEmitter } from '@angular/core/src/event_emitter';

interface EventDetails {
    key: string;
    data: any;
}

@Injectable()
export class EventBroadcasterService {

    private _eventBus: Subject<EventDetails>;

    constructor() {
        this._eventBus = new Subject<EventDetails>();
    }

    trigger(key: string, data?: any): void {
        this._eventBus.next({ key, data });
    }

    react(key: string): Observable<any> {
        return this._eventBus.asObservable().filter(
            event => event.key === key
        ).map(event => <any>event.data);
    }
}
