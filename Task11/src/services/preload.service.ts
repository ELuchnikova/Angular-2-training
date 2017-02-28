import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PreloadService implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if ( route.path === 'map') {
            // route.data && route.data['preload']) {


            // log the route path to the console
            console.log('Preloaded: ' + route.path);

            return load();
        } else {
            return Observable.of(null);
        }
    }
}
