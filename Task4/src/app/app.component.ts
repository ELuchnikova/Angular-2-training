/// <reference path="../../node_modules/@types/node/index.d.ts" />

import './../assets/styles/app-styles.css';

import { Component, OnInit, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { IDot } from './../interfaces';
import { Location } from './map/geolocation';

@Component({
    selector: 'weather-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<header-navigation></header-navigation>
               <app-loader [state]="appState"></app-loader>
               <weather-list [location]="locationPromise | async" (gotData)="dataLoaded($event)"></weather-list>
               <google-map [location]="locationPromise | async"></google-map>
               <app-footer></app-footer>`
})
export class AppComponent implements OnInit {
    public locationPromise: Promise<IDot>;
    public appState: string = 'loading';

    constructor(private zone: NgZone) {}

    public ngOnInit() {
        this.locationPromise = Location.getCurrentLocation();

        let timer = performance ?
                performance.now.bind(performance) :
                Date.now.bind(Date);
        let time: number = 0;
        let startTime: number;
        let getTime = (): string => {
            return Math.floor(time * 100) / 100 + 'ms';
        };

        this.zone.onUnstable
            .subscribe((data: void) => {
                time = 0;
                startTime = timer();
            });
        this.zone.onStable
            .subscribe((data: void) => {
                time += timer() - startTime;
                console.log('checking took ', getTime(), ' of CPU time');
            });
    }

    public dataLoaded($event: {newState: string}): void {
        this.appState = $event.newState;
    };
}